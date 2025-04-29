// src/pages/HomePage.js
import React from 'react';

const HomePage = () => {   
  return (
    <div className="homepage-container">
      <div className="welcome-card animate-slide">
        <h1>🎓 Welcome to the Classroom Reservation </h1>
        <p>Reserve classrooms, labs, and seminar rooms efficiently and securely.</p>
        <ul>
          <li>✅ Book rooms with live availability</li>
          <li>✅ Admin approval workflow</li>
          <li>✅ Reservation history dashboard</li>
          <li>✅ Role-based login (Admin & User)</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage; 
