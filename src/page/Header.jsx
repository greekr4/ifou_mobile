import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../component/Sidebar";

const Menubtn = styled.div`
  width: 100px;
  height: 100px;
  background: url(/Resource/Images/Icon/menu_small.png);
`;

const Header_wrap = styled.div`
  display: grid;
`;

const Logo_wrap = styled.div`
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 50%;
  margin: 50px auto;
  display: block;
  position: relative;
`;

const Menu_btn = styled.img`
  position: absolute;
  top: 55px;
  right: 0;
  width: 80px;
`;

// const Menu_btn = styled.img`
// position: absolute;
// top: 55px;
// right: 0;
// width: 200px;
// `;

const Header = ({ LoggedIn }) => {
  const ReduceAuth = useSelector((state) => state);

  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Header_wrap>
        <Logo_wrap>
          {ReduceAuth.LoggedIn === true ? (
            <Link to="/main">
              <Logo src="/Resource/Images/Logo/logo_main.png" />
            </Link>
          ) : (
            <Link to="/">
              <Logo src="/Resource/Images/Logo/logo_main.png" />{" "}
            </Link>
          )}
        </Logo_wrap>

        {ReduceAuth.LoggedIn === true ? (
          <Menu_btn
            src="/Resource/Images/Icon/menu_small.png"
            onClick={toggleSide}
          />
        ) : (
          <></>
        )}

        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </Header_wrap>
    </>
  );
};

export default Header;
