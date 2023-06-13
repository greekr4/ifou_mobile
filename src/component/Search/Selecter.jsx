import styled from "styled-components";

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


const Selecter = ({option}) => {

    

switch (option) {
    case "card":
        return(
            <S_TR>
                <S_TH>카드사</S_TH>
                <S_TD>
                    <S_SELECT>
                        <option key="1" value="1">전체카드</option>
                    </S_SELECT>
                </S_TD>
            </S_TR>
        )
        break;
    case "appdd":
        return(
            <S_TR>
                <S_TH>승인일자</S_TH>
                <S_TD>
                    <S_DD_INPUT></S_DD_INPUT> ~ <S_DD_INPUT></S_DD_INPUT>
                </S_TD>
            </S_TR>
            )
        break;
    case "dep":
        return(
            <S_TR>
                <S_TH>사업부</S_TH>
                <S_TD>
                    <S_SELECT>
                        <option key="1" value="1">사업부1</option>
                    </S_SELECT>
                </S_TD>
            </S_TR>
                )
    break;
    case "dep":
        
    break;
    default:
        break;
}

}

export default Selecter;