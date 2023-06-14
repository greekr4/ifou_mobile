import React from "react";
import styled from "styled-components";
import Gird from "../component/Grid";
import SearchBox from "../component/SearchBox";

const TITLE = styled.h2`
  padding-left: 10px;
`;

const Sub04 = () => {
  return (
    <>
      <TITLE>현금IC거래조회</TITLE>
      <SearchBox page="sub04" />
      <Gird />
    </>
  );
};

export default Sub04;
