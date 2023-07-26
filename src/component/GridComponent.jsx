import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import './grid.css';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const GirdComponent = ({
  columnDefs,
  rowData,
  setRowData,
  gridOptions,
  defaultColDef,
}) => {
  const gridRef = useRef();

  const onFirstDataRendered = useCallback(params => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  const GRID_WRAP = styled.div`
    width: 95%;
    margin: 10px auto;
  `;

  const handleCellClicked = params => {
    const allColumns = params.columnApi.getAllDisplayedColumns(); // 모든 표시된 컬럼 가져오기
    
    console.log('All Columns:', allColumns);

    let swalvalue = "";
    allColumns.forEach(element => {
      console.log(element.userProvidedColDef.headerName);
      console.log(params.data[element.userProvidedColDef.field]);
      const headerName = element.userProvidedColDef.headerName;
      const cellvalue = !isNaN(params.data[element.userProvidedColDef.field]) ?
      params.data[element.userProvidedColDef.field].toLocaleString()
      : params.data[element.userProvidedColDef.field];

      const res = !isNaN(params.data[element.userProvidedColDef.field]) ? `<tr><th style="width:50%;padding:5px;text-align:right;padding-right:4rem;">${headerName}</th><td style="text-align:right;padding-right:4rem;">${cellvalue}</td></tr>`
      : `<tr><th style="width:50%;padding:5px;text-align:right;padding-right:4rem;">${headerName}</th><td>${cellvalue}</td></tr>`;
      swalvalue += res;
    });


    swalvalue = `<table style="width:100%">${swalvalue}</table>`


    console.log(params);
    const clickedValue = !isNaN(params.value)
      ? params.value.toLocaleString()
      : params.value;

    const clickedCellValue = params.data;
    console.log(swalvalue);
    // Swal.fire(`${clickedValue}`, '', '');
    Swal.fire(`상세보기`, `${swalvalue}`, '');
  };

  const getRowStyle = params => {
    if (params.data.appdd === '소계' || params.data.expdd === '소계') {
      return {
        backgroundColor: 'rgb(217,217,217)',
        color: 'balck',
        fontWeight: '600',
      };
    } else if (params.data.appdd === '합계' || params.data.expdd === '합계') {
      return {
        backgroundColor: 'rgb(218,238,243)',
        color: 'rgb(27,120,193)',
        fontWeight: '600',
      };
    } else {
      return null;
    }
  };

  return (
    <>
      <GRID_WRAP>
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
          <AgGridReact
            ref={gridRef}
            onFirstDataRendered={onFirstDataRendered}
            rowData={rowData}
            columnDefs={columnDefs}
            suppressDragLeaveHidesColumns={true}
            gridOptions={gridOptions}
            defaultColDef={defaultColDef}
            onCellClicked={handleCellClicked}
            getRowStyle={getRowStyle}
          ></AgGridReact>
        </div>
      </GRID_WRAP>
    </>
  );
};

export default GirdComponent;
