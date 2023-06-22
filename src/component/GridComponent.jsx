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
