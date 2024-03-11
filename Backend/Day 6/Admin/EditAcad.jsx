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
import { Link, useNavigate } from "react-router-dom";

const EditAcad = () => {
  const [academyLocation, setAcademyLocation] = useState("");
  const [chiefProfessor, setChiefProfessor] = useState("");
  const [numberOfMentors, setNumberOfMentors] = useState("");
  const [maxTrainees, setMaxTrainees] = useState("");
  const [imgURL, setimgURL] = useState("");
  const [academyDetails, setAcademyDetails] = useState({});
  const token = localStorage.getItem("token");
  const navigate=useNavigate();
  const academyId = localStorage.getItem("academyId");
  useEffect(() => {
             setAcademyLocation("");
             setChiefProfessor("");
             setNumberOfMentors("");
             setMaxTrainees("");
             setimgURL("");
     const fetchAcademyDetails = async (academyId) => {
       try {
         const response = await fetch(
           `http://localhost:8080/chessacad/academy/${academyId}`,
           {
             headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
             },
           }
         );
         if (!response.ok) {
           throw new Error("Network response was not ok");
         }
         const data = await response.json();
         setAcademyDetails(data);
         setAcademyLocation(academyDetails.location);
         setChiefProfessor(academyDetails.chiefProfessor);
         setNumberOfMentors(academyDetails.mentorCount);
         setMaxTrainees(academyDetails.maxTrainees);
         setimgURL(academyDetails.imgURL);
       } catch (error) {
         console.error("Error fetching academy details:", error);
       }
     };
      fetchAcademyDetails(academyId);
  }, []);

  const fetchAcademyDetails = async (academyId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/chessacad/academy/${academyId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAcademyDetails(data);
      setAcademyLocation(academyDetails.location);
      setChiefProfessor(academyDetails.chiefProfessor);
      setNumberOfMentors(academyDetails.mentorCount);
      setMaxTrainees(academyDetails.maxTrainees);
      setimgURL(academyDetails.imgURL);
    } catch (error) {
      console.error("Error fetching academy details:", error);
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedAcademyDetails = {
      location: academyLocation,
      imgURL: imgURL,
    maxTrainees: maxTrainees,
    chiefProfessor:chiefProfessor,
    mentorCount:numberOfMentors
  };

    try {
      const response = await fetch(
        `http://localhost:8080/chessacad/academy/update/${academyId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedAcademyDetails),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Academy updated successfully:", data);
      localStorage.removeItem("academyId");
    navigate("/adminhome");
    } catch (error) {
      console.error("Error updating academy:", error);
    }
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
          <TextField
            fullWidth
            label="Academy Location"
            value={academyLocation}
          />
          <TextField fullWidth label="Chief Professor" value={chiefProfessor} />
          <TextField
            type="number"
            fullWidth
            label="Number of Mentors"
            value={numberOfMentors}
            inputProps={{ min: "1", max: "100" }}
          />
          <TextField
            type="number"
            fullWidth
            label="Max. Trainees"
            value={maxTrainees}
            inputProps={{ min: "1", max: "1000" }}
          />
          <TextField fullWidth label="Cover URL" value={imgURL} />
          <button className="toggl-button">Update Details</button>
        </Box>
      </Container>
    </>
  );
};

export default EditAcad;
