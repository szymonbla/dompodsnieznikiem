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
      InputLabelProps={{
        shrink: true
      }}
      sx={{
        width: '100%',
        '& input': {
          color: 'text.secondary'
        },
        '& label.Mui-focused': { color: 'text.primary', borderColor: 'text.primary' },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'text.primary'
          }
        },
        ...sx
      }}
    />
  );
};
