import axios from "axios";
import { useEffect, useState } from "react";
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

const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    // 한 자리 숫자인 경우 앞에 0을 추가하여 두 자리로 만듦
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };



const Selecter = ({option}) => {

    const [sappdd,setSappdd] = useState(getCurrentDate());
    const [eappdd,setEappdd] = useState(getCurrentDate());
    const [sexpdd,setSexpdd] = useState(getCurrentDate());
    const [eexpdd,setEexpdd] = useState(getCurrentDate());
    const [tidlist,setTidlist] = useState([]);
    const [cardlist,setCardlist] = useState([]);
    const [deplist,setDeplist] = useState([]);


    const handleInputSappdd = (e) => {
        setSappdd(e.target.value);
    }

    const handleInputEappdd = (e) => {
        setEappdd(e.target.value);
    }

    const handleInputSexpdd = (e) => {
        setSexpdd(e.target.value);
    }

    const handleInputEexpdd = (e) => {
        setEexpdd(e.target.value);
    }
      
    useEffect(() => {


    if(option === "tid"){
        //tid
        axios.post('http://nxm.ifou.co.kr:28080/common/get_tidcd',null,{
        params: {
            orgcd: "OR0016",
        }
    })
    .then(res => {
        console.log(res.data);
        console.log("tid로드");
        setTidlist(res.data);
    })
    .catch();
    }else if(option === "card"){
        //card
        axios.post('http://nxm.ifou.co.kr:28080/common/get_acqcd',null,{
        params: {
            orgcd: "OR0016",
        }
    })
    .then(res => {
        console.log(res.data);
        console.log("card로드");
        setCardlist(res.data);
    })
    .catch();
    }else if(option === "dep"){
        //card
        axios.post('http://nxm.ifou.co.kr:28080/common/get_depcd',null,{
        params: {
            orgcd: "OR0016",
        }
    })
    .then(res => {
        console.log(res.data);
        console.log("dep로드");
        setDeplist(res.data);
    })
    .catch();
    }
    


},[]);

    switch (option) {
        case "card":
            return(
                <S_TR>
                    <S_TH>카드사</S_TH>
                    <S_TD>
                        <S_SELECT>
                            <option key="1" value="1">전체카드</option>
                            {cardlist.map(item => (<option key={item.tid_nm} value={item.tid_nm}>{item.tid_cd}</option>))}
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
                        <S_DD_INPUT value={sappdd} onChange={handleInputSappdd}></S_DD_INPUT> ~ <S_DD_INPUT value={eappdd} onChange={handleInputEappdd}></S_DD_INPUT>
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
                            <option key="1" value="1">전체</option>
                            {deplist.map(item => (<option key={item.dep_cd} value={item.dep_cd}>{item.dep_nm}</option>))}
                        </S_SELECT>
                    </S_TD>
                </S_TR>
                    )
        break;
        case "expdd":
            return(
                <S_TR>
                    <S_TH>입금일자</S_TH>
                    <S_TD>
                        <S_DD_INPUT value={sexpdd} onChange={handleInputSexpdd}></S_DD_INPUT> ~ <S_DD_INPUT value={eexpdd} onChange={handleInputEexpdd}></S_DD_INPUT>
                    </S_TD>
                </S_TR>
                )
        break;
        case "tid":
            return(
                <S_TR>
                    <S_TH>단말기</S_TH>
                    <S_TD>
                        <S_SELECT>
                            <option key="1" value="1">단말기1</option>
                            {tidlist.map(item => (<option key={item.tid_cd} value={item.tid_cd}>{item.tid_nm}</option>))}
                        </S_SELECT>
                    </S_TD>
                </S_TR>
            )
            break;
        default:
            break;
    }



}

export default Selecter;