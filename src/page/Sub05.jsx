import React from 'react';
import styled from 'styled-components';
import SearchBox from '../component/SearchBox';

const TITLE = styled.h2`
  padding-left: 10px;
`;

const Sub05 = () => {
  return (
    <>
      <TITLE>매출대비입금조회</TITLE>
      <SearchBox page="sub05" />
    </>
  );
};

export default Sub05;
