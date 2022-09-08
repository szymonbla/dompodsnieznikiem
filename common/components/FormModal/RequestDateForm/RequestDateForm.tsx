import React from 'react';
import * as Yup from 'yup';
import { Grid } from '@mui/material';
import { useFormik } from 'formik';

import { FormTextField, CTAButton } from 'common/components/Shared';

export interface FormValuesProps {
  name: string;
  email: string;
}
interface RequestDateFormProps {
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (values: FormValuesProps) => void;
}

export const RequestDateForm = ({ handleSubmit }: RequestDateFormProps) => {
  const formik = useFormik<FormValuesProps>({
    initialValues: {
      name: '',
      email: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'To pole powinno mieć co najmniej 3 znaki :D')
        .matches(/[^0-9 ]/i, 'Cyfry są niedozwolone :(')
        .required('Wypełnij to pole. Będzie Nam łatwiej odpowiedzieć!'),
      email: Yup.string()
        .email('Oops! Niepoprawny email')
        .required('Wypełnij to pole. Będzie Nam łatwiej odpowiedzieć!')
    }),
    onSubmit: handleSubmit
  });

  return (
    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
      <Grid sx={{ '& > div': { mb: '1rem' } }}>
        <FormTextField
          id="name"
          type="text"
          name="name"
          label="Imię i nazwisko"
          placeholder="Jan Kowalski"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={!!formik.errors.name}
          helperText={formik.errors.name}
          required
        />
        <FormTextField
          id="email"
          type="email"
          name="email"
          label="E-mail"
          placeholder="jankowalski@gmail.com"
          helperText={formik.errors.email}
          error={!!formik.errors.email}
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
        <CTAButton type="submit" label="Zapytaj o termin" />
      </Grid>
    </form>
  );
};
