import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-mobile-datepicker';
import DatePicker2 from 'react-mobile-datepicker';
import styled from 'styled-components';
import GridComponent from './GridComponent';
import Selecter from './Search/Selecter';
import { useEffect } from 'react';
import { useRef } from 'react';

const SEARCH_BOX_DIV = styled.div`
  border-top: 2px solid #adadad;
  border-left: 2px solid #adadad;
  border-right: 2px solid #adadad;
  border-bottom: 2px solid #adadad;
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
  width: 90%;
  font-size: 15px;
  margin: 5px auto;
`;

const S_DD_INPUT = styled.input`
  font-weight: 600;
  padding: 10px;
  height: 20px;
  border: 1px solid #adadad;
  border-radius: 5px;
  width: 33%;
  font-size: 15px;
  margin: 5.25px auto;
`;

const S_BTN_WRAP = styled.div`
  width: 100%;
  margin: 20px auto;
  text-align: center;
`;

const S_BTN = styled.button`
  background: transparent linear-gradient(0deg, #0a87d7 0%, #80c4ee 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 10px;
  padding: 0 20px;
  width: 180px;
  height: 50px;
  border: none;
`;

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
`;

const SearchBox = ({ page }) => {
  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear().toString().substring(2, 6);
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
    return `${year}.${month}.${day}`;
  };

  const formatDate = date => {
    const year = date.getFullYear().toString().substring(2, 6);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  let content;

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [activeInput, setActiveInput] = useState(null);
  const [sappdd, setSappdd] = useState(getCurrentDate());
  const [eappdd, setEappdd] = useState(getCurrentDate());
  const [sexpdd, setSexpdd] = useState(getCurrentDate());
  const [eexpdd, setEexpdd] = useState(getCurrentDate());
  const [tid, setTid] = useState();
  const [card, setCard] = useState();
  const [dep, setDep] = useState();

  const handleDateChange = date => {
    setSelectedDate(date);
    setIsOpen(false);

    //분기처리해야함
    if (activeInput === 'sappdd') {
      setSappdd(formatDate(date));
    } else if (activeInput === 'eappdd') {
      setEappdd(formatDate(date));
    } else if (activeInput === 'sexpdd') {
      setSexpdd(formatDate(date));
    } else if (activeInput === 'eexpdd') {
      setEexpdd(formatDate(date));
    }
    document.body.classList.remove('datepicker-open');
  };

  const handleDateChange2 = date => {
    setSelectedDate2(date);
    setIsOpen2(false);

    //분기처리해야함
    if (activeInput === 'sappdd') {
      setSappdd(formatDate(date));
    } else if (activeInput === 'eappdd') {
      setEappdd(formatDate(date));
    } else if (activeInput === 'sexpdd') {
      setSexpdd(formatDate(date));
    } else if (activeInput === 'eexpdd') {
      setEexpdd(formatDate(date));
    }
    document.body.classList.remove('datepicker-open');
  };

  const handleDPOpen = inputId => {
    window.scrollTo(0, 0);
    setIsOpen(true);
    setActiveInput(inputId);
    document.body.classList.add('datepicker-open');
  };

  const handleDPClose = () => {
    setIsOpen(false);
    document.body.classList.remove('datepicker-open');
  };

  const handleDPOpen2 = inputId => {
    window.scrollTo(0, 0);
    setIsOpen2(true);
    setActiveInput(inputId);
    document.body.classList.add('datepicker-open');
  };

  const handleDPClose2 = () => {
    setIsOpen2(false);
    document.body.classList.remove('datepicker-open');
  };

  const testbtn = async () => {
    const p_sappdd = `20${
      sappdd.substr(0, 2) + sappdd.substr(3, 2) + sappdd.substr(6, 2)
    }`;
    const p_eappdd = `20${
      eappdd.substr(0, 2) + eappdd.substr(3, 2) + eappdd.substr(6, 2)
    }`;

    const qrystring = new URLSearchParams({
      sappdd: sappdd,
      eappdd: eappdd,
      dep: dep,
      card: card,
      tid: tid,
      sexpdd: sexpdd,
      eexpdd: eexpdd,
    }).toString();
    console.log(qrystring);
    try {
      const res = await axios.post('http://nxm.ifou.co.kr:28080/sub01', null, {
        params: {
          sappdd: p_sappdd,
          eappdd: p_eappdd,
          orgcd: 'OR0016',
          depcd: dep,
          acqcd: card,
        },
      });

      console.log(res.data);
      setRowData(res.data);

      const aa = await addSubtotalRows(res.data);
      setRowData(aa);
    } catch (error) {
      console.log(error);
    }
  };

  /* 그리드 */
  const [columnDefs, setColmnDefs] = useState([]);
  const [rowData, setRowData] = useState([]);

  const numberCellFormatter = params => {
    return Math.floor(params.value)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  const gridOptions = {
    suppressAggFuncInHeader: true,
  };

  const defaultColDef = {
    sortable: true,
    resizable: true,
  };

  //setRowData(addSubtotalRows());
  //addSubtotalRows();
  //const updatedRowData = addSubtotalRows();

  const addSubtotalRows = resdata => {
    const groupedDate = {};

    for (const row of resdata) {
      const card = row.card;
      if (!groupedDate[card]) {
        groupedDate[card] = [];
      }
      groupedDate[card].push(row);
    }

    const subtotalRows = [];

    for (const card in groupedDate) {
      const rows = groupedDate[card];
      const subtotalCnt = rows.reduce((total, row) => total + row.cnt, 0);
      const subtotalAmt = rows.reduce((total, row) => total + row.amt, 0);
      subtotalRows.push({
        appdd: '토탈',
        dep: '',
        card: card,
        cnt: subtotalCnt,
        amt: subtotalAmt,
      });
    }
    console.log(subtotalRows);

    let mergedData = [...resdata];
    console.log(mergedData);
    let a = 0;
    for (let i = 0; i < resdata.length; i++) {
      const currentCard = resdata[i].card;
      if (i < resdata.length - 1) {
        const nextCard = resdata[i + 1].card;
        const currentAppdd = resdata[i].appdd;

        if (currentCard !== nextCard && currentAppdd !== '토탈') {
          mergedData.splice(i + 1 + a, 0, subtotalRows[a]);
          a++;
        }
      } else if (i === resdata.length - 1) {
        mergedData.splice(i + 2 + a, 0, subtotalRows[a]);
      }
    }
    return [...mergedData];
  };

  useEffect(() => {
    if (page === 'sub01') {
      setColmnDefs([
        { field: 'appdd', headerName: '승인일자' },
        { field: 'dep', headerName: '사업부' },
        { field: 'card', headerName: '카드사' },
        {
          field: 'cnt',
          headerName: '합계건수',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
        },
        {
          field: 'amt',
          headerName: '합계금액',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
        },
      ]);
    } else if (page === 'sub02') {
      setColmnDefs([
        {
          filed: 'appdd',
          headerName: '승인일자',
        },
        { field: 'dep', headerName: '사업부' },
        { field: 'tidnm', headerName: '단말기' },
        {
          field: 'cnt',
          headerName: '합계건수',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
        },
        {
          field: 'amt',
          headerName: '합계금액',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
        },
      ]);
    } else if (page === 'sub03') {
      setColmnDefs([
        {
          filed: 'appdd',
          headerName: '승인일자',
        },
        { field: 'dep', headerName: '사업부' },
        { field: 'tidnm', headerName: '단말기' },
        {
          field: 'cnt',
          headerName: '합계건수',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
        },
        {
          field: 'amt',
          headerName: '합계금액',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
        },
      ]);
    } else if (page === 'sub04') {
      setColmnDefs([
        {
          filed: 'appdd',
          headerName: '승인일자',
        },
        { field: 'dep', headerName: '사업부' },
        { field: 'tidnm', headerName: '단말기' },
        {
          field: 'cnt',
          headerName: '합계건수',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
        },
        {
          field: 'amt',
          headerName: '합계금액',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
        },
      ]);
    } else if (page === 'sub05') {
      setColmnDefs([
        {
          filed: 'appdd',
          headerName: '입금일자',
        },
        { field: 'dep', headerName: '사업부' },

        {
          field: 'totsales',
          headerName: '매출금액',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
        },
        {
          field: 'totreceivable',
          headerName: '미수금액',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
        },
      ]);
    } else if (page === 'sub06') {
      setColmnDefs([
        {
          filed: 'expdd',
          headerName: '입금일자',
        },
        { field: 'dep', headerName: '사업부' },
        { field: 'card', headerName: '카드사' },

        {
          field: 'amt',
          headerName: '입금액합계',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
        },
      ]);
    }
  }, []);

  /* 그리드 끝 */

  content =
    page === 'sub01'
      ? (content = [
          <Selecter
            option="appdd"
            handleDPOpen={handleDPOpen}
            handleDPOpen2={handleDPOpen2}
            sappdd={sappdd}
            setSappdd={setSappdd}
            eappdd={eappdd}
            setEappdd={setEappdd}
          />,
          <Selecter option="dep" dep={dep} setDep={setDep} />,
          <Selecter option="card" card={card} setCard={setCard} />,
        ])
      : page === 'sub02'
      ? (content = [
          <Selecter
            option="appdd"
            handleDPOpen={handleDPOpen}
            handleDPOpen2={handleDPOpen2}
            sappdd={sappdd}
            setSappdd={setSappdd}
            eappdd={eappdd}
            setEappdd={setEappdd}
          />,
          <Selecter option="dep" dep={dep} setDep={setDep} />,
          <Selecter option="tid" tid={tid} setTid={setTid} />,
        ])
      : page === 'sub03'
      ? (content = [
          <Selecter
            option="appdd"
            handleDPOpen={handleDPOpen}
            handleDPOpen2={handleDPOpen2}
            sappdd={sappdd}
            setSappdd={setSappdd}
            eappdd={eappdd}
            setEappdd={setEappdd}
          />,
          <Selecter option="dep" dep={dep} setDep={setDep} />,
          <Selecter option="card" card={card} setCard={setCard} />,
        ])
      : page === 'sub04'
      ? (content = [
          <Selecter
            option="appdd"
            handleDPOpen={handleDPOpen}
            handleDPOpen2={handleDPOpen2}
            sappdd={sappdd}
            setSappdd={setSappdd}
            eappdd={eappdd}
            setEappdd={setEappdd}
          />,
          <Selecter option="dep" dep={dep} setDep={setDep} />,
          <Selecter option="card" card={card} setCard={setCard} />,
        ])
      : page === 'sub05'
      ? (content = [
          <Selecter
            option="appdd"
            handleDPOpen={handleDPOpen}
            handleDPOpen2={handleDPOpen2}
            sappdd={sappdd}
            setSappdd={setSappdd}
            eappdd={eappdd}
            setEappdd={setEappdd}
          />,
          <Selecter option="dep" dep={dep} setDep={setDep} />,
        ])
      : page === 'sub06'
      ? (content = [
          <Selecter
            option="expdd"
            handleDPOpen={handleDPOpen}
            handleDPOpen2={handleDPOpen2}
            sexpdd={sexpdd}
            setSexpdd={setSexpdd}
            eexpdd={eexpdd}
            setEexpdd={setEexpdd}
          />,
          <Selecter option="dep" dep={dep} setDep={setDep} />,
          <Selecter option="card" card={card} setCard={setCard} />,
        ])
      : '';

  return (
    <>
      <DatePicker
        //value={new Date(2022, 2, 2)}
        value={selectedDate}
        isOpen={isOpen}
        onSelect={handleDateChange}
        onCancel={handleDPClose}
        confirmText="선택"
        cancelText="취소"
      />
      <DatePicker2
        //value={new Date(2022, 3, 2)}
        value={selectedDate2}
        isOpen={isOpen2}
        onSelect={handleDateChange2}
        onCancel={handleDPClose2}
        confirmText="선택"
        cancelText="취소"
      />
      <SEARCH_BOX_DIV>
        <SEARCH_BOX_TABLE>{content}</SEARCH_BOX_TABLE>
      </SEARCH_BOX_DIV>
      <S_BTN_WRAP>
        <S_BTN onClick={testbtn}>
          <S_BTN_TEXT>
            <S_BTN_IMG />
            검색
          </S_BTN_TEXT>
        </S_BTN>
      </S_BTN_WRAP>
      <GridComponent
        columnDefs={columnDefs}
        rowData={rowData}
        setRowData={setRowData}
        gridOptions={gridOptions}
        defaultColDef={defaultColDef}
      />
    </>
  );
};

export default SearchBox;
