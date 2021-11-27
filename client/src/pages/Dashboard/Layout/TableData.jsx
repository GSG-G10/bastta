import { Table } from '../../../components/admin';

const TableData = () => {
  const sx = {
    tableBody: {
      width: '100%',
      height: '100%',
      padding: '0 5rem',
    },
  };

  return (
    <div style={sx.tableBody}>
      <Table />
    </div>
  );
};

export default TableData;
