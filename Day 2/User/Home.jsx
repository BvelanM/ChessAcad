import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../Components/NavBar";


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
  return (
    // <ThemeProvider theme={theme}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         Chess Landing Page
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    //   <Container>
    //     <Box my={4}>
    //       <Typography variant="h4" component="h1" gutterBottom>
    //         Welcome to the Chess World!
    //       </Typography>
    //       <Typography variant="body1">
    //         Explore our collection of chess games, learn strategies, and join
    //         our community of chess enthusiasts.
    //       </Typography>
    //     </Box>
    //   </Container>
    // </ThemeProvider>
    <> <NavBar ></NavBar>
    </>
  );
}

