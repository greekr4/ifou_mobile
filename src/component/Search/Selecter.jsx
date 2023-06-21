import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { search_option } from '../../Redux';

const S_TR = styled.tr`
  border-bottom: 1px solid #adadad;
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
  border: 1px solid #adadad;
  border-radius: 5px;
  flex-grow: 1;
  font-size: 15px;
  margin: 5px auto;
  width: 90%;
`;

const S_DD_INPUT = styled.input`
  font-weight: 600;
  padding: 10px;
  height: 20px;
  border: 1px solid #adadad;
  border-radius: 5px;
  font-size: 15px;
  margin: 5.25px auto;
  width: 45%;
  flex-grow: 1;
  padding-left: 1em;
`;

const S_DIV = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  align-items: center;
`;

const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear().toString().substring(2, 6);
  let month = date.getMonth() + 1;
  let day = date.getDate();

  // 한 자리 숫자인 경우 앞에 0을 추가하여 두 자리로 만듦
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}.${month}.${day}`;
};

const Selecter = ({
  option,
  handleDPOpen,
  handleDPOpen2,
  sappdd,
  setSappdd,
  eappdd,
  setEappdd,
  sexpdd,
  setSexpdd,
  eexpdd,
  setEexpdd,
  card,
  setCard,
  tid,
  setTid,
  dep,
  setDep,
}) => {
  const [tidlist, setTidlist] = useState([]);
  const [cardlist, setCardlist] = useState([]);
  const [deplist, setDeplist] = useState([]);

  const dispatch = useDispatch();
  const ReduceAuth = useSelector(state => state);

  const handleInputSappdd = e => {
    setSappdd(e.target.value);
  };

  const handleInputEappdd = e => {
    setEappdd(e.target.value);
  };

  const handleInputSexpdd = e => {
    setSexpdd(e.target.value);
  };

  const handleInputEexpdd = e => {
    setEexpdd(e.target.value);
  };

  useEffect(() => {
    if (option === 'tid') {
      //tid
      axios
        .post('http://nxm.ifou.co.kr:28080/common/get_tidcd', null, {
          params: {
            orgcd: 'OR0016',
          },
        })
        .then(res => {
          console.log(res.data);
          console.log('tid로드');
          setTidlist(res.data);
        })
        .catch();
    } else if (option === 'card') {
      //card
      axios
        .post('http://nxm.ifou.co.kr:28080/common/get_acqcd', null, {
          params: {
            orgcd: 'OR0016',
          },
        })
        .then(res => {
          console.log(res.data);
          console.log('card로드');
          setCardlist(res.data);
        })
        .catch();
    } else if (option === 'dep') {
      //card
      axios
        .post('http://nxm.ifou.co.kr:28080/common/get_depcd', null, {
          params: {
            orgcd: 'OR0016',
          },
        })
        .then(res => {
          console.log(res.data);
          console.log('dep로드');
          setDeplist(res.data);
        })
        .catch();
    }
    test();
  }, []);

  const test = () => {
    const data = new URLSearchParams({
      sappdd: sappdd,
      eappdd: eappdd,
      sexpdd: sexpdd,
      eexpdd: eexpdd,
      card: card,
    }).toString();
    dispatch({
      type: search_option,
      data: data,
    });
  };
  const handleCard = e => {
    setCard(e.target.value);
  };

  const handleTid = e => {
    setTid(e.target.value);
  };

  const handleDep = e => {
    setDep(e.target.value);
  };

  switch (option) {
    case 'card':
      return (
        <S_TR>
          <S_TH>카드사</S_TH>
          <S_TD>
            <S_DIV>
              <S_SELECT onChange={handleCard}>
                <option key="" value="">
                  전체카드
                </option>
                {cardlist.map(item => (
                  <option key={item.pur_koces} value={item.pur_koces}>
                    {item.pur_nm}
                  </option>
                ))}
              </S_SELECT>
            </S_DIV>
          </S_TD>
        </S_TR>
      );
    case 'appdd':
      return (
        <S_TR>
          <S_TH>승인일자</S_TH>
          <S_TD>
            <S_DIV>
              <S_DD_INPUT
                value={sappdd}
                id="sappdd"
                onClick={() => handleDPOpen('sappdd')}
                onChange={handleInputSappdd}
                readOnly
              ></S_DD_INPUT>
              ~
              <S_DD_INPUT
                value={eappdd}
                id="eappdd"
                onClick={() => handleDPOpen2('eappdd')}
                onChange={handleInputEappdd}
                readOnly
              ></S_DD_INPUT>
            </S_DIV>
          </S_TD>
        </S_TR>
      );
    case 'dep':
      return (
        <S_TR>
          <S_TH>사업부</S_TH>
          <S_TD>
            <S_DIV>
              <S_SELECT onChange={handleDep}>
                <option key="" value="">
                  전체
                </option>
                {deplist.map(item => (
                  <option key={item.dep_cd} value={item.dep_cd}>
                    {item.dep_nm}
                  </option>
                ))}
              </S_SELECT>
            </S_DIV>
          </S_TD>
        </S_TR>
      );
    case 'expdd':
      return (
        <S_TR>
          <S_TH>입금일자</S_TH>
          <S_TD>
            <S_DIV>
              <S_DD_INPUT
                value={sexpdd}
                id="sexpdd"
                onClick={() => handleDPOpen('sexpdd')}
                onChange={handleInputSexpdd}
                readOnly
              ></S_DD_INPUT>
              ~
              <S_DD_INPUT
                value={eexpdd}
                id="eexpdd"
                onClick={() => handleDPOpen2('eexpdd')}
                onChange={handleInputEexpdd}
                readOnly
              ></S_DD_INPUT>
            </S_DIV>
          </S_TD>
        </S_TR>
      );
    case 'tid':
      return (
        <S_TR>
          <S_TH>단말기</S_TH>
          <S_TD>
            <S_DIV>
              <S_SELECT onChange={handleTid}>
                <option key="1" value="1">
                  단말기1
                </option>
                {tidlist.map(item => (
                  <option key={item.tid_cd} value={item.tid_cd}>
                    {item.tid_nm}
                  </option>
                ))}
              </S_SELECT>
            </S_DIV>
          </S_TD>
        </S_TR>
      );
    default:
      break;
  }
};

export default Selecter;
