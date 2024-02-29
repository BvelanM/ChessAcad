// src/App.jsx
import React, { useState } from "react";
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
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

// Define your chess-themed color palette and typography
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f2305", // Chess brown
    },
    secondary: {
      main: "#f5f5f5", // Off-white
    },
  },
  typography: {
    fontFamily: "ChessFont, Arial, sans-serif", // Replace with a chess-themed font
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
        {["Home", "Games", "Learn", "Community"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chess Landing Page
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      <main>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Chess World!
        </Typography>
        <Typography variant="body1">
          Explore our collection of chess games, learn strategies, and join our
          community of chess enthusiasts.
        </Typography>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          {[
            { city: "Delhi", icon: "🇮🇳" },
            { city: "Mumbai", icon: "🇮🇳" },
            { city: "Bangalore", icon: "🇮🇳" },
            { city: "Chennai", icon: "🇮🇳" },
          ].map((location, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {location.icon} {location.city}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Chess Academy Location
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </ThemeProvider>
  );
}

export default App;
