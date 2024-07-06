// src/components/DataTable.tsx
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import useUsers from '../hooks/useUsers';
import EditModal from './EditModal';
import FilterModal from './FilterModal';
import ColumnSelectorModal from './ColumnSelectorModal';
import UserRow from './UserRow';

const DataTable: React.FC = () => {
  const { users, setUsers, isLoading } = useUsers();
  const [compactView, setCompactView] = useState<boolean>(true);
  const [editUser, setEditUser] = useState<any>(null);
  const [selectedColumns, setSelectedColumns] = useState<string[]>(['name', 'email', 'location']);

  const handleDelete = (index: number) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      console.log('Deleting user at index:', index);
      setUsers(users.filter((_, i) => i !== index));
    }
  };

  const handleEdit = (user: any) => {
    console.log('Editing user:', user);
    setEditUser(user);
  };

  const handleSaveEdit = (updatedUser: any) => {
    setUsers(users.map(user => user === editUser ? updatedUser : user));
    setEditUser(null);
  };

  const toggleView = () => {
    setCompactView(!compactView);
  };

  const handleColumnChange = (columns: string[]) => {
    setSelectedColumns(columns);
  };

  if (isLoading) return <div>Cargando...</div>;

  return (
    <div>
      <Button variant="contained" onClick={toggleView}>
        {compactView ? 'Expandir' : 'Compactar'} Vista
      </Button>
      <ColumnSelectorModal selectedColumns={selectedColumns} onChange={handleColumnChange} />
      <FilterModal />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {selectedColumns.includes('name') && <TableCell>Nombre</TableCell>}
              {selectedColumns.includes('email') && <TableCell>Email</TableCell>}
              {selectedColumns.includes('location') && <TableCell>País</TableCell>}
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <UserRow
                key={index}
                user={user}
                index={index}
                selectedColumns={selectedColumns}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {editUser && <EditModal user={editUser} onSave={handleSaveEdit} onClose={() => setEditUser(null)} />}
    </div>
  );
};

export default DataTable;