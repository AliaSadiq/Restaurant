import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if no token is found
    } else {
      // Optionally verify token on the backend
      axios.get('/api/auth/verify-token', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).catch(() => {
        localStorage.removeItem('token');
        navigate('/login');
      });
    }
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to your Dashboard!</h1>
      <p>Your account details go here...</p>
    </div>
  );
}

export default Dashboard;
