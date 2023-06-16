import React from "react";
import styled from "styled-components";

const DAYBOX = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #c1c1c1;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const TITLE_WRAP = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-size: 6.5vw;
  font-weight: 500;
`;

const DASHBOX = styled.div`
  width: 100%;
  height: calc(90% - 20px);
  background: #f7f8fc 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #d2d2d2;
  border-radius: 20px;
  display: grid;
  justify-content: space-around;
  grid-template-columns: [first] 100%;
`;

// const DASHBOX_TITLE = styled.div`
//     width: 100%;
//     height: 20%;
//     background: transparent linear-gradient(0deg, #1D79E7 0%, #53BBD3 100%) 0% 0% no-repeat padding-box;
//     border-radius: 20px;
//     border-bottom-left-radius: 0;
//     border-bottom-right-radius: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: white;
//     font-size: 2.5rem;
//     font-weight: 500;
// `

// const DASHBOX_LIST = styled.div`
//     height: calc(100%);
//     padding: 0 20px;
// `

// const DASHBOX_ITEM_TITLE = styled.h4`
// text-align: center;
// border-top: 1px solid #ababab;
// padding-top: 10px;
// margin: 18px;
// &:nth-child(1){
//     border-top : 0;
//     padding-top: 0;
// }
// `
// const DASHBOX_ITEM_AMT = styled.h3`
// margin: 0;
// padding: 0;
// text-align: center;

// `

// const DASHBOX_ITEM_WRAP = styled.div`
//     border-radius: 15px;

//     background: #1515;
//     padding: 15px;
//     width: 103.5%;
//     left: -20px;
//     position: relative;
// `;

const TITLE_BOX = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent linear-gradient(0deg, #1d79e7 0%, #53bbd3 100%) 0% 0%
    no-repeat padding-box;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;
  height: 100%;
`;

const ITEM_BOX = styled.div`
  &::after {
    content: "";
    display: block;
    border-bottom: 1px solid rgb(212, 212, 213);
    width: 70%;
    margin: 0 auto;
    position: relative;
    top: 0px;
  }

  &.border-none::after {
    border-bottom: none;
  }

  &.sum-item {
    background-color: rgb(230, 235, 255);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    &::after {
      border-bottom: none;
    }
  }
  display: grid;
  text-align: center;
  place-items: center;
  align-content: space-evenly;
`;

const CHANGE_BTN = styled.div`
  margin: 0 10px;
  background-position: center;
  width: 35px;
  height: 44px;

  &.prev {
    background: url("/Resource/Images/Icon/prev.png") no-repeat;
  }
  &.next {
    background: url("/Resource/Images/Icon/next.png") no-repeat;
  }
`;

const MM_DD = styled.span`
  font-size: 10vw;
  font-weight: 600;
`;

const MM_DD_TEXT = styled.span`
  height: 20%;
  font-size: 6vw;
  font-weight: 200;
`;

const DAY_TEXT = styled.span`
  font-size: 9vw;
`;

const ITEM_TEXT = styled.div`
  width: 100%;
  font-size: 5.5vw;
  padding-top: 0.33em;
  padding-bottom: 0.33em;
`;

const ITEM_AMT = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 5vw;
  padding-top: 0.33em;
  padding-bottom: 0.33em;
`;

const TITLE_IMG = styled.img`
  margin-right: 20px;
`;
const MM_DD_SUB = styled.span`
  font-weight: 200;
`;

const TEXT_SPAN = styled.span`
  padding: 20px;
`;

const DashBoard = ({ title, cc, ic, sum, test }) => {
  if (title === "01") {
    return (
      <DAYBOX>
        <TITLE_WRAP>
          <TITLE_IMG src="/Resource/Images/Icon/icon_title.png" />
          전일매출현황
        </TITLE_WRAP>
        <DASHBOX>
          <TITLE_BOX>
            <CHANGE_BTN className="prev" />
            <TEXT_SPAN>
              <MM_DD>04</MM_DD>
              <MM_DD_TEXT>월</MM_DD_TEXT>
              <MM_DD>17</MM_DD> <MM_DD_TEXT>일</MM_DD_TEXT>
              <DAY_TEXT>(월)</DAY_TEXT>
            </TEXT_SPAN>
            <CHANGE_BTN className="next" />
          </TITLE_BOX>
          <ITEM_BOX>
            <ITEM_TEXT>신용(1,123건)</ITEM_TEXT>
            <ITEM_AMT>1,100,000원</ITEM_AMT>
          </ITEM_BOX>
          <ITEM_BOX>
            <ITEM_TEXT>현금(10건)</ITEM_TEXT>
            <ITEM_AMT>10,000원</ITEM_AMT>
          </ITEM_BOX>
          <ITEM_BOX className="border-none">
            <ITEM_TEXT>현금IC(1건)</ITEM_TEXT>
            <ITEM_AMT>5,000원</ITEM_AMT>
          </ITEM_BOX>
          <ITEM_BOX className="sum-item">
            <ITEM_TEXT>합계(1,134건)</ITEM_TEXT>
            <ITEM_AMT>1,250,000원</ITEM_AMT>
          </ITEM_BOX>
        </DASHBOX>
      </DAYBOX>
    );
  } else if (title === "02") {
    return (
      <DAYBOX>
        <TITLE_WRAP>
          <TITLE_IMG src="/Resource/Images/Icon/icon_title.png" />
          당일입금현황
        </TITLE_WRAP>
        <DASHBOX>
          <TITLE_BOX>
            <CHANGE_BTN className="prev" />
            <TEXT_SPAN>
              <MM_DD>04</MM_DD>
              <MM_DD_TEXT>월</MM_DD_TEXT>
              <MM_DD>17</MM_DD> <MM_DD_TEXT>일</MM_DD_TEXT>
              <DAY_TEXT>(월)</DAY_TEXT>
            </TEXT_SPAN>
            <CHANGE_BTN className="next" />
          </TITLE_BOX>
          <ITEM_BOX>
            <ITEM_TEXT>매출</ITEM_TEXT>
            <ITEM_AMT>1,100,000원</ITEM_AMT>
          </ITEM_BOX>
          <ITEM_BOX className="border-none">
            <ITEM_TEXT>수수료</ITEM_TEXT>
            <ITEM_AMT>10,000원</ITEM_AMT>
          </ITEM_BOX>
          <ITEM_BOX className="sum-item">
            <ITEM_TEXT>입금예정액</ITEM_TEXT>
            <ITEM_AMT>1,250,000원</ITEM_AMT>
          </ITEM_BOX>
        </DASHBOX>
      </DAYBOX>
    );
  } else if (title === "03") {
    return (
      <DAYBOX>
        <TITLE_WRAP>
          <TITLE_IMG src="/Resource/Images/Icon/icon_title.png" />
          매출통계
        </TITLE_WRAP>
        <DASHBOX>
          <TITLE_BOX>
            <CHANGE_BTN className="prev" />
            <TEXT_SPAN>
              <MM_DD>
                04<MM_DD_SUB>월</MM_DD_SUB>
              </MM_DD>
            </TEXT_SPAN>
            <CHANGE_BTN className="next" />
          </TITLE_BOX>
          <ITEM_BOX>
            <ITEM_TEXT>신용(1,123건)</ITEM_TEXT>
            <ITEM_AMT>1,100,000원</ITEM_AMT>
          </ITEM_BOX>
          <ITEM_BOX>
            <ITEM_TEXT>현금(10건)</ITEM_TEXT>
            <ITEM_AMT>10,000원</ITEM_AMT>
          </ITEM_BOX>
          <ITEM_BOX className="border-none">
            <ITEM_TEXT>현금IC(1건)</ITEM_TEXT>
            <ITEM_AMT>5,000원</ITEM_AMT>
          </ITEM_BOX>
          <ITEM_BOX className="sum-item">
            <ITEM_TEXT>합계(1,134건)</ITEM_TEXT>
            <ITEM_AMT>1,250,000원</ITEM_AMT>
          </ITEM_BOX>
        </DASHBOX>
      </DAYBOX>
    );
  } else {
    return <></>;
  }
};

export default DashBoard;
