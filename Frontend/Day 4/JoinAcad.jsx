import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import NavBar from "../Components/NavBar";
import "../../assets/css/joinacad.css/";
import "../../assets/css/home.css";
import "../../assets/css/start.css";
import { Link } from "react-router-dom";

const UserApplication = () => {
  const [duration, setDuration] = useState("");
  const [mentor, setMentor] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [comments, setComments] = useState("");

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleMentorChange = (event) => {
    setMentor(event.target.value);
  };

  const handlePaymentModeChange = (event) => {
    setPaymentMode(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <NavBar />
      {/* <div className="home-root"></div> */}
      <Container className="user-application-container">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontFamily={"DM Serif Display"}
          marginBottom={"30px"}
        >
          User Application
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="user-application-form"
        >
          <FormControl fullWidth>
            <InputLabel id="duration-label">Duration of Academia</InputLabel>
            <Select
              labelId="duration-label"
              id="duration-select"
              value={duration}
              onChange={handleDurationChange}
            >
              <MenuItem value={3}>3 Months</MenuItem>
              <MenuItem value={6}>6 Months</MenuItem>
              <MenuItem value={12}>1 Year</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="mentor-label">Choose Mentor</InputLabel>
            <Select
              labelId="mentor-label"
              id="mentor-select"
              value={mentor}
              onChange={handleMentorChange}
            >
              <MenuItem value="mentor1">Gose</MenuItem>
              <MenuItem value="mentor2">Shakunthala</MenuItem>
              <MenuItem value="mentor3">Mariappan</MenuItem>
              <MenuItem value="mentor4">Kruell</MenuItem>
            </Select>
          </FormControl>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="payment-mode"
              name="payment-mode"
              value={paymentMode}
              onChange={handlePaymentModeChange}
            >
              <FormControlLabel value="cash" control={<Radio />} label="Cash" />
              <FormControlLabel value="card" control={<Radio />} label="Card" />
              <FormControlLabel value="upi" control={<Radio />} label="UPI" />
            </RadioGroup>
          </FormControl>
          <TextField
            multiline
            rows={4}
            variant="outlined"
            label="Additional Comments"
            value={comments}
            onChange={handleCommentsChange}
            fullWidth
          />
          <Link to="/home">
            <button className="toggle-button">Submit Application</button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default UserApplication;
