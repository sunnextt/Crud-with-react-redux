import React from 'react';
import { useSelector } from 'react-redux';

const { useLocation, Navigate } = require('react-router-dom');

function RequireAuth({ children }) {
  const { user: currentUser } = useSelector(state => state.auth);

  let location = useLocation();
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
