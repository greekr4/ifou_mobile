import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

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
  font-size: 3.5vw;
`;

const TelB = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TelImage = styled.img`
  width: 4vw;
  padding-right: 0.5rem;
`;

const Footer = () => {
  const ReduceAuth = useSelector(state => state);

  return (
    <>
      {ReduceAuth.LoggedIn === false ? (
        <Footerbox>ⓒ Gaon Solution 2023 Allright. Reserved.</Footerbox>
      ) : (
        <MainFooterbox>
          <b>(주)가온솔루션</b> 경기도 고양시 덕양구 충장로 8<br />
          로터플레이스 1005호
          <br />
          <TelB>
            <TelImage src="/Resource/Images/Icon/tel_small.png" />
            070-4610-3008 / 070-4610-3327
          </TelB>
        </MainFooterbox>
      )}
    </>
  );
};

export default Footer;
