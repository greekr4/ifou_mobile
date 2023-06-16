import React from "react";
import styled from "styled-components";
import SearchBox from "../component/SearchBox";

const TITLE = styled.h2`
  padding-left: 10px;
`;

const Sub03 = () => {
  return (
    <>
      <TITLE>현금영수증조회</TITLE>
      <SearchBox page="sub03" />
    </>
  );
};

export default Sub03;
