import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoggedIn, uAuth } from "../Redux";
import { useCookies } from 'react-cookie';
import Swal from "sweetalert2";
import jwtDecode from "jwt-decode";
import base64, { decode } from 'base-64';

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

const Alert_text = styled.div`
display: block;
padding: 30px;
text-align: center;
color: #fff;
`;

const OtpComponent = ({ onLogin }) => {

  
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [inputOtp, setInputOtp] = useState("");


  console.log(jwtDecode(cookies.jwt).sub);


  
  const uauth = jwtDecode(cookies.jwt).sub;
  //alert(uauth);
  const uauths = uauth.split('|');
  //const decodedString = decode(jwtDecode(cookies.jwt).sub, { encoding: 'euc-kr' });
  //alert(decodedString);

  
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
        data: uauths,
      });
      navigate("../main");
    } else {
      Swal.fire(`warning`, `인증번호를 확인해주세요.`, 'warning');
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
      <Alert_text>
      거래 및 입금 상세 데이터는<br/> IFOU WEB (nifou.ifou.co.kr)을<br/>이용해주세요.
      </Alert_text>
    </OtpBox>
  );
};

export default OtpComponent;
