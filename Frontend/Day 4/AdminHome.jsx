// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Container,
//   Box,
//   Card,
//   CardContent,
//   Grid,
//   CardMedia,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   IconButton,
//   Icon,
// } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import NavBar from "../Components/NavBar";
// import { useState } from "react";
// import "../../assets/css/createacad.css";
// import "../../assets/css/home.css";
// import "../../assets/css/start.css";
// import {
//   AddCircleOutlineOutlined,
//   LocationOn,
//   LocationOnOutlined,
//   Search,
// } from "@mui/icons-material";
// import { Link } from "react-router-dom";
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#b58900",
//     },
//     secondary: {
//       main: "#c0c0c0",
//     },
//   },
//   typography: {
//     fontFamily: "ChessFont, Arial, sans-serif", // Replace with a chess-themed font
//   },
// });

// export default function AdminHome() {
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");
//   const [filter, setFilter] = useState("");

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value);
//   };

//   const handleSortChange = (event) => {
//     setSort(event.target.value);
//   };

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };

//   return (
//     <>
//       <NavBar />
//       <div className="homeroot2">
//         <div className="home-root"></div>
//         <Box
//           sx={{
//             margin: 2,
//             padding: 0,
//             position: "relative",
//             bgcolor: "white",
//             p: "20px",
//             borderRadius: "20px",
//             boxShadow: "-5px 2px 18px 0.5px #daa520",
//           }}
//         >
//           <Typography
//             variant="h4"
//             component="h1"
//             gutterBottom
//             fontFamily="DM Serif Display"
//           >
//             Welcome Admin!
//           </Typography>
//           <TextField
//             label="Search"
//             variant="outlined"
//             size="small"
//             value={search}
//             onChange={handleSearchChange}
//             sx={{ marginTop: 2, borderRight: "none" }}
//           />
//           <IconButton
//             sx={{
//               marginTop: 2,
//               background: "#daa520",
//               borderRadius: "3px",
//               borderLeft: "none",
//             }}
//           >
//             <LocationOnOutlined sx={{ color: "white" }}>
//               Search
//             </LocationOnOutlined>
//           </IconButton>
//           <Link to="/createacad">
//             <IconButton
//               sx={{
//                 marginTop: 2,
//                 background: "#daa520",
//                 borderRadius: "3px",
//                 borderLeft: "none",
//                 marginLeft: "4px",
//                 fontSize: "20px",
//                 fontFamily: "DM Serif Display",
//                 paddingLeft: "4px",
//               }}
//             >
//               <AddCircleOutlineOutlined
//                 sx={{ color: "white" }}
//               ></AddCircleOutlineOutlined>
//               Add Academy
//             </IconButton>
//           </Link>
//           <Grid container spacing={2} sx={{ mt: 4 }}>
//             {[
//               { city: "Delhi", icon: "🇮🇳" },
//               { city: "Mumbai", icon: "🇮🇳" },
//               { city: "Bangalore", icon: "🇮🇳" },
//               { city: "Chennai", icon: "🇮🇳" },
//             ].map((location, index) => (
//               <Grid item xs={1} sm={5} md={3} key={index}>
//                 <Link to="/joinacad">
//                   {" "}
//                   <Card sx={{ backgroundColor: "#f5f5f5", boxShadow: 1 }}>
//                     <CardMedia
//                       component="img"
//                       height="200"
//                       image="https://res.cloudinary.com/daybgq5gz/image/upload/v1708506299/Delhi_spohde.png"
//                       alt="GPS Image"
//                       className="cardMediaHover"
//                     />
//                     <CardContent>
//                       <Typography variant="h5" component="div">
//                         {location.icon} {location.city}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         ChessAcad Centre
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Link>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </div>
//     </>
//   );
// }
// Home.jsx
import React, { useState } from "react";
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
import NavBar from "../Components/NavBar";
import {
  AddCircleOutlineOutlined,
  LocationOn,
  LocationOnOutlined,
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../assets/css/home.css"; // Make sure to import your CSS file

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
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const locations = [
    { city: "Delhi", icon: "🇮🇳" },
    { city: "Mumbai", icon: "🇮🇳" },
    { city: "Bangalore", icon: "🇮🇳" },
    { city: "Chennai", icon: "🇮🇳" },
  ];

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDeleteButtonClick = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

const [cardVisibility, setCardVisibility] = useState(locations.map(() => true));

const [selectedCards, setSelectedCards] = useState([]);

// Modify the handleDialogConfirm function to update the cardVisibility state
const handleDialogConfirm = () => {
  // Update the visibility state for the selected cards
  const updatedVisibility = cardVisibility.map((visible, index) => {
    return visible && !selectedCards.includes(index) ? true : false;
  });
  setCardVisibility(updatedVisibility);
  setSelectedCards([]); // Clear the selected cards
  setOpenDialog(false); // Close the dialog
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
            {locations.map((location, index) => (
              <Grid
                item
                xs={1}
                sm={5}
                md={3}
                key={index}
                style={{ display: cardVisibility[index] ? "block" : "none" }}
              >
                <Checkbox
                  checked={selectedCards.includes(index)}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelectedCards([...selectedCards, index]);
                    } else {
                      setSelectedCards(
                        selectedCards.filter((id) => id !== index)
                      );
                    }
                  }}
                />
                <Card sx={{ backgroundColor: "#f5f5f5", boxShadow: 1 }}>
                  <Link to="/editacad">
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://res.cloudinary.com/daybgq5gz/image/upload/v1708506299/Delhi_spohde.png"
                      alt="GPS Image"
                      className="cardMediaHover"
                    ></CardMedia>
                  </Link>
                  <IconButton onClick={handleDeleteButtonClick}>
                    <DeleteIcon />
                  </IconButton>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {location.icon} {location.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ChessAcad Centre
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
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
    </>
  );
}
