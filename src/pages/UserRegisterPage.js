import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import BACKEND_URL from '../api'; // Ensure this points to your backend correctly

export default function UserRegisterPage() {
  const [ssn, setSSN] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!ssn || !name || !email || !password) {
      alert('All fields are required');
      return;
    }

    try {
      const res = await axios.post(`${BACKEND_URL}/api/user/register`, {
        ssn,
        name,
        email,
        password,
      });

      if (res.data.success) {
        alert('Registration successful. Please login.');
        navigate('/user/login');
      } else {
        alert(res.data.error || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>📝 Register as a New User</h2>
      <input
        style={styles.input}
        placeholder="User SSN"
        value={ssn}
        onChange={(e) => setSSN(e.target.value)}
      />
      <input
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        style={styles.input}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={styles.button} onClick={handleRegister}>
        Register
      </button>
      <p>
        Already registered? <Link to="/user/login">Login here</Link>
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
