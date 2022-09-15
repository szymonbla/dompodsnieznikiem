import React, { useEffect } from 'react';

import * as Yup from 'yup';
import { Moment } from 'moment';
import { useFormik } from 'formik';
import { Grid } from '@mui/material';

import { FormTextField, CTAButton } from 'common/components/Shared';
import { BasicDatePicker, BaseSlider } from 'common/components';

export interface FormValuesProps {
  name: string;
  email: string;
  startDate: Moment | null;
  endDate: Moment | null;
  guestsNumber: number;
}
interface RequestDateFormProps {
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (values: FormValuesProps) => void;
}

export const RequestDateForm = ({ handleSubmit }: RequestDateFormProps) => {
  const formik = useFormik<FormValuesProps>({
    initialValues: {
      name: '',
      email: '',
      startDate: null,
      endDate: null,
      guestsNumber: 1
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'To pole powinno mieć co najmniej 3 znaki :D')
        .matches(/[^0-9 ]/i, 'Cyfry są niedozwolone :(')
        .required('Wypełnij to pole. Będzie Nam łatwiej odpowiedzieć!'),
      email: Yup.string()
        .email('Oops! Niepoprawny email')
        .required('Wypełnij to pole. Będzie Nam łatwiej odpowiedzieć!'),
      startDate: Yup.date()
        .required('Wypełnij to pole. Będzie Nam łatwiej odpowiedzieć!')
        .nullable()
        .typeError('Niepoprawny format daty'),
      endDate: Yup.date()
        .min(Yup.ref('startDate'), 'Data wymeldowania musi być po dacie zameldowania')
        .required('Wypełnij to pole. Będzie Nam łatwiej odpowiedzieć!')
        .nullable()
        .typeError('Niepoprawny format daty')
    }),
    onSubmit: handleSubmit
  });

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

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
        <Grid display="flex" gap={2}>
          <BasicDatePicker
            name="startDate"
            label="Zamedlowanie"
            value={formik.values.startDate}
            setValue={formik.setFieldValue}
            error={!!formik.errors.startDate}
            helperText={formik.errors.startDate}
          />
          <BasicDatePicker
            name="endDate"
            label="Wymeldowanie"
            value={formik.values.endDate}
            setValue={formik.setFieldValue}
            minDate={formik.values.startDate as Moment | undefined}
            error={!!formik.errors.endDate}
            helperText={formik.errors.endDate}
          />
        </Grid>
        <BaseSlider name="guestsNumber" setValue={formik.setFieldValue} value={formik.values.guestsNumber} />
        <CTAButton type="submit" label="Dołącz do zadowolonych gości" />
      </Grid>
    </form>
  );
};
