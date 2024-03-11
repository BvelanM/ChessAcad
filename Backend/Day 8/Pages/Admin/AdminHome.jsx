import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  CardMedia,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Icon,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminNavBar from "../Components/AdminNavBar";
import {
  AddCircleOutlineOutlined,
  LocationOn,
  LocationOnOutlined,
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../assets/css/home.css"; // Make sure to import your CSS file
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b58900",
    },
    secondary: {
      main: "#c0c0c0",
    },
  },
  typography: {
    fontFamily: "ChessFont, Arial, sans-serif", // Replace with a chess-themed font
  },
});

export default function AdminHome() {
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [academies, setAcademies] = useState([]);
  const token = localStorage.getItem("token");
  const navigate=useNavigate();
  const fetchAcademies = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/chessacad/academy/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAcademies(data);
    } catch (error) {
      console.error("Error fetching academies:", error);
    }
  };

  useEffect(() => {
    const fetchAcademies = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/chessacad/academy/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAcademies(data);
      } catch (error) {
        console.error("Error fetching academies:", error);
      }
    };

    fetchAcademies();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const [selectedAcademyId, setSelectedAcademyId] = useState(null);

  const handleDeleteButtonClick = (academyId) => {
    setSelectedAcademyId(academyId);
    setOpenDialog(true);
  };

  const handleDialogConfirm = async () => {
    if (selectedAcademyId) {
      try {
        const response = await fetch(
          `http://localhost:8080/chessacad/academy/delete/${selectedAcademyId}`,
          {
            method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Academy deleted successfully");
        setOpenDialog(false);
        // Optionally, refetch the academies to update the UI
        fetchAcademies();
      } catch (error) {
        console.error("Error deleting academy:", error);
      }
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };


  const [selectedCards, setSelectedCards] = useState([]);


  return (
    <>
      <AdminNavBar />
      <div className="homeroot2">
        <div className="home-root"></div>
        <Box
          sx={{
            margin: 2,
            padding: 0,
            position: "relative",
            bgcolor: "white",
            p: "20px",
            borderRadius: "20px",
            boxShadow: "-5px  2px  18px  0.5px #daa520",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            fontFamily="DM Serif Display"
          >
            Welcome Admin!
          </Typography>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={search}
            onChange={handleSearchChange}
            sx={{ marginTop: 2, borderRight: "none" }}
          />
          <IconButton
            sx={{
              marginTop: 2,
              background: "#daa520",
              borderRadius: "3px",
              borderLeft: "none",
            }}
          >
            <LocationOnOutlined sx={{ color: "white" }}>
              Search
            </LocationOnOutlined>
          </IconButton>
          <Link to="/createacad">
            <IconButton
              sx={{
                marginTop: 2,
                background: "#daa520",
                borderRadius: "3px",
                borderLeft: "none",
                marginLeft: "4px",
                fontSize: "20px",
                fontFamily: "DM Serif Display",
                paddingLeft: "4px",
              }}
            >
              <AddCircleOutlineOutlined sx={{ color: "white" }} />
              Add Academy
            </IconButton>
          </Link>
          <Grid container spacing={2} sx={{ mt: 4 }}>
            {academies.map((academy, index) => (
              <Grid item xs={12} sm={6} md={4} key={academy.acadID}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={academy.imgURL}
                    alt="Academy Image"
                    className="cardMediaHover"
                    onClick={() => {
                      localStorage.setItem("academyId", academy.acadID);
                      navigate("/editacad");
                    }}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {academy.location}
                    </Typography>
                    {/* Other academy details */}
                  </CardContent>
                  <IconButton
                    onClick={() => handleDeleteButtonClick(academy.acadID)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <Dialog
        open={openDialog}
        onConfirm={handleDialogConfirm}
        onClose={handleDialogClose}
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to delete this Academy?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDialogConfirm} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </>
  );
}
