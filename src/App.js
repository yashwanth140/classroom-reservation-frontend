
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookClassroomPage from './pages/BookClassroomPage';
import AdminApprovalPage from './pages/AdminApprovalpage';
import DashboardPage from './pages/DashboardPage';
import UserLoginPage from './pages/UserLoginPage';
import UserRegisterPage from './pages/UserRegisterPage';
import AdminLoginPage from './pages/AdminLoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import Homepage from './pages/HomePage';
import './App.css';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(null);
  const [loggedInEmail, setLoggedInEmail] = useState('');

  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
    const user = JSON.parse(localStorage.getItem('user'));

    setIsAdmin(storedIsAdmin);
    if (user?.email) setLoggedInEmail(user.email);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setLoggedInEmail('');
    setIsAdmin(false);
  };

  return (
    <Router>
      <Navbar userEmail={loggedInEmail} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/book" element={<BookClassroomPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin/login" element={<AdminLoginPage setIsAdmin={setIsAdmin} />} />
        <Route path="/user/login" element={<UserLoginPage />} />
        <Route path="/user/register" element={<UserRegisterPage />} />
        <Route
          path="/admin/approve"
          element={
            <ProtectedRoute isAdmin={isAdmin}>
              <AdminApprovalPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <footer className="footer">
        Project developed by Yashwanth Reddy Kantareddy
      </footer>
    </Router>
  );
}
