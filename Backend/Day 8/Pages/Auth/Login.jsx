import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/login.css";
import axios from "axios";
const LoginPage = ({ toggleComponent }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/chessacad/authenticate",
        {
          username: email,
          password: password,
        }
      );
      console.log(response.data.userName);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("userName", response.data.userName);
      console.log(response.data.userId);
      alert("Successfully Logged in with " + email);
      if (response.data.role=="ADMIN") {
        navigate("/adminhome");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Error logging in. Please try again.");
    }
  };

  return (
    <div className="login">
      <div className="body-container">
        <div className="login-container" style={{ float: "left" }}>
          <h2>Log-in</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
            />
            <br />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />

            <input type="checkbox" id="remember" />
            <label for="remember">Remember me</label>
            <br />
            <br />
            <button type="submit">Login</button>
          </form>
          <button onClick={toggleComponent} className="toggle-button">
            New Trainee?
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
