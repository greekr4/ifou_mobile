import React from 'react';
import styled from 'styled-components';
import SearchBox from '../component/SearchBox';

const TITLE = styled.h2`
  padding-left: 10px;
`;

const Sub01 = () => {
  return (
    <>
      <TITLE>카드사별조회</TITLE>
      <SearchBox page="sub01" />
    </>
  );
};

export default Sub01;
