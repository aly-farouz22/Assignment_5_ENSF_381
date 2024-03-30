import React, {useState} from 'react';

const SignupForm = ({switchToLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSignup = () => {
        if (
            username.trim() !== '' &&
            password.trim() !== '' &&
            confirmPassword.trim() !== '' &&
            email.trim() !== ''
        ) {
          if (password === confirmPassword) {
            console.log('Signed up with:', {username, password, email});
          } else {
            alert('Passwords do not match')
          }
        } else {
            alert('Please fill in all fields')
        }
    };

    return (
        <div>
          <h2>Signup</h2>
          <div>
            <label htmlFor="signup-username">Username:</label>
            <input
              type="text"
              id="signup-username"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="signup-password">Password:</label>
            <input
              type="password"
              id="signup-password"
              placeholder="Choose a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button onClick={handleSignup}>Signup</button>
          <button onClick={switchToLogin}>Switch to Login</button>
        </div>
      );
}
export default SignupForm;