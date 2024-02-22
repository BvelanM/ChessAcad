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

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f2305",
    },
    secondary: {
      main: "#f5f5f5",
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
        {["Home", "Locations", "Curriculum", "About Us", "Contact"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginTop: 1 }}
          >
            ChessAcad
          </Typography>
          {/* <IconButton color="inherit">
            <img
              src="https://i.imgur.com/dhbbpn4.gif"
              alt="GIF"
              style={{ width: "120px", height: "40px" }}
            />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </ThemeProvider>
  );
}

export default App;
