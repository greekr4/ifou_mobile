import React from "react";
import styled from "styled-components";
import Gird from "../component/Grid";
import SearchBox from "../component/SearchBox";

const TITLE = styled.h2`
  padding-left: 10px;
`;

const Sub02 = () => {
  return (
    <>
      <TITLE>단말기별조회</TITLE>
      <SearchBox page="sub02" />
      <Gird />
    </>
  );
};

export default Sub02;
