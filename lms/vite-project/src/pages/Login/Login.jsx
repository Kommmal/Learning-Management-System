import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [success, setSuccess] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin123@gmail.com" && password === "1234") {
      setError("");
      login();
      setSuccess('Login Succesfully!')
      navigate("/mycourses");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-logo">
          <img src="/images/IE logo 1.png" alt="Logo" />
        </div>
        <div className="login-heading">
          <h1>Login</h1>
          <p>Please fill your details to access your account</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="login-inputs">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="youremail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="login-buttons">
            <a href="/signup" className="btn1">
              Forget Password
            </a>
            <button type="submit" className="btn2">
              Log in
            </button>
          </div>
            <div className="signUP"><p>Don't have an account? </p><a href="/signup" className="signup-link">
              Sign Up
            </a></div>
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
};

export default Login;
