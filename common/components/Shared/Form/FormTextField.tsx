import React from 'react';

import { TextField, TextFieldProps } from '@mui/material';

export interface FormValuesProps {
  name: string;
  email: string;
}
export const FormTextField = (props: TextFieldProps) => {
  const { sx, name } = props;

  return (
    <TextField
      {...props}
      name={name}
      fullWidth
      InputLabelProps={{
        shrink: true
      }}
      sx={{
        '& input': {
          color: 'text.secondary'
        },
        '& label.Mui-focused': {
          color: 'text.primary'
        },
        '& label.Mui-error': {
          color: 'error.main'
        },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'text.primary'
          },
          '&.Mui-error fieldset': {
            borderColor: 'error.main'
          }
        },
        ...sx
      }}
    />
  );
};
