import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./SignUp.css";

const SignUp = () => {
  const { signup } = useContext(AuthContext); // Use the signup function from context
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");


  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    // User details object
    const userDetails = {
      name,
      email,
      password, // In a real app, password should be hashed and not stored directly
    };

    signup(userDetails); // Call the signup function from AuthContext
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-logo">
          <img src="/images/IE logo 1.png" alt="Logo" />
        </div>
        <div className="signup-heading">
          <h1>Sign Up</h1>
          <p>Create your account to get started</p>
        </div>
        <form onSubmit={handleSignup}>
          <div className="signup-inputs">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

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

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="buttons">
            <button type="submit" className="btn2">
              Sign Up
            </button>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
