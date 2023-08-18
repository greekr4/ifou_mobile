import { AgCheckbox } from 'ag-grid-community';
import axios from 'axios';
import { check } from 'prettier';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const Loginbox = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background: #80c4ee;
`;

const LoginTitle = styled.h1`
  font-weight: 600;
  color: #ffffff;
  font-size: 60px;
  line-height: 100%;
  text-align: center;
  margin: 50px auto;
`;

const LoginInput = styled.input`
  display: block;
  border: none;
  width: 70%;
  height: 70px;
  padding-left: 15%;
  margin: 0 auto 20px;
  color: #a1a1a1;
  font-size: 22px;
  border-radius: 5px;
  &.id {
    background: url(/Resource/Images/Icon/login_id.png) #fff no-repeat 7% center;
  }
  &.pw {
    background: url(/Resource/Images/Icon/login_pw.png) #fff no-repeat 7% center;
  }
`;

const LoginButton = styled.button`
  display: block;
  margin: 20px auto;
  width: 85%;
  height: 80px;
  background-color: dodgerblue;
  border-radius: 20px;
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  border: none;
`;

const IdRememberDiv = styled.div`
  padding-left: 7%;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  //background: ${props => (props.checked ? '#2196F3' : '#FFF')};
  background-image: url(/Resource/Images/Icon/check.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 3px;
  border: 1px solid #ccc;
  transition: all 0.2s;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.3);
  }

  /* &:after {
    content: '';
    display: block;
    //display: ${props => (props.checked ? 'block' : 'none')};
    width: 6px;
    height: 12px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin: 4px;
  } */
`;

const IdSave_div = styled.div`
  position: relative;
  top: 0;
  left: 25px;
`;

const IdSave_input = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 18px;
  height: 18px;
`;

const IdSave_label = styled.label`
  font-weight: 550;
  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 0px;
    display: block;
    width: 18px;
    height: 18px;

    background-image: ${props =>
      props.checked
        ? 'url(/Resource/Images/Icon/check.png)'
        : 'url(/Resource/Images/Icon/checked.png)'};
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Alert_text = styled.div`
display: block;
padding: 30px;
text-align: center;
color: #fff;
`;

const CheckboxLabel = styled.label`
  margin-left: 0.5rem;
`;

const LoginComponent = ({ onLogout }) => {
  const [cookies, setCookie, removeCookie] = useCookies();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  const navigate = useNavigate();

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') onClickLogin();
  };

  useEffect(() => {
    if (localStorage.getItem('saveid')) {
      setIsChecked(true);
      setInputId(localStorage.getItem('saveid'));
    }
  }, []);

  const onClickLogin = () => {
    axios
      .post('http://nxm.ifou.co.kr:28080/user/login.gaon', null, {
        params: {
          userid: inputId,
          userpw: inputPw,
        },
      })
      .then(res => {
        console.log(res.data.RTN_MSG);
        if (res.data.RTN_MSG === '0000') {
          const expires = new Date();
          expires.setFullYear(expires.getTime() + 30);
          setCookie('jwt',res.data.TOKEN,expires);
          
          if (isChecked) {
            localStorage.clear();
            localStorage.setItem('saveid', inputId);
          }
          navigate('otp');
        } else {
          Swal.fire(`warning`, `로그인 정보를 확인해주세요.`, 'warning');
        }
      })
      .catch(e => {
        alert(e);
      });
  };

  // useEffect(() => {
  //     axios.post('http://nifou.ifou.co.kr:18090/user/login.gaon')
  //     .then(res => console.log(res))
  //     .catch()
  // },[])

  return (
    <Loginbox>
      <LoginTitle>LOGIN</LoginTitle>
      <LoginInput
        type="text"
        name="input_id"
        value={inputId}
        onChange={handleInputId}
        className="id"
        placeholder="아이디"
        autoFocus
      />
      <LoginInput
        type="password"
        name="input_pw"
        value={inputPw}
        onChange={handleInputPw}
        className="pw"
        placeholder="비밀번호"
        onKeyDown={handleOnKeyPress}
      />

      <IdSave_div>
        <IdSave_input
          id="saveId"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <IdSave_label htmlFor="saveId" checked={isChecked}>
          아이디 기억하기
        </IdSave_label>
      </IdSave_div>
      <div>
        <LoginButton type="button" onClick={onClickLogin}>
          로그인
        </LoginButton>
      </div>
      <Alert_text>
      거래 및 입금 상세 데이터는<br/> IFOU WEB (nifou.ifou.co.kr)을<br/>이용해주세요.
      </Alert_text>
    </Loginbox>
  );
};

export default LoginComponent;
