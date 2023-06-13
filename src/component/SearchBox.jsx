import styled from "styled-components";
import Selecter from "./Search/Selecter";

const SEARCH_BOX_DIV = styled.div`
    border-top: 2px solid #ADADAD;
    border-left: 2px solid #ADADAD;
    border-right: 2px solid #ADADAD;
    border-bottom: 2px solid #ADADAD;
    border-radius: 5px;
    background-color: #eeeeee;
    width: 95%;
    margin: 10px auto;
`;

const SEARCH_BOX_TABLE = styled.table`
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
`;


const S_TR = styled.tr`
        border-bottom: 1px solid #ADADAD;
`;

const S_TH = styled.th`
    height: 50px;
    width: 40%;
    text-align: center;
    line-height: 50px;
`;

const S_TD = styled.td`
    background-color: #f9f9f9;
    width: 60%;
    text-align: center;
`;

const S_SELECT = styled.select`
    padding: 10px;
    height: 40px;
    border: 1px solid #ADADAD;
    border-radius: 5px;
    width: 90%;
    font-size: 15px;
    margin : 5px auto;
`;

const S_DD_INPUT = styled.input`
    font-weight: 600;
    padding: 10px;
    height: 20px;
    border: 1px solid #ADADAD;
    border-radius: 5px;
    width: 33%;
    font-size: 15px;
    margin : 5.25px auto;
`;

const S_BTN_WRAP = styled.div`
width: 100%;
margin: 20px auto;
text-align: center;
`;

const S_BTN = styled.button`
    background: transparent linear-gradient(0deg, #0A87D7 0%, #80C4EE 100%) 0% 0% no-repeat padding-box;
    border-radius: 10px;
    padding: 0 20px;
    width: 180px;
    height: 50px;
    border: none;
`

const S_BTN_TEXT = styled.span`
    display: flex;
    justify-content: space-evenly;
    font-size: 22px;
    color: #fff;
`;

const S_BTN_IMG = styled.i`
    width: 26px;
    height: 28px;
    background-image: url(/Resource/Images/Icon/search_big.png);
`






const SearchBox = ({page}) => {

    let content;
    
    // if(page === "sub01"){
    //     content = [
    //         <Selecter key="appdd" option="appdd" />,
    //         <Selecter key="dep" option="dep" />,
    //         <Selecter key="card" option="card" />
    //       ];
    // }else if(page === "sub02"){
    //     content = [
    //         <Selecter key="appdd" option="appdd" />,
    //         <Selecter key="dep" option="dep" />,
    //         <Selecter key="card" option="card" />
    //       ];
    // }



    content =   (page === "sub01") ? content = [<Selecter option="appdd" />,<Selecter option="dep" />,<Selecter option="card" />] :
                (page === "sub02") ? content = [<Selecter option="appdd" />,<Selecter option="dep" />,<Selecter option="tid" />] :
                (page === "sub03") ? content = [<Selecter option="appdd" />,<Selecter option="dep" />,<Selecter option="tid" />] :
                (page === "sub04") ? content = [<Selecter option="appdd" />,<Selecter option="dep" />,<Selecter option="tid" />] :
                (page === "sub05") ? content = [<Selecter option="appdd" />,<Selecter option="tid" />] :
                (page === "sub06") ? content = [<Selecter option="expdd" />,<Selecter option="dep" />,<Selecter option="tid" />] : "";





    return(
        <>
        <SEARCH_BOX_DIV>
        <SEARCH_BOX_TABLE>
        


        {content}
        {/* <Selecter option="appdd"/>
        <Selecter option="dep"/>
        <Selecter option="card"/> */}
        
            


        </SEARCH_BOX_TABLE>
        </SEARCH_BOX_DIV>
        <S_BTN_WRAP>
        <S_BTN><S_BTN_TEXT><S_BTN_IMG/>검색</S_BTN_TEXT></S_BTN>
        </S_BTN_WRAP>
        </>
    )
}

export default SearchBox;