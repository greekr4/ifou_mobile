import jwtDecode from 'jwt-decode';
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


const Token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpZm91IiwiaWF0IjoxNjg4NzA4MDExLCJleHAiOjE2ODg3MDgwNzEsInN1YiI6ImJtbG1iM1V5ZkU5U01EQXhObnh1ZFd4c2ZEQXhNak0wTlRZM09EbDhSMHhQUWw5TlRrZGZTVU5XUVU1OFIweFBRbDlOVGtkZlNVTldRVTU4VkVKZlRVNUhYMFJGVUVSQlZFRjhiblZzYkh3eE1qTjhRVk13TURBd01ERjg3TENvN0lTNDY0eUFmQT09In0.jEUgpfBZRcaw9zCzpv5bf6lL-sHi3Lc9-XsnQJUgV0k';
console.log(jwtDecode(Token));


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
