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
            rowData={rowData}
            columnDefs={columnDefs}
            onFirstDataRendered={onFirstDataRendered}
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
