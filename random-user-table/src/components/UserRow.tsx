// src/components/UserRow.tsx
import React from 'react';
import { TableRow, TableCell, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface UserRowProps {
  user: {
    name: { first: string, last: string };
    email: string;
    location: { country: string };
  };
  index: number;
  selectedColumns: string[];
  onEdit: (user: any) => void;
  onDelete: (index: number) => void;
}

const UserRow: React.FC<UserRowProps> = ({ user, index, selectedColumns, onEdit, onDelete }) => {
  return (
    <TableRow>
      {selectedColumns.includes('name') && <TableCell>{`${user.name.first} ${user.name.last}`}</TableCell>}
      {selectedColumns.includes('email') && <TableCell>{user.email}</TableCell>}
      {selectedColumns.includes('location') && <TableCell>{user.location.country}</TableCell>}
      <TableCell>
        <IconButton onClick={() => onEdit(user)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(index)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default UserRow;