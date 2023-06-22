import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import './grid.css';
import Swal from 'sweetalert2';

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
    const clickedValue = !isNaN(params.value)
      ? params.value.toLocaleString()
      : params.value;
    Swal.fire(`${clickedValue}`, '', '');
  };

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
            onCellClicked={handleCellClicked}
          ></AgGridReact>
        </div>
      </GRID_WRAP>
    </>
  );
};

export default GirdComponent;
