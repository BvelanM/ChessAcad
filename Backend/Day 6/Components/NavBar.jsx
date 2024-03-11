import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ff8c00",
    },
  },
  typography: {
    fontFamily: "ChessFont, Arial, sans-serif",
  },
});
const username = localStorage.getItem("userName");
function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
const navigate=useNavigate();
  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to="/home">
          <ListItem button key="Home" className="nav-list-item">
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/courses">
          <ListItem button key="Courses" className="nav-list-item">
            <ListItemText primary="Courses" />
          </ListItem>
        </Link>
        <Link to="/about-us">
          <ListItem button key="About Us" className="nav-list-item">
            <ListItemText primary="About Us" />
          </ListItem>
        </Link>
          <ListItem button key="Logout" className="nav-list-item" onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
      </List>
    </div>
  );
  const handleLogout = (event) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("userName");
  navigate("/");
  }
  return (
    <ThemeProvider theme={theme} sx={{ width: "100%", margin: 0, padding: 0 }}>
      <AppBar position="static" sx={{ width: "100%", margin: 0, padding: 0 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <div className="navlogo">
            {/* <IconButton color="inherit" aria-label="logo">
              <img
                src="https://res.cloudinary.com/daybgq5gz/image/upload/v1708422984/CHESSACAD-removebg_nzdipv.png"
                alt="Logo"
                style={{ width: "40px", height: "40px" }}
              />
            </IconButton> */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                fontSize: "25px",
                marginLeft: "40rem",
              }}
              className="animate-charcter"
            >
              ChessAca♔
            </Typography>
          </div>
          {/* <IconButton color="inherit">
            <img
              src="https://i.imgur.com/dhbbpn4.gif"
              alt="GIF"
              style={{ width: "120px", height: "40px" }}
            />
          </IconButton> */}
          <Link to="/dashboard">
            <IconButton>
              <div className="profile-image-container">
                <img
                  src="https://res.cloudinary.com/daybgq5gz/image/upload/v1708707279/Untitled_design_6_ejsnvj.png"
                  alt="Profile"
                  className="profile-image"
                />
              </div>
            </IconButton>
          </Link>
          <p>{username}</p>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </ThemeProvider>
  );
}

export default App;
