import {AgGridReact, AgGridColumn} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import AG_GRID_LOCALE_FR from '../i18n/locale.fr';


export interface Column {
  field: string,
  name: string,
  type?: 'string' | 'number' | 'date',
  rowDrag?: boolean,
}

export interface AppAgGridProps {
  data: any[]
  columns: any[]
}

const AppAgGrid = (props: AppAgGridProps) => {
  const { data, columns } = props
  
  return (
    <AgGridReact
      rowData={data}
      rowDragManaged={true}
      animateRows={true}
      localeText={AG_GRID_LOCALE_FR}
      defaultColDef={{
        flex: 1,
        resizable: true,
        filter: true,
      }}
    >
      {columns.map((column: Column) => {
        return <AgGridColumn 
          key={column.field}
          field={column.field} 
          headerName={column.name}
          rowDrag={column.rowDrag}
          filter={
            column.type === 'date'
            ? 'agDateColumnFilter'
            : column.type === 'number'
            ? 'agNumberColumnFilter'
            : 'agTextColumnFilter'
          }
        ></AgGridColumn>
      })}
    </AgGridReact>
  )
}

export default AppAgGrid