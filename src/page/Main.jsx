import React, { useEffect } from 'react';
import DashBoard from '../component/DashBoard';
import { useState } from 'react';

const Main = () => {
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
      <DashBoard title="01" />
      <DashBoard title="02" />
      <DashBoard title="03" />
    </>
  );
};

export default Main;
