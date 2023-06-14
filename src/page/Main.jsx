import React from "react";
import DashBoard from "../component/DashBoard";

const Main = () => {
  return (
    <>
      <DashBoard title="01" appdd="20230605" test="06월 05일 (월)" />
      <DashBoard title="02" test="06월 05일 (월)" />
      <DashBoard title="03" test="2023년 06월" />
    </>
  );
};

export default Main;
