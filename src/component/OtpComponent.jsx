import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoggedIn, uAuth } from "../Redux";

const OtpBox = styled.div`
  width: 100%;
  height: 80vh;
  overflow-x: hidden;
  background: #80c4ee;
`;

const OtpTitle = styled.h1`
  font-weight: 600;
  color: #ffffff;
  font-size: 60px;
  line-height: 100%;
  text-align: center;
  margin: 50px auto;
`;

const OtpInput = styled.input`
  display: block;
  border: none;
  width: 77.5%;
  height: 70px;
  padding-left: 7.5%;
  margin: 0 auto 20px;
  color: #a1a1a1;
  font-size: 22px;
  border-radius: 5px;
  &::placeholder {
    font-size: 18px;
  }
`;

const OtpButton = styled.button`
  display: block;
  margin: 20px auto;
  width: 85%;
  height: 80px;
  background-color: dodgerblue;
  border-radius: 20px;
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  border: none;
`;

const OtpComponent = ({ onLogin }) => {
  const dispatch = useDispatch();

  const [inputOtp, setInputOtp] = useState("123");

  const handleInputOtp = (e) => {
    setInputOtp(e.target.value);
    console.log(inputOtp);
  };

  const navigate = useNavigate();

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") onClickOtp();
  };

  const onClickOtp = () => {
    if (inputOtp === "123") {
      dispatch({
        type: LoggedIn,
        data: true,
      });
      dispatch({
        type: uAuth,
        data: "dddddd",
      });
      navigate("../main");
    } else {
      alert("인증실패");
    }
  };

  return (
    <OtpBox>
      <OtpTitle>OTP 인증</OtpTitle>
      <OtpInput
        id="otpzz"
        name="otp"
        value={inputOtp}
        onChange={handleInputOtp}
        placeholder="발송된 인증번호를 입력해 주세요"
        autoFocus
        onKeyDown={handleOnKeyPress}
      />
      <OtpButton onClick={onClickOtp}>인증</OtpButton>
    </OtpBox>
  );
};

export default OtpComponent;
