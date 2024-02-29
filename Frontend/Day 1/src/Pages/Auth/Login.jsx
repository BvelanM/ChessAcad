import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../../assets/css/login.css";
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    alert("Successfully Logged in with " + email);
    navigate("/home");
  };

  return (
    <div>
      <div className="body-container">
        <div className="login-container" style={{ float: "left" }}>
          <h3>Log-in</h3>
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
              <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
