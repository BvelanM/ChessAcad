import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import NavBar from "../Components/NavBar";
import "../../assets/css/RandomAcademyCentre.css";
import "../../assets/css/home.css";
import "../../assets/css/start.css";
import { Link } from "react-router-dom";

const EditAcad = () => {
  const [academyLocation, setAcademyLocation] = useState("");
  const [chiefProfessor, setChiefProfessor] = useState("");
  const [numberOfMentors, setNumberOfMentors] = useState("");
  const [maxTrainees, setMaxTrainees] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <NavBar />
      <Container className="random-academy-centre-container">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontFamily={"DM Serif Display"}
          marginBottom={"30px"}
        >
          Edit Academy Details
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="random-academy-centre-form"
        >
          <TextField fullWidth label="Academy Location" value={"Cochin"} />
          <TextField fullWidth label="Chief Professor" value={"Magnus"} />
          <TextField
            type="number"
            fullWidth
            label="Number of Mentors"
            value={2}
            inputProps={{ min: "1", max: "100" }}
          />
          <TextField
            type="number"
            fullWidth
            label="Max. Trainees"
            value={40}
            inputProps={{ min: "1", max: "1000" }}
          />
          <Link to="/adminhome">
            <button className="toggle-button">Update Details</button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default EditAcad;
