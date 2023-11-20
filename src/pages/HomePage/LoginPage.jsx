
import { Button, Typography } from '@mui/material';
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
        <Container  spacing={4} justifyContent={"center"} sx={{ px:10, py:10}}>
          <Typography variant='h5' >Welcome, {username}!</Typography>
          <Link to="/overview"><Button type="submit" value="Update" variant="outlined" size="large"> Overview
           </Button></Link> </Container>
          
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
