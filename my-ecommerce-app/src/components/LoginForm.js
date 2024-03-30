import React, {useState} from 'react';

const LoginForm = ({ switchToSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username.trim() !== '' && password.trim() !== '') {
            console.log('Logged in with:', {username, password});
        } else {
            alert('Please fill in all fields')
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