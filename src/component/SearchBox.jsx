import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-mobile-datepicker';
import DatePicker2 from 'react-mobile-datepicker';
import styled from 'styled-components';
import GridComponent from './GridComponent';
import Selecter from './Search/Selecter';
import { useEffect } from 'react';
import { useRef } from 'react';

const LOADING_DIV = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LOADING_IMG = styled.img``;

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
  const [loading, SetLoading] = useState(false);

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

  const handleSearchBtn = async () => {
    SetLoading(true);
    let api;
    switch (page) {
      case 'sub01':
        api = 'http://nxm.ifou.co.kr:28080/sub01';
        break;
      case 'sub02':
        api = 'http://nxm.ifou.co.kr:28080/sub02';
        break;
      case 'sub03':
        api = 'http://nxm.ifou.co.kr:28080/sub03';
        break;
      case 'sub04':
        api = 'http://nxm.ifou.co.kr:28080/sub04';
        break;
      case 'sub05':
        api = 'http://nxm.ifou.co.kr:28080/sub05';
        break;
      case 'sub06':
        api = 'http://nxm.ifou.co.kr:28080/sub06';
        break;
      default:
        break;
    }

    const p_sappdd = `20${sappdd.slice(0, 2)}${sappdd.slice(
      3,
      5,
    )}${sappdd.slice(6, 8)}`;
    const p_eappdd = `20${eappdd.slice(0, 2)}${eappdd.slice(
      3,
      5,
    )}${eappdd.slice(6, 8)}`;

    const p_sexpdd = `20${sexpdd.slice(0, 2)}${sexpdd.slice(
      3,
      5,
    )}${sexpdd.slice(6, 8)}`;

    const p_eexpdd = `20${eexpdd.slice(0, 2)}${eexpdd.slice(
      3,
      5,
    )}${eexpdd.slice(6, 8)}`;

    try {
      const res = await axios.post(api, null, {
        params: {
          sappdd: p_sappdd,
          eappdd: p_eappdd,
          depcd: dep,
          acqcd: card,
          tid: tid,
          sexpdd: p_sexpdd,
          eexpdd: p_eexpdd,
          orgcd: 'OR0016',
        },
      });

      let rowdata;

      if (page === 'sub01') {
        rowdata = await addSubtotalRows_card(res.data);
      } else if (page === 'sub02') {
        rowdata = await addSubtotalRows_tid(res.data);
      } else if (page === 'sub03') {
        rowdata = await addSubtotalRows_appdd(res.data);
      } else if (page === 'sub04') {
        rowdata = await addSubtotalRows_appdd(res.data);
      } else if (page === 'sub05') {
        rowdata = await addSubtotalRows_sub05(res.data);
      } else if (page === 'sub06') {
        rowdata = await addSubtotalRows_sub06(res.data);
      }
      setRowData(rowdata);
    } catch (error) {
      console.log(error);
    }
    SetLoading(false);
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
    localeText: {
      noRowsToShow: '데이터 없음',
    },

  };

  const defaultColDef = {
    sortable: true,
    resizable: true,
    suppressMovable: true,  //드래그앤 드롭 억제

  };

  /* 소계 합계 추가 */
  const addSubtotalRows_card = resdata => {
    const groupedDate = {};
    const sumData = [];
    let sum_cnt = 0;
    let sum_amt = 0;

    for (const row of resdata) {
      sum_cnt += row.cnt;
      sum_amt += row.amt;
    }

    for (const row of resdata) {
      const card = row.card;
      if (!groupedDate[card]) {
        groupedDate[card] = [];
      }
      groupedDate[card].push(row);
    }

    const subtotalRows = [];

    sumData.push({
      appdd: '합계',
      dep: '',
      card: '',
      cnt: sum_cnt,
      amt: sum_amt,
    });

    for (const card in groupedDate) {
      const rows = groupedDate[card];
      const subtotalCnt = rows.reduce((total, row) => total + row.cnt, 0);
      const subtotalAmt = rows.reduce((total, row) => total + row.amt, 0);
      subtotalRows.push({
        appdd: '소계',
        dep: '',
        card: '',
        cnt: subtotalCnt,
        amt: subtotalAmt,
      });
    }

    let mergedData = [...resdata];
    let a = 0;
    for (let i = 0; i < resdata.length; i++) {
      const currentCard = resdata[i].card;
      if (i < resdata.length - 1) {
        const nextCard = resdata[i + 1].card;
        const currentAppdd = resdata[i].appdd;

        if (currentCard !== nextCard && currentAppdd !== '소계') {
          mergedData.splice(i + 1 + a, 0, subtotalRows[a]);
          a++;
        }
      } else if (i === resdata.length - 1) {
        mergedData.splice(i + 2 + a, 0, subtotalRows[a]);
      }
    }
    mergedData.splice(0, 0, sumData[0]);

    return [...mergedData];
  };

  const addSubtotalRows_tid = resdata => {
    const groupedDate = {};
    const sumData = [];
    let sum_cnt = 0;
    let sum_amt = 0;

    for (const row of resdata) {
      sum_cnt += row.cnt;
      sum_amt += row.amt;
    }

    for (const row of resdata) {
      const tidnm = row.tidnm;
      if (!groupedDate[tidnm]) {
        groupedDate[tidnm] = [];
      }
      groupedDate[tidnm].push(row);
    }

    const subtotalRows = [];

    sumData.push({
      appdd: '합계',
      dep: '',
      tidnm: '',
      cnt: sum_cnt,
      amt: sum_amt,
    });

    for (const tidnm in groupedDate) {
      const rows = groupedDate[tidnm];
      const subtotalCnt = rows.reduce((total, row) => total + row.cnt, 0);
      const subtotalAmt = rows.reduce((total, row) => total + row.amt, 0);
      subtotalRows.push({
        appdd: '소계',
        dep: '',
        tidnm: tidnm,
        cnt: subtotalCnt,
        amt: subtotalAmt,
      });
    }

    let mergedData = [...resdata];
    let a = 0;
    for (let i = 0; i < resdata.length; i++) {
      const currentCard = resdata[i].tidnm;
      if (i < resdata.length - 1) {
        const nextCard = resdata[i + 1].tidnm;
        const currentAppdd = resdata[i].appdd;

        if (currentCard !== nextCard && currentAppdd !== '소계') {
          mergedData.splice(i + 1 + a, 0, subtotalRows[a]);
          a++;
        }
      } else if (i === resdata.length - 1) {
        mergedData.splice(i + 2 + a, 0, subtotalRows[a]);
      }
    }
    mergedData.splice(0, 0, sumData[0]);

    return [...mergedData];
  };

  const addSubtotalRows_appdd = resdata => {
    const groupedDate = {};
    const sumData = [];
    let sum_cnt = 0;
    let sum_amt = 0;

    for (const row of resdata) {
      sum_cnt += row.cnt;
      sum_amt += row.amt;
    }

    for (const row of resdata) {
      const appdd = row.appdd + row.dep;
      if (!groupedDate[appdd]) {
        groupedDate[appdd] = [];
      }
      groupedDate[appdd].push(row);
    }

    console.log(groupedDate);
    const subtotalRows = [];

    sumData.push({
      appdd: '합계',
      dep: '',
      tidnm: '',
      cnt: sum_cnt,
      amt: sum_amt,
    });

    for (const appdd in groupedDate) {
      const rows = groupedDate[appdd];
      const subtotalCnt = rows.reduce((total, row) => total + row.cnt, 0);
      const subtotalAmt = rows.reduce((total, row) => total + row.amt, 0);
      subtotalRows.push({
        appdd: '소계',
        dep: '',
        tidnm: '',
        cnt: subtotalCnt,
        amt: subtotalAmt,
      });
    }

    let mergedData = [...resdata];
    let a = 0;
    for (let i = 0; i < resdata.length; i++) {
      const currentCard = resdata[i].appdd;
      if (i < resdata.length - 1) {
        const nextCard = resdata[i + 1].appdd;
        const currentAppdd = resdata[i].appdd;

        if (
          currentCard !== nextCard &&
          currentAppdd !== '소계' &&
          subtotalRows[a]
        ) {
          mergedData.splice(i + 1 + a, 0, subtotalRows[a]);
          a++;
        }
      } else if (i === resdata.length - 1 && subtotalRows[a]) {
        mergedData.splice(i + 2 + a, 0, subtotalRows[a]);
      }
    }
    mergedData.splice(0, 0, sumData[0]);
    console.log(subtotalRows);
    console.log(mergedData);
    return [...mergedData];
  };

  const addSubtotalRows_sub05 = resdata => {
    const groupedDate = {};
    const sumData = [];
    let sum_totsales = 0;
    let sum_totreceivable = 0;
    let sum_totfee = 0;
    let sum_totsaleamt = 0;

    for (const row of resdata) {
      sum_totsales += row.totsales;
      sum_totfee += row.totfee;
      sum_totsaleamt += row.totsaleamt;
      sum_totreceivable += row.totreceivable;
    }

    for (const row of resdata) {
      const dep = row.dep;
      if (!groupedDate[dep]) {
        groupedDate[dep] = [];
      }
      groupedDate[dep].push(row);
    }

    const subtotalRows = [];

    sumData.push({
      appdd: '합계',
      dep: '',
      totsales: sum_totsales,
      totfee: sum_totfee,
      totsaleamt: sum_totsaleamt,
      totreceivable: sum_totreceivable,
    });

    for (const dep in groupedDate) {
      const rows = groupedDate[dep];
      const subtotalCnt = rows.reduce((total, row) => total + row.totsales, 0);
      const subtotalAmt = rows.reduce(
        (total, row) => total + row.totreceivable,
        0,
      );
      const subtotalfee = rows.reduce((total, row) => total + row.totfee, 0);
      const subtotalsaleamt = rows.reduce((total, row) => total + row.totsaleamt, 0);

      subtotalRows.push({
        appdd: '소계',
        dep: '',
        totsales: subtotalCnt,
        totfee: subtotalfee,
        totsaleamt : subtotalsaleamt,
        totreceivable: subtotalAmt,
      });
    }

    let mergedData = [...resdata];
    let a = 0;
    for (let i = 0; i < resdata.length; i++) {
      const currentCard = resdata[i].dep;
      if (i < resdata.length - 1) {
        const nextCard = resdata[i + 1].dep;
        const currentAppdd = resdata[i].appdd;

        if (
          currentCard !== nextCard &&
          currentAppdd !== '소계' &&
          subtotalRows[a]
        ) {
          mergedData.splice(i + 1 + a, 0, subtotalRows[a]);
          a++;
        }
      } else if (i === resdata.length - 1 && subtotalRows[a]) {
        mergedData.splice(i + 2 + a, 0, subtotalRows[a]);
      }
    }
    mergedData.splice(0, 0, sumData[0]);
    return [...mergedData];
  };

  const addSubtotalRows_sub06 = resdata => {
    console.log(resdata);
    const groupedDate = {};
    const sumData = [];
    let sum_amt = 0;

    for (const row of resdata) {
      sum_amt += row.amt;
    }

    for (const row of resdata) {
      const dep = row.dep;
      if (!groupedDate[dep]) {
        groupedDate[dep] = [];
      }
      groupedDate[dep].push(row);
    }

    const subtotalRows = [];

    sumData.push({
      expdd: '합계',
      dep: '',
      card: '',
      amt: sum_amt,
    });

    for (const dep in groupedDate) {
      const rows = groupedDate[dep];
      const subtotalAmt = rows.reduce((total, row) => total + row.amt, 0);
      subtotalRows.push({
        expdd: '소계',
        dep: '',
        card: '',
        amt: subtotalAmt,
      });
    }

    let mergedData = [...resdata];
    let a = 0;
    for (let i = 0; i < resdata.length; i++) {
      const currentCard = resdata[i].dep;
      if (i < resdata.length - 1) {
        const nextCard = resdata[i + 1].dep;
        const currentAppdd = resdata[i].expdd;

        if (
          currentCard !== nextCard &&
          currentAppdd !== '소계' &&
          subtotalRows[a]
        ) {
          mergedData.splice(i + 1 + a, 0, subtotalRows[a]);
          a++;
        }
      } else if (i === resdata.length - 1 && subtotalRows[a]) {
        mergedData.splice(i + 2 + a, 0, subtotalRows[a]);
      }
    }
    mergedData.splice(0, 0, sumData[0]);
    return [...mergedData];
  };

  /* /소계 합계 추가 */

  useEffect(() => {
    handleSearchBtn();
    if (page === 'sub01') {
      setColmnDefs([
        {
          field: 'appdd',
          headerName: '승인일자',
          colSpan: params =>
            params.data.appdd === '소계'
              ? 3
              : params.data.appdd === '합계'
              ? 3
              : 1,
              
        },
        { field: 'dep', headerName: '사업부' },
        { field: 'card', headerName: '카드사' },
        {
          field: 'cnt',
          headerName: '합계건수',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
          width: 140,
          type: 'rightAligned'
        },
        {
          field: 'amt',
          headerName: '합계금액',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
          width: 220,
        },
      ]);
    } else if (page === 'sub02') {
      setColmnDefs([
        {
          field: 'appdd',
          headerName: '승인일자',
          colSpan: params =>
            params.data.appdd === '소계'
              ? 3
              : params.data.appdd === '합계'
              ? 3
              : 1,
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
          field: 'appdd',
          headerName: '승인일자',
          colSpan: params =>
            params.data.appdd === '소계'
              ? 3
              : params.data.appdd === '합계'
              ? 3
              : 1,
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
          field: 'appdd',
          headerName: '승인일자',
          colSpan: params =>
            params.data.appdd === '소계'
              ? 3
              : params.data.appdd === '합계'
              ? 3
              : 1,
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
          field: 'appdd',
          headerName: '승인일자',
          colSpan: params =>
            params.data.appdd === '소계'
              ? 2
              : params.data.appdd === '합계'
              ? 2
              : 1,
            width:190,
        },
        { field: 'dep', headerName: '사업부' },

        {
          field: 'totsales',
          headerName: '매출금액',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
        },
        {
          field: 'totfee',
          headerName: '수수료',
          cellClass: 'number',
          valueFormatter: numberCellFormatter,
        },
        {
          field: 'totsaleamt',
          headerName: '입금액',
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
          field: 'expdd',
          headerName: '입금일자',
          colSpan: params =>
            params.data.expdd === '소계'
              ? 3
              : params.data.expdd === '합계'
              ? 3
              : 1,
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
          <Selecter option="tid" tid={tid} setTid={setTid} />,
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

      const dateConfig= {
        'year': {
            format: 'YYYY년',
            caption: 'Year',
            step: 1
        },
        'month': {
            format: 'M월',
            caption: 'Mon',
            step: 1
        },
        'date': {
            format: 'D일',
            caption: 'Day',
            step: 1
        }
      }

  return (
    <>
      {loading ? (
        <LOADING_DIV>
          <LOADING_IMG src="/Resource/Images/Icon/loading.gif" />
        </LOADING_DIV>
      ) : null}
      <DatePicker
        //value={new Date(2022, 2, 2)}
        value={selectedDate}
        isOpen={isOpen}
        onSelect={handleDateChange}
        onCancel={handleDPClose}
        confirmText="선택"
        cancelText="취소"
        theme= 'ios'
        dateConfig={dateConfig}
        headerFormat = 'YYYY.MM.DD.'    
      />
      <DatePicker2
        //value={new Date(2022, 3, 2)}
        value={selectedDate2}
        isOpen={isOpen2}
        onSelect={handleDateChange2}
        onCancel={handleDPClose2}
        confirmText="선택"
        cancelText="취소"
        theme= 'ios'
        dateConfig={dateConfig}
        headerFormat = 'YYYY.MM.DD.'    
      />
      <SEARCH_BOX_DIV>
        <SEARCH_BOX_TABLE>{content}</SEARCH_BOX_TABLE>
      </SEARCH_BOX_DIV>
      <S_BTN_WRAP>
        <S_BTN onClick={handleSearchBtn}>
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
