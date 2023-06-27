import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../component/Sidebar';

const Header_wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Space_wrap = styled.div`
  flex-shrink: 0;
  width: 12%;
`;
const Logo_wrap = styled.div`
  flex-grow: 1;
  text-align: center;
`;
const Menu_wrap = styled.div`
  flex-shrink: 0;
  white-space: nowrap;
  width: 12%;
`;

const Logo = styled.img`
  width: 50%;
  margin: 20px auto;
  display: block;
`;

const Menu_btn = styled.img`
  width: 100%;
  display: block;
`;

const Header = ({ LoggedIn }) => {
  const ReduceAuth = useSelector(state => state);

  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* <Header_wrap>
        <Logo_wrap>
          {ReduceAuth.LoggedIn === true ? (
            <Link to="/main">
              <Logo src="/Resource/Images/Logo/logo_main.png" />
            </Link>
          ) : (
            <Link to="/">
              <Logo src="/Resource/Images/Logo/logo_main.png" />{' '}
            </Link>
          )}
        </Logo_wrap>

        {ReduceAuth.LoggedIn === true ? (
          <div>
            <Menu_btn
              src="/Resource/Images/Icon/menu_small.png"
              onClick={toggleSide}
            />
          </div>
        ) : (
          <></>
        )}

        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </Header_wrap> */}

      <Header_wrap>
        <Space_wrap />
        <Logo_wrap>
          <Link to={ReduceAuth.LoggedIn ? '/main' : '/'}>
            <Logo src="/Resource/Images/Logo/logo_main.png" />
          </Link>
        </Logo_wrap>
        <Menu_wrap>
          {ReduceAuth.LoggedIn ? (
            <Menu_btn
              src="/Resource/Images/Icon/menu_small.png"
              onClick={toggleSide}
            />
          ) : null}
        </Menu_wrap>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </Header_wrap>
    </>
  );
};

export default Header;
