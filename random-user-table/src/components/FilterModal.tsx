// src/components/FilterModal.tsx
import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const FilterModal: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<{ [key: string]: string }>({});

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    // Lógica para aplicar los filtros
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>Filtrar Usuarios</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box p={3} bgcolor="background.paper" borderRadius={3} maxWidth={500} mx="auto" mt={10}>
          <Typography variant="h6">Filtrar Usuarios</Typography>
          <TextField name="country" label="País" fullWidth margin="normal" onChange={handleFilterChange} />
          <TextField name="email" label="Email" fullWidth margin="normal" onChange={handleFilterChange} />
          <TextField name="name" label="Nombre" fullWidth margin="normal" onChange={handleFilterChange} />
          <Box mt={2}>
            <Button onClick={applyFilters} variant="contained" color="primary">Aplicar</Button>
            <Button onClick={() => setOpen(false)} variant="outlined" color="secondary" style={{ marginLeft: 8 }}>Cancelar</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default FilterModal;