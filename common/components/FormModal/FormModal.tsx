/* eslint-disable no-undef */
import React from 'react';
import { Grid } from '@mui/material';
import { GlobalModal } from 'common/components/Shared/Modals/GlobalModal';
import { useModal } from 'state';
import { RequestDateForm, FormValuesProps } from './RequestDateForm';
import emailjs from '@emailjs/browser';

export const FormModal = () => {
  const { isOpen, updateModalState } = useModal();
  const handleClose = () => {
    updateModalState({ isOpen: false });
  };

  const handleSubmit = (values: FormValuesProps) => {
    try {
      emailjs.send(
        `${process.env.EMAIL_SERVICE_ID}`,
        `${process.env.EMAIL_TEMPLATE_ID}`,
        { ...values },
        `${process.env.EMAIL_PUBLIC_KEY}`
      );
      console.log(values);
      updateModalState({ isOpen: false });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalModal title="Zapytaj o dostępność" isOpen={isOpen} handleClose={handleClose}>
      <Grid sx={{ width: '100%', mt: '2.5rem' }}>
        <RequestDateForm handleSubmit={handleSubmit} />
      </Grid>
    </GlobalModal>
  );
};
