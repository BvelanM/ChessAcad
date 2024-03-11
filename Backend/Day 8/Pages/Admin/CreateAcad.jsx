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
import { useNavigate } from "react-router-dom";

const CreateAcademyCentre = () => {
  const [academyLocation, setAcademyLocation] = useState("");
  const [chiefProfessor, setChiefProfessor] = useState("");
  const [numberOfMentors, setNumberOfMentors] = useState("");
  const [maxTrainees, setMaxTrainees] = useState("");
  const [imgURL, setimgURL] = useState("");
  const navigate=useNavigate();
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
  const handleImgURL = (event) => {
    setimgURL(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const academyData = {
      location: academyLocation,
      imgURL:imgURL,
      maxTrainees:maxTrainees,
      chiefProfessor:chiefProfessor,
      mentorCount:numberOfMentors
    };

    try {
      const response = await fetch(
        "http://localhost:8080/chessacad/academy/add",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(academyData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Academy created successfully:", data);
      navigate("/adminhome");
    } catch (error) {
      console.error("Error creating academy:", error);
    }
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
          <TextField
            fullWidth
            label="Cover Image"
            value={imgURL}
            onChange={handleImgURL}
          />
          <button className="toggl-button" onClick={handleSubmit}>
            Create Academy Centre
          </button>
        </Box>
      </Container>
    </>
  );
};

export default CreateAcademyCentre;
