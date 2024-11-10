import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to track login status

  // Validate credentials on form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if credentials are correct
    if (username === 'Nikhil' && password === 'Test@123') {
      console.log('Login successful!');
      setIsLoggedIn(true); // Set logged in status to true
    } else {
      setErrorMessage('Unauthorized');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {/* If user is logged in, show a welcome message */}
      {isLoggedIn ? (
        <h2>Welcome to the Dashboard!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {/* Display error message if invalid credentials */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}export default Login