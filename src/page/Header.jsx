import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../component/Sidebar";



const Menubtn = styled.div`
    width: 100px;
    height: 100px;
    background: url(/Resource/Images/Icon/menu.png);

`;

const Header_wrap = styled.div`
  display: grid;


`;

const Logo_wrap = styled.div`
margin: 0 auto;
`

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
`



const Header = ({isLoggedIn}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleSide = () => {
      setIsOpen(true);
    };
console.log(isLoggedIn);
    return(
        <>
        <Header_wrap>
        <Logo_wrap>
        
        {isLoggedIn === true ?
        <Link to='/main'><Logo src="/Resource/Images/Logo/logo_main.png"/></Link> :
        <Link to='/'><Logo src="/Resource/Images/Logo/logo_main.png"/> </Link>
        }
        </Logo_wrap>

        {isLoggedIn === true ?
        <Menu_btn src="/Resource/Images/Icon/menu.png" onClick={toggleSide}/> :
        <></>
        }
        
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </Header_wrap>

        </>
    )
}

export default Header;