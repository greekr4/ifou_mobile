import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useCallback, useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const GirdComponent = ({
  columnDefs,
  rowData,
  setRowData,
  gridOptions,
  defaultColDef,
}) => {
  const gridRef = useRef();

  const addSubtotalRows = () => {
    const groupedDate = {};

    for (const row of rowData) {
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
    return [...rowData, ...subtotalRows];
  };

  const aa = addSubtotalRows();

  setRowData(aa);

  const onFirstDataRendered = useCallback(params => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  const GRID_WRAP = styled.div`
    width: 95%;
    margin: 10px auto;
  `;

  return (
    <>
      <GRID_WRAP>
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            onFirstDataRendered={onFirstDataRendered}
            gridOptions={gridOptions}
            defaultColDef={defaultColDef}
          ></AgGridReact>
        </div>
      </GRID_WRAP>
    </>
  );
};

export default GirdComponent;
