import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import { LoggedIn, uAuth } from '../Redux';
import Swal from 'sweetalert2';

const SideBarWrap = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  padding: 12px;
  /* border-radius: 15px 0 0 15px; */
  background-color: #ffffff;
  height: 100%;
  width: 55%;
  right: -80%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  z-index: 999;

  &.open {
    /* top: 0; */
    /* transition: 0.5s ease; */
    /* animation: spin 0.5s linear; */
    /* infinite */

    right: 0;
  }
`;

const ExitMenu = styled.span`
  position: absolute;
  bottom: 26px;
  font-size: 0.8rem;
`;

const LOADING_DIV = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
`;

const MenuHeader_wrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1.5px solid #ababab;
`;

const Space_wrap = styled.div`
  flex-shrink: 0;
  width: 12%;
`;
const Logo_wrap = styled.div`
  flex-grow: 1;
  text-align: left;
`;
const Exit_wrap = styled.div`
  flex-shrink: 0;
  white-space: nowrap;
  width: 12%;
`;

const Logo_img = styled.img`
  margin: 15px;
  width: 50%;
`;

const Exit_img = styled.img`
  display: block;
  width: 25px;
`;

const Menu_ul = styled.ul`
  padding-left: 15px;
`;

const Menu_li = styled.li`
  list-style: none;
  font-size: 20px;
  line-height: 3rem;
  color: black;
  font-weight: 550;
`;

const Menu_Link = styled(Link)`
  text-decoration: none;
`;

const Menu_icon = styled.img`
  width: 20px;
  padding-right: 0.5rem;
`;

const Li_div = styled.div`
  display: flex;
`;

const Menu_icon_wrap = styled.div`
  margin-top: 2px;
`;

const Menu_text_wrap = styled.div``;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const ReduceAuth = useSelector(state => state);
  const [cookies, setCookie, removeCookie] = useCookies();
  const handleMenuClick = link => {
    setIsOpen(false);
    setTimeout(() => {
      navigate(link);
    }, 250);
  };

  const outside = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);
    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  });
  const handlerOutsie = e => {
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
    Swal.fire({
      title: 'question',
      text: '로그아웃 하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '네',
      cancelButtonText: '아니요',
    }).then(res => {
      if (res.isConfirmed) {
        dispatch({
          type: LoggedIn,
          data: false,
        });

        dispatch({
          type: uAuth,
          data: '',
        });
        removeCookie('jwt');
      }
    });
  };

  return (
    <>
      <SideBarWrap id="sidebar" ref={outside} className={isOpen ? 'open' : ''}>
        <MenuHeader_wrap>
          <Space_wrap></Space_wrap>
          <Logo_wrap>
            {/* <Logo_img src="/Resource/Images/Logo/logo_side.png" /> */}
            <h2>{ReduceAuth.uAuth[0]}님</h2>
            <h3>반갑습니다.</h3>
          </Logo_wrap>
          <Exit_wrap>
            <Exit_img
              src="/Resource/Images/Icon/exit.png"
              onClick={toggleSide}
            />
          </Exit_wrap>
        </MenuHeader_wrap>
        <Menu_ul>
          <div onClick={() => handleMenuClick('/main')}>
            <Menu_li>
              <Li_div>
                <Menu_icon_wrap>
                  <Menu_icon src="/Resource/Images/Icon/menu_main.png" />
                </Menu_icon_wrap>
                <Menu_text_wrap>메인</Menu_text_wrap>
              </Li_div>
            </Menu_li>
          </div>
          <div onClick={() => handleMenuClick('/sub01')}>
            <Menu_li>
              <Li_div>
                <Menu_icon_wrap>
                  <Menu_icon src="/Resource/Images/Icon/menu_sub01.png" />
                </Menu_icon_wrap>
                <Menu_text_wrap>카드사별조회</Menu_text_wrap>
              </Li_div>
            </Menu_li>
          </div>
          <div onClick={() => handleMenuClick('/sub02')}>
            <Menu_li>
              <Li_div>
                <Menu_icon_wrap>
                  <Menu_icon src="/Resource/Images/Icon/menu_sub02.png" />
                </Menu_icon_wrap>
                <Menu_text_wrap>단말기별조회</Menu_text_wrap>
              </Li_div>
            </Menu_li>
          </div>
          <div onClick={() => handleMenuClick('/sub03')}>
            <Menu_li>
              <Li_div>
                <Menu_icon_wrap>
                  <Menu_icon src="/Resource/Images/Icon/menu_sub03.png" />
                </Menu_icon_wrap>
                <Menu_text_wrap>현금영수증조회</Menu_text_wrap>
              </Li_div>
            </Menu_li>
          </div>
          <div onClick={() => handleMenuClick('/sub04')}>
            <Menu_li>
              <Li_div>
                <Menu_icon_wrap>
                  <Menu_icon src="/Resource/Images/Icon/menu_sub04.png" />
                </Menu_icon_wrap>
                <Menu_text_wrap>현금IC거래조회</Menu_text_wrap>
              </Li_div>
            </Menu_li>
          </div>
          <div onClick={() => handleMenuClick('/sub05')}>
            <Menu_li>
              <Li_div>
                <Menu_icon_wrap>
                  <Menu_icon src="/Resource/Images/Icon/menu_sub05.png" />
                </Menu_icon_wrap>
                <Menu_text_wrap>매출대비입금조회</Menu_text_wrap>
              </Li_div>
            </Menu_li>
          </div>
          <div onClick={() => handleMenuClick('/sub06')}>
            <Menu_li>
              <Li_div>
                <Menu_icon_wrap>
                  <Menu_icon src="/Resource/Images/Icon/menu_sub06.png" />
                </Menu_icon_wrap>
                <Menu_text_wrap>입금조회</Menu_text_wrap>
              </Li_div>
            </Menu_li>
          </div>
          <Menu_li onClick={onClickLogout}>
            <Li_div>
              <Menu_icon_wrap>
                <Menu_icon src="/Resource/Images/Icon/menu_logout.png" />
              </Menu_icon_wrap>
              <Menu_text_wrap>로그아웃</Menu_text_wrap>
            </Li_div>
          </Menu_li>
        </Menu_ul>
      </SideBarWrap>
      {isOpen ? <LOADING_DIV /> : null}
    </>
  );
};

export default Sidebar;
