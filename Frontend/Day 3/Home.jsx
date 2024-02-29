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
      <Box sx={{ margin: 2, padding: 0 }}>
        {/* <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={search}
            onChange={handleSearchChange}
            sx={{ marginRight: 2 }}
          />
          <FormControl variant="outlined" size="small" sx={{ marginRight: 2 }}>
            <InputLabel id="sort-label">Sort</InputLabel>
            <Select
              labelId="sort-label"
              id="sort-select"
              value={sort}
              onChange={handleSortChange}
              label="Sort"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="asc">Ascending</MenuItem>
              <MenuItem value="desc">Descending</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" size="small">
            <InputLabel id="filter-label">Filter</InputLabel>
            <Select
              labelId="filter-label"
              id="filter-select"
              value={filter}
              onChange={handleFilterChange}
              label="Filter"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>
        </Box> */}
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
              <Card sx={{ backgroundColor: "#f5f5f5", boxShadow: 1 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://res.cloudinary.com/daybgq5gz/image/upload/v1708506299/Delhi_spohde.png" // Replace with your GPS image URL
                  alt="GPS Image"
                  className="cardMediaHover"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {location.icon} {location.city}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ChessAcad Centre
                    <Icon>
                      <img
                        src="https://cdn.dribbble.com/users/953685/screenshots/2791013/kony_dr_1.gif"
                        alt="Rating Logo"
                        style={{
                          width: "50px",
                          height: "30px",
                        }}
                      />
                    </Icon>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
