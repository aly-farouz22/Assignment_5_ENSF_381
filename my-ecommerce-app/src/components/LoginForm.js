import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const LoginForm = ({ switchToSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Get navigate function

    const handleLogin = () => {
        if (username.trim() !== '' && password.trim() !== '') {
            console.log('Logged in with:', { username, password });
            // Navigate to products page upon successful login
            navigate('/products');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div>
          <h2>Login</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={switchToSignup}>Switch to Signup</button>
        </div>
      );
}
export default LoginForm;
