import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const user = JSON.parse(localStorage.getItem('user')); // assume stored as JSON
  const userEmail = user?.email;
  const isLoggedIn = isAdmin || userEmail;

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const getNameFromEmail = (email) => {
    if (!email) return 'User';
    const raw = email.split('@')[0];
    return raw.charAt(0).toUpperCase() + raw.slice(1);
  };

  return (
    <nav style={styles.nav}>
      <a href="/" style={styles.link}>Home</a>
      <a href="/book" style={styles.link}>Book Room</a>
      <a href="/admin/login" style={styles.link}>Admin Panel</a>
      <a href="/dashboard" style={styles.link}>Dashboard</a>

      {isLoggedIn && (
        <>
          {isAdmin && <span style={styles.welcome}>Welcome Admin!</span>}
          {userEmail && <span style={styles.welcome}>Welcome, {getNameFromEmail(userEmail)}!</span>}
          <button style={styles.logout} onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1rem 2rem',
    backgroundColor: '#f4f6f8',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
  },
  link: {
    textDecoration: 'none',
    fontWeight: '600',
    color: '#4f46e5',
    transition: 'color 0.2s ease',
  },
  welcome: {
    fontWeight: '500',
    color: '#374151',
  },
  logout: {
    backgroundColor: '#7c3aed',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
  }
};
