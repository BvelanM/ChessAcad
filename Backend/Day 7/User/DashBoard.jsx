import { useEffect, useState } from "react";
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
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DashNav from "../Components/DashNav";
import "../../assets/css/dash.css";
import "../../assets/css/home.css";
import "../../assets/css/start.css";
import { Chessboard } from "react-chessboard";
export default function UserProfile() {
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [ranking, setRanking] = useState("");
  const [bio, setBio] = useState("");
  const [achievements, setAchievements] = useState("");

  const [editingEmail, setEditingEmail] = useState(false);
  const [editingContact, setEditingContact] = useState(false);
  const [editingRanking, setEditingRanking] = useState(false);
  const [editingBio, setEditingBio] = useState(false);
  const [editingAchievements, setEditingAchievements] = useState(false);
  const [username, setUsername] = useState("Monk Home");
  const [editingUsername, setEditingUsername] = useState(false);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    fetchUserProfile();
  }, []);
  const fetchUserProfile = async () => {
    if (userId) {
      try {
        const response = await fetch(
          `http://localhost:8080/chessacad/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsername(data.firstName);
        setEmail(data.email);
        setContact(data.contactNumber);
        setRanking(data.ranking);
        setBio(data.bio);
        setAchievements(data.achievements);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleContactEdit = () => {
    setEditingContact(true);
  };

  const handleContactSave = (event) => {
    if (event.key === "Enter") {
      updateUserProfile({
        firstName: username,
        email: email,
        contactNumber: event.target.value,
        ranking: ranking,
        bio: bio,
        achievements: achievements,
      });
      setEditingContact(false);
    }
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleRankingEdit = () => {
    setEditingRanking(true);
  };

  const handleRankingSave = (event) => {
    if (event.key === "Enter") {
      updateUserProfile({
        firstName: username,
        email: email,
        contactNumber: contact,
        ranking: event.target.value,
        bio: bio,
        achievements: achievements,
      });
      setEditingRanking(false);
    }
  };

  const handleRankingChange = (event) => {
    setRanking(event.target.value);
  };

  const handleBioEdit = () => {
    setEditingBio(true);
  };

  const handleBioSave = (event) => {
    if (event.key === "Enter") {
      updateUserProfile({
        firstName: username,
        email: email,
        contactNumber: contact,
        ranking: ranking,
        bio: event.target.value,
        achievements: achievements,
      });
      setEditingBio(false);
    }
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleAchievementsEdit = () => {
    setEditingAchievements(true);
  };

  const handleAchievementsSave = (event) => {
    if (event.key === "Enter") {
      updateUserProfile({
        firstName: username,
        email: email,
        contactNumber: contact,
        ranking: ranking,
        bio: bio,
        achievements: event.target.value,
      });
      setEditingAchievements(false);
    }
  };

  const handleAchievementsChange = (event) => {
    setAchievements(event.target.value);
  };
  const handleEmailEdit = () => {
    setEditingEmail(true);
  };

  const handleEmailSave = (event) => {
    if (event.key === "Enter") {
      updateUserProfile({
        firstName: username,
        email: event.target.value,
        contactNumber: contact,
        ranking: ranking,
        bio: bio,
        achievements: achievements,
      });
      setEditingEmail(false);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleUsernameEdit = () => {
    setEditingUsername(true);
  };

  const handleUsernameSave = (event) => {
    if (event.key === "Enter") {
      updateUserProfile({
        firstName: event.target.value,
        email: email,
        contactNumber: contact,
        ranking: ranking,
        bio: bio,
        achievements: achievements,
      });
      setEditingUsername(false);
    }
  };
  const handleFileUpload = () => {
    document.getElementById("fileInput").click();
  };
  const token = localStorage.getItem("token");
  const updateUserProfile = async (updatedData) => {
    try {
      const response = await fetch(
        `http://localhost:8080/chessacad/user/update/${userId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("User profile updated successfully:", data);
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };
  return (
    <>
      <DashNav />
      {/* <Chessboard id="BasicBoard" boardWidth={"100px"} /> */}
      <div className="dash-container">
        <div className="profile">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            fontFamily={"DM Serif Display"}
            fontSize={"40px"}
            fontWeight={"bolder"}
            sx={{ textShadow: "1px 1px 2px black" }}
          >
            User Profile
          </Typography>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Avatar
              alt="Profile"
              src="https://res.cloudinary.com/daybgq5gz/image/upload/v1708420229/CHESSACAD_dbtyh0.png"
              sx={{ width: 100, height: 100, mb: 2 }}
            />
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <IconButton
              aria-label="edit"
              className="edit-button"
              sx={{
                position: "absolute",
                top: "65%",
                right: "10%",
                transform: "translate(50%, -50%)",
                backgroundColor: "#3f2305",
                color: "white",
                borderRadius: "50%",
                padding: "5px",
              }}
              onClick={handleFileUpload}
            >
              <EditIcon />
            </IconButton>
          </Box>
          <p
            style={{
              display: "inline",
              marginRight: "5px",
              marginLeft: "20px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Attendance
          </p>
          <progress
            value={"70"}
            max={"100"}
            color="#000000"
            style={{
              display: "inline-block",
              marginLeft: "10px",
              borderRadius: "50%",
            }}
          ></progress>
          <div className="container-form">
            {editingUsername ? (
              <TextField
                value={username}
                onChange={handleUsernameChange}
                onKeyDown={handleUsernameSave}
                autoFocus
                sx={{ backgroundColor: "white", padding: 0, borderRadius: 5 }}
                className={`condRenderTextField ${
                  editingUsername ? "show" : ""
                }`}
              />
            ) : (
              <Typography
                variant="body1"
                sx={{ mb: 2 }}
                onClick={handleUsernameEdit}
                className="microf"
              >
                First Name: {username}
              </Typography>
            )}
            {editingEmail ? (
              <TextField
                value={email}
                onChange={handleEmailChange}
                onKeyDown={handleEmailSave}
                autoFocus
                sx={{ backgroundColor: "white", padding: 0, borderRadius: 5 }}
                className={`condRenderTextField ${editingEmail ? "show" : ""}`}
              />
            ) : (
              <Typography
                variant="body1"
                sx={{ mb: 2 }}
                onClick={handleEmailEdit}
                className="microf"
              >
                Email: {email}
              </Typography>
            )}
            {editingContact ? (
              <TextField
                value={contact}
                onChange={handleContactChange}
                onKeyDown={handleContactSave}
                autoFocus
                sx={{ backgroundColor: "white", padding: 0, borderRadius: 5 }}
                className={`condRenderTextField ${
                  editingContact ? "show" : ""
                }`}
              />
            ) : (
              <Typography
                variant="body1"
                sx={{ mb: 2 }}
                onClick={handleContactEdit}
                className="microf"
              >
                Contact: {contact}
              </Typography>
            )}
            {editingRanking ? (
              <TextField
                value={ranking}
                onChange={handleRankingChange}
                onKeyDown={handleRankingSave}
                autoFocus
                sx={{ backgroundColor: "white", padding: 0, borderRadius: 5 }}
                className={`condRenderTextField ${
                  editingRanking ? "show" : ""
                }`}
              />
            ) : (
              <Typography
                variant="body1"
                sx={{ mb: 2 }}
                onClick={handleRankingEdit}
                className="microf"
              >
                Chess Player Ranking: {ranking}
              </Typography>
            )}
            {editingBio ? (
              <TextField
                value={bio}
                onChange={handleBioChange}
                onKeyDown={handleBioSave}
                autoFocus
                multiline
                rows={4}
                sx={{ backgroundColor: "white", padding: 0, borderRadius: 5 }}
                className={`condRenderTextField ${editingBio ? "show" : ""}`}
              />
            ) : (
              <Typography
                variant="body1"
                sx={{ mb: 2 }}
                onClick={handleBioEdit}
                className="microf"
              >
                Bio: {bio}
              </Typography>
            )}
            {editingAchievements ? (
              <TextField
                value={achievements}
                onChange={handleAchievementsChange}
                onKeyDown={handleAchievementsSave}
                autoFocus
                multiline
                rows={4}
                sx={{ backgroundColor: "white", padding: 0, borderRadius: 5 }}
                className={`condRenderTextField ${
                  editingAchievements ? "show" : ""
                }`}
              />
            ) : (
              <Typography
                variant="body1"
                sx={{ mb: 2 }}
                onClick={handleAchievementsEdit}
                className="microf"
              >
                Achievements: {achievements}
              </Typography>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
