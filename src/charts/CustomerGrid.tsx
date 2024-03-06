import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Title from '../components/Title';
import User from '../interfaces/User';
import { fetchUsers } from '../api/api';
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Name', width: 200 },
  {field: 'email', headerName: 'Email', type: 'string', width: 150 },
  {field: 'username', headerName: 'Username', type: 'string', width: 150 },
  { field: 'address.city', headerName: 'City', type: 'string', width: 150, valueGetter: (params: GridValueGetterParams) => params.row.address.city, },
  { field: 'phone', headerName: 'Phone', type: 'string', width: 150 },
];

export default function Customer() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  return (
    <React.Fragment>
      <Title>Customers</Title>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </React.Fragment>
  );
}