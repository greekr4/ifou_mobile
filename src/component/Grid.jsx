

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from "ag-grid-react";
import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
const Gird = () => {
    
    const numberCellFormatter = (params) => {
        return Math.floor(params.value)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      };


      
    const [columnDefs] = useState([
        { field: 'appdd' ,headerName: '승인일자',},
        { field: 'dep' ,headerName: '사업부'},
        { field: 'card' ,headerName: '카드사'},
        { field: 'cnt' ,headerName: '합계건수',cellClass: 'number',valueFormatter: numberCellFormatter,},
        { field: 'amt',headerName: '합계금액',cellClass: 'number',valueFormatter: numberCellFormatter,},
    ]);

    const [rowData] = useState([
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
        {appdd: "23.06.04", dep:"사업부",card:"신한",cnt:"1", amt:10000},
    ]);

    
    

    const gridRef = useRef();

    const onFirstDataRendered = useCallback((params) => {
        gridRef.current.api.sizeColumnsToFit();
      }, []);
    
    const GRID_WRAP = styled.div`
      width: 95%;
      margin: 10px auto;
    `;



    //gridRef.current.api.sizeColumnsToFit();


    // useEffect(() => {
    // //gridRef.current.sizeToFit();
    // gridRef.current.api.sizeColumnsToFit();
    // },[]);

    
    
    return(
        <>
        <GRID_WRAP>
        <div className="ag-theme-alpine" style={{height: 400, width: "100%"}}>
            <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                onFirstDataRendered={onFirstDataRendered}
                
                >
            </AgGridReact>
        </div>
        </GRID_WRAP>
        
        </>
    )
}

export default Gird;