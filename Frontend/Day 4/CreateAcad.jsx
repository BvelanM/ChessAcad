import { useState } from "react";
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
import "../../assets/css/createacad.css";
import "../../assets/css/home.css";
import "../../assets/css/start.css";
import { Link } from "react-router-dom";

const CreateAcademyCentre = () => {
  const [academyLocation, setAcademyLocation] = useState("");
  const [chiefProfessor, setChiefProfessor] = useState("");
  const [numberOfMentors, setNumberOfMentors] = useState("");
  const [maxTrainees, setMaxTrainees] = useState("");

  const handleAcademyLocationChange = (event) => {
    setAcademyLocation(event.target.value);
  };

  const handleChiefProfessorChange = (event) => {
    setChiefProfessor(event.target.value);
  };

  const handleNumberOfMentorsChange = (event) => {
    setNumberOfMentors(event.target.value);
  };

  const handleMaxTraineesChange = (event) => {
    setMaxTrainees(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <NavBar />
      <Container className="create-academy-centre-container">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontFamily={"DM Serif Display"}
          marginBottom={"30px"}
        >
          Create Academy Centre
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="create-academy-centre-form"
        >
          <TextField
            fullWidth
            label="Academy Location"
            value={academyLocation}
            onChange={handleAcademyLocationChange}
          />
          <TextField
            fullWidth
            label="Chief Professor"
            value={chiefProfessor}
            onChange={handleChiefProfessorChange}
          />
          <TextField
            type="number"
            fullWidth
            label="Number of Mentors"
            value={numberOfMentors}
            onChange={handleNumberOfMentorsChange}
            inputProps={{ min: "1", max: "100" }}
          />
          <TextField
            type="number"
            fullWidth
            label="Max. Trainees"
            value={maxTrainees}
            onChange={handleMaxTraineesChange}
            inputProps={{ min: "1", max: "1000" }}
          />
          <Link to="/adminhome">
            <button className="toggle-button">Create Academy Centre</button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default CreateAcademyCentre;
