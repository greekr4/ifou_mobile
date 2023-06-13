import styled from "styled-components";
import Gird from "../component/Grid";
import SearchBox from "../component/SearchBox";




const TITLE = styled.h2`
padding-left: 10px;
`;

const Sub03 = () => {
 
    
    return(
        <>
            <TITLE>현금영수증조회</TITLE>
            <SearchBox page = "sub03"/>
            <Gird/>
        </>
    )
}

export default Sub03;