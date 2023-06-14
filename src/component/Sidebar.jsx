import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoggedIn, uAuth } from "../Redux";

const SideBarWrap = styled.div`
  z-index: 5;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  background-color: #e7e4e1;
  height: 100%;
  width: 55%;
  right: -70%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

const Menu = styled.li`
  margin: 30px 8px;
`;

const ExitMenu = styled.span`
  position: absolute;
  bottom: 26px;
  font-size: 0.8rem;
`;

function Sidebar({ isOpen, setIsOpen }) {
  const outside = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handlerOutsie);
    return () => {
      document.removeEventListener("mousedown", handlerOutsie);
    };
  });
  const handlerOutsie = (e) => {
    if (!outside.current.contains(e.target)) {
      //현재 클릭한 곳이 메뉴 컴포넌트 안이 아니면 닫기
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch({
      type: LoggedIn,
      data: false,
    });
    dispatch({
      type: uAuth,
      data: "X",
    });
  };

  return (
    <SideBarWrap id="sidebar" ref={outside} className={isOpen ? "open" : ""}>
      <h1 onClick={toggleSide}>X</h1>
      <ul>
        <Menu>
          <Link to="./main">메인</Link>
        </Menu>
        <Menu>
          <Link to="./sub01">카드사별조회</Link>
        </Menu>
        <Menu>
          <Link to="./sub02">단말기별조회</Link>
        </Menu>
        <Menu>
          <Link to="./sub03">현금영수증조회</Link>
        </Menu>
        <Menu>
          <Link to="./sub04">현금IC거래조회</Link>
        </Menu>
        <Menu>
          <Link to="./sub05">매출대비입금</Link>
        </Menu>
        <Menu>
          <Link to="./sub06">입금조회</Link>
        </Menu>
        <Menu>
          <span onClick={onClickLogout}>LogOut</span>
        </Menu>
      </ul>
    </SideBarWrap>
  );
}

export default Sidebar;
