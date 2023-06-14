import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Footerbox = styled.div`
  width: 100%;
  height: 10vh;
  background: #80c4ee;
  color: white;
  text-align: center;
`;

const MainFooterbox = styled.div`
  background: #efefef;
  text-align: center;
  padding: 20px;
`;

const Footer = () => {
  const ReduceAuth = useSelector((state) => state);

  return (
    <>
      {ReduceAuth.LoggedIn === false ? (
        <Footerbox>ⓒ Gaon Solution 2023 Allright. Reserved.</Footerbox>
      ) : (
        <MainFooterbox>
          (주)가온솔루션 경기도 고양시 덕양구 충장로 8<br />
          로터플레이스 1005호
          <br />
          070-4610-3008 / 070-4610-3327
        </MainFooterbox>
      )}
    </>
  );
};

export default Footer;
