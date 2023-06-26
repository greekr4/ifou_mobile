import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginComponent from '../component/LoginComponent';

const Login = ({ onLogout }) => {
  const navigate = useNavigate();
  if (onLogout !== undefined) {
    onLogout();
    navigate('/');
  }
  return (
    <>
      <LoginComponent onLogout={onLogout} />
    </>
  );
};

export default Login;
