import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the path if needed

const Admin = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return; // Wait until loading is done
    if (!user || user.role !== 'admin') {
      navigate('/'); // Redirect if not logged in or not admin
    }
  }, [user, loading, navigate]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome, {user?.name}!</p>
      {/* Admin-specific content */}
    </div>
  );
};

export default Admin;
