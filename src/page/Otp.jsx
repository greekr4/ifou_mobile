import React from "react";
import OtpComponent from "../component/OtpComponent";

const Otp = ({ isLoggedIn, onLogin }) => {
  return (
    <div>
      <OtpComponent isLoggedIn={isLoggedIn} onLogin={onLogin} />
    </div>
  );
};

export default Otp;
