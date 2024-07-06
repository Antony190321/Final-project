// src/components/ColumnSelectorModal.tsx
import React, { useState } from 'react';
import { Modal, Box, Typography, FormControlLabel, Checkbox, Button } from '@mui/material';

const ColumnSelectorModal: React.FC<{ selectedColumns: string[], onChange: (columns: string[]) => void }> = ({ selectedColumns, onChange }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [columns, setColumns] = useState<string[]>(selectedColumns);

  const handleToggle = (column: string) => {
    setColumns(prev => prev.includes(column) ? prev.filter(c => c !== column) : [...prev, column]);
  };

  const handleSave = () => {
    onChange(columns);
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>Seleccionar Columnas</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box p={3} bgcolor="background.paper" borderRadius={3} maxWidth={400} mx="auto" mt={10}>
          <Typography variant="h6">Seleccionar Columnas</Typography>
          <FormControlLabel
            control={<Checkbox checked={columns.includes('name')} onChange={() => handleToggle('name')} />}
            label="Nombre"
          />
          <FormControlLabel
            control={<Checkbox checked={columns.includes('email')} onChange={() => handleToggle('email')} />}
            label="Email"
          />
          <FormControlLabel
            control={<Checkbox checked={columns.includes('location')} onChange={() => handleToggle('location')} />}
            label="País"
          />
          <Box mt={2}>
            <Button onClick={handleSave} variant="contained" color="primary">Guardar</Button>
            <Button onClick={() => setOpen(false)} variant="outlined" color="secondary" style={{ marginLeft: 8 }}>Cancelar</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ColumnSelectorModal;