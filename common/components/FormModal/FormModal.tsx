/* eslint-disable no-undef */
import React from 'react';

import { Grid } from '@mui/material';
import { send } from '@emailjs/browser';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import { GlobalModal } from 'common/components/Shared/Modals/GlobalModal';
import { RequestDateForm, FormValuesProps } from './RequestDateForm';
import { dateMonthYearFormat } from 'common/constants';
import { useModal } from 'state';

export const FormModal = () => {
  const { isOpen, updateModalState } = useModal();
  const handleClose = () => {
    updateModalState({ isOpen: false });
  };

  const handleSubmit = ({ email, name, startDate, endDate }: FormValuesProps) => {
    try {
      const formValues = {
        guestName: name,
        responseEmail: email,
        startDate: startDate?.format(dateMonthYearFormat),
        endDate: endDate?.format(dateMonthYearFormat)
      };
      send(
        `${process.env.EMAIL_SERVICE_ID}`,
        `${process.env.EMAIL_TEMPLATE_ID}`,
        formValues,
        `${process.env.EMAIL_PUBLIC_KEY}`
      );
      updateModalState({ isOpen: false });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalModal title="Zapytaj o dostępność" isOpen={isOpen} handleClose={handleClose}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Grid sx={{ width: '100%', mt: '2.5rem' }}>
          <RequestDateForm handleSubmit={handleSubmit} />
        </Grid>
      </LocalizationProvider>
    </GlobalModal>
  );
};
