import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Title from './Title';

interface Address {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  }

interface User {
  id: number;
  name: string;
  email:string;
  username:string,
  address: Address;
  phone: string;
}

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
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json();
        const formattedUsers: User[] = data.map((user: any) => ({
          id: user.id,
          name: `${user.name.firstname} ${user.name.lastname}`,
          email:user.email,
          username:user.username,
          address: user.address,
          phone: user.phone,
        }));
        setUsers(formattedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
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