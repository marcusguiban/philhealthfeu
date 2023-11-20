
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {

    if (username !== '' && password !== '') {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please enter a username and password.');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <Link to="/overview"> Overview
          </Link>
        </div>
      ) : (
        <Container>
          <h2>Login Page</h2>
          <form>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" 
            onClick={handleLogin}      
            >
              Login
            </button>
          </form>
        </Container>
      )}
    </div>
  );
};

export default LoginPage;
