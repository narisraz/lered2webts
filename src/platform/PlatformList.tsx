import AppAgGrid, { Column } from '../components/AppAgGrid'
import IPlatform from '../interfaces/IPlatform';

const PlatformList = () => {
  const rowData: IPlatform[] = [
    {
      id: '1',
      name: 'textbroker',
      url: 'textbroker.com',
    }
  ];

  const columns: Column[] = [
    {
      field: 'name',
      name: 'Nom',
      rowDrag: true,
    },{
      field: 'url',
      name: 'URL'
    },
  ]

  return (
    <div className="ag-theme-alpine" style={{height: 400}}>
      <AppAgGrid data={rowData} columns={columns} />
    </div>
  )
}

export default PlatformList