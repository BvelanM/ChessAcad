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
import { Link } from "react-router-dom";

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

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to="/dashboard">
          <ListItem button key="Profile" className="nav-list-item">
            <ListItemText primary="Profile" />
          </ListItem>
        </Link>
        {/* <Link to="/courses">
          <ListItem button key="Courses" className="nav-list-item">
            <ListItemText primary="Courses" />
          </ListItem>
        </Link>
        <Link to="/mentors">
          <ListItem button key="Mentors" className="nav-list-item">
            <ListItemText primary="Mentors Record" />
          </ListItem>
        </Link>
        <Link to="/support">
          <ListItem button key="Support" className="nav-list-item">
            <ListItemText primary="Support" />
          </ListItem>
        </Link> */}
      </List>
    </div>
  );

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
          <Link to="/home">
            <IconButton>
              <div className="home-image-container">
                <img
                  src="https://res.cloudinary.com/daybgq5gz/image/upload/v1708708518/download_vn4mie.png"
                  alt="Profile"
                  className="home-image"
                  style={{
                    width: "100px",
                    height: "50px",
                    borderRadius: "10px",
                    marginRight: "0px",
                  }}
                />
              </div>
            </IconButton>
          </Link>
          <p>Home</p>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </ThemeProvider>
  );
}

export default App;
