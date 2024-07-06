// src/components/EditModal.tsx
import React from 'react';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

interface EditModalProps {
  user: any;
  onSave: (user: any) => void;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ user, onSave, onClose }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.object().shape({
      first: Yup.string().required('Requerido'),
      last: Yup.string().required('Requerido'),
    }),
    email: Yup.string().email('Email inválido').required('Requerido'),
    location: Yup.object().shape({
      country: Yup.string().required('Requerido'),
    }),
  });

  return (
    <Modal open={!!user} onClose={onClose}>
      <Box p={3} bgcolor="background.paper" borderRadius={3} maxWidth={500} mx="auto" mt={10}>
        <Typography variant="h6">Editar Usuario</Typography>
        <Formik
          initialValues={user}
          validationSchema={validationSchema}
          onSubmit={onSave}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="name.first"
                as={TextField}
                label="Nombre"
                fullWidth
                margin="normal"
                error={touched.name?.first && !!errors.name?.first}
                helperText={touched.name?.first && errors.name?.first}
              />
              <Field
                name="name.last"
                as={TextField}
                label="Apellido"
                fullWidth
                margin="normal"
                error={touched.name?.last && !!errors.name?.last}
                helperText={touched.name?.last && errors.name?.last}
              />
              <Field
                name="email"
                as={TextField}
                label="Email"
                fullWidth
                margin="normal"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <Field
                name="location.country"
                as={TextField}
                label="País"
                fullWidth
                margin="normal"
                error={touched.location?.country && !!errors.location?.country}
                helperText={touched.location?.country && errors.location?.country}
              />
              <Box mt={2}>
                <Button type="submit" variant="contained" color="primary">Guardar</Button>
                <Button onClick={onClose} variant="outlined" color="secondary" style={{ marginLeft: 8 }}>Cancelar</Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default EditModal;