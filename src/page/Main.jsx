import React, { useEffect } from 'react';
import DashBoard from '../component/DashBoard';
import { useState } from 'react';
import styled from 'styled-components';

const LOADING_DIV = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LOADING_IMG = styled.img``;

const Main = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const preventGoBack = () => {
      window.history.pushState(null, '', window.location.href);
    };
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', preventGoBack);

    return () => window.removeEventListener('popstate', preventGoBack);
  });

  return (
    <>
      {loading ? (
        <LOADING_DIV>
          <LOADING_IMG src="/Resource/Images/Icon/loading.gif" />
        </LOADING_DIV>
      ) : null}
      <DashBoard title="01" setLoading={setLoading} />
      <DashBoard title="02" setLoading={setLoading} />
      <DashBoard title="03" setLoading={setLoading} />
    </>
  );
};

export default Main;
