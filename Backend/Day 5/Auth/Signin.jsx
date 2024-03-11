import { useState } from "react";
import "../../assets/css/sign.css";
import { useNavigate } from "react-router-dom";
import { MenuItem, Select } from "@mui/material";
import axios from "axios";

const SignUpPage = ({ toggleComponent }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNumber: 0,
    bio: "",
    achievements: "",
    ranking: "",
    roles: "USER",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/chessacad/new",
        formData
      );
      console.log(response.data);
      alert("Signed up a new account successfully. Please Login");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up. Please try again.");
    }
  };
  return (
    <div className="login">
      <div className="body-container">
        <div className="signin-container">
          <h2>Sign-Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <Select
              value={formData.roles}
              onChange={handleChange}
              name="roles"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                height: "38px",
                width: "420px",
                boxShadow: "1px 1px 7px 1px #000000",
                borderRadius: "7px",
                textAlign: "left",
                fontSize: "15px",
                color: "grey",
              }}
            >
              <MenuItem value="USER">User</MenuItem>
              <MenuItem value="ADMIN">Admin</MenuItem>
            </Select>
            <br />
            <br />
            <button type="submit">Sign Up</button>
          </form>
          <button onClick={toggleComponent} className="toggle-button">
            Switch to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
