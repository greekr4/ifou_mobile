import React from "react";
import styled from "styled-components";
import Gird from "../component/Grid";
import SearchBox from "../component/SearchBox";

const TITLE = styled.h2`
  padding-left: 10px;
`;

const Sub05 = () => {
  return (
    <>
      <TITLE>매출대비입금</TITLE>
      <SearchBox page="sub05" />
      <Gird />
    </>
  );
};

export default Sub05;
