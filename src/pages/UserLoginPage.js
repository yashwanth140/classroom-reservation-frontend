// src/pages/UserLoginPage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import BACKEND_URL from '../api';

export default function UserLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) return alert('Please enter email and password');

    try {
      const res = await axios.post(`${BACKEND_URL}/api/user/login`, {
        email,
        password,
      });

      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('userSSN', res.data.user.User_SSN);
      alert('Login successful');
      navigate('/book');
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>User Login</h2>
      <input
        style={styles.input}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={styles.input}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={styles.button} onClick={handleLogin}>Login</button>
      <p>
        New user? <Link to="/user/register">Register here</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#fff8dc',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  header: {
    color: '#9333ea',
    marginBottom: '1rem'
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    margin: '0.5rem 0',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem'
  },
  button: {
    backgroundColor: '#9333ea',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1rem'
  }
};
