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
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../Components/NavBar";
import { useState } from "react";
import "../../assets/css/home.css";
import { LocationOn, LocationOnOutlined, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
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

export default function UserHome() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <NavBar />
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
            boxShadow: "-5px 2px 18px 0.5px #daa520",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className="serif"
          >
            Welcome to the ChessAcad!
          </Typography>
          <Typography variant="body1" className="serif">
            Let's get started by finding the nearest ChessAcad for you!
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
          <Grid container spacing={2} sx={{ mt: 4 }}>
            {[
              { city: "Delhi", icon: "🇮🇳" },
              { city: "Mumbai", icon: "🇮🇳" },
              { city: "Bangalore", icon: "🇮🇳" },
              { city: "Chennai", icon: "🇮🇳" },
            ].map((location, index) => (
              <Grid item xs={1} sm={5} md={3} key={index}>
               <Link to="/joinacad"> <Card sx={{ backgroundColor: "#f5f5f5", boxShadow: 1 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://res.cloudinary.com/daybgq5gz/image/upload/v1708506299/Delhi_spohde.png"
                    alt="GPS Image"
                    className="cardMediaHover"
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {location.icon} {location.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ChessAcad Centre
                    </Typography>
                  </CardContent>
                </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}
