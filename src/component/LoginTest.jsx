import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Loginbox = styled.div`
    width: 100%;
    height: 80vh;
    overflow-x: hidden;
    background: #80C4EE;
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
color: #A1A1A1;
font-size: 22px;
border-radius: 5px;
 &.id{
    background: url(/Resource/Images/Icon/login_id.png) #fff no-repeat 7% center;
 }
 &.pw{
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

function LoginTest() {
    const [inputId, setInputId] = useState('nifou2');
    const [inputPw, setInputPw] = useState('1');

    const handleInputId = (e) => {
        setInputId(e.target.value);
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    }


    const navigate = useNavigate();
    

    const handleOnKeyPress = e => {
        if (e.key === 'Enter') onClickLogin();
    }



    
    const onClickLogin = () => {
       

        
        console.log('click login')
        axios.post('http://nxm.ifou.co.kr:28080/user/login.gaon', null, {
            params: {
                userid: inputId,
                userpw: inputPw
            }
        })
        .then(res => {console.log(res.data.RTN_MSG)
        if(res.data.RTN_MSG === '0000'){
            navigate('otp');
        }else{
            alert('정보없다');
        }
        
        }
        )
        .catch()
        
    }

    // useEffect(() => {
    //     axios.post('http://nifou.ifou.co.kr:18090/user/login.gaon')
    //     .then(res => console.log(res))
    //     .catch()
    // },[])



    
    return(
        
        <Loginbox>
            <LoginTitle>LOGIN</LoginTitle>
            <LoginInput type='text' name='input_id' value={inputId} onChange={handleInputId} className='id' placeholder='아이디' autoFocus/>
            <LoginInput type='password' name='input_pw' value={inputPw} onChange={handleInputPw} className='pw' placeholder='비밀번호' onKeyDown={handleOnKeyPress} />
            <div>
            <LoginButton type='button' onClick={onClickLogin}>로그인</LoginButton>
            </div>
            
        </Loginbox>
    )
}

export default LoginTest;