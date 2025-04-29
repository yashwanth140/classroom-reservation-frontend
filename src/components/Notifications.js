import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BACKEND_URL from '../api'; // ✅ Import backend URL

export default function Notifications({ userSSN }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!userSSN) return;

    axios
      .get(`${BACKEND_URL}/api/notifications?ssn=${userSSN}`) // ✅ Fixed URL
      .then((res) => setNotifications(res.data))
      .catch((err) => console.error('Failed to fetch notifications:', err));
  }, [userSSN]);

  return (
    <div className="notifications-box">
      <h3>🔔 Notifications</h3>
      {notifications.length === 0 ? (
        <p><i>No notifications yet.</i></p>
      ) : (
        <ul>
          {notifications.map((note) => (
            <li key={note.Notification_ID}>
              {note.Message}
              <br />
              <small style={{ color: 'gray' }}>
                {new Date(note.Timestamp).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
