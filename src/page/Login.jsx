import React from "react";
import { useNavigate } from "react-router-dom";
import LoginTest from "../component/LoginTest";

const Login = ({ onLogout }) => {
  const navigate = useNavigate();
  if (onLogout !== undefined) {
    onLogout();
    navigate("/");
  }
  return (
    <>
      <LoginTest onLogout={onLogout} />
    </>
  );
};

export default Login;
