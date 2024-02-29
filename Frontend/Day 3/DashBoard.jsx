import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  IconButton,
  Icon,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import NavBar from "../Components/NavBar";

export default function UserProfile() {
  // Placeholder values for demonstration
  const username = "John Doe";
  const email = "john.doe@example.com";
  const contact = "123-456-7890";
  const ranking = "Advanced";
  const bio = "A passionate chess player with over   10 years of experience.";
  const achievements = "Winner of the National Chess Championship   2023.";

  return (
    <>      <NavBar />
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 4,
          backgroundColor: "#3f2305",
          color: "white",
          p: 2,
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          User Profile
        </Typography>
        <Card>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Profile"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 100, height: 100, mb: 2 }}
              />
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography variant="body1">Username: {username}</Typography>
                <IconButton sx={{ ml: 2 }}>
                  <EditIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography variant="body1">Email: {email}</Typography>
                <IconButton sx={{ ml: 2 }}>
                  <EditIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography variant="body1">Contact: {contact}</Typography>
                <IconButton sx={{ ml: 2 }}>
                  <EditIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography variant="body1">
                  Chess Player Ranking: {ranking}
                </Typography>
                <IconButton sx={{ ml: 2 }}>
                  <EditIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography variant="body1">Bio: {bio}</Typography>
                <IconButton sx={{ ml: 2 }}>
                  <EditIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography variant="body1">
                  Achievements: {achievements}
                </Typography>
                <IconButton sx={{ ml: 2 }}>
                  <EditIcon />
                </IconButton>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
    </>
  );
}
