import React from "react";
import styled from "styled-components";
import SearchBox from "../component/SearchBox";

const TITLE = styled.h2`
  padding-left: 10px;
`;

const Sub06 = () => {
  return (
    <>
      <TITLE>입금조회</TITLE>
      <SearchBox page="sub06" />
    </>
  );
};

export default Sub06;
