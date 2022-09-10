/* eslint-disable no-unused-vars */
import React from 'react';

import { Moment } from 'moment';
import { TextFieldProps } from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { FormTextField, FormValuesProps } from 'common/components';
import { dateMonthYearFormat } from 'common/constants';
import { FormikErrors } from 'formik';

interface BasicDatePickerProps {
  name: string;
  label: string;
  value: Moment | null;
  setValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<FormValuesProps>>;
  error: boolean;
  helperText: string | undefined;
  minDate?: Moment | undefined;
}

export const BasicDatePicker = ({
  label,
  value,
  minDate,
  name,
  error = true,
  helperText,
  setValue
}: BasicDatePickerProps) => {
  return (
    <DatePicker
      label={label}
      value={value}
      minDate={minDate}
      inputFormat={dateMonthYearFormat}
      onChange={(newValue: Moment | null) => {
        setValue(name, newValue, true);
      }}
      renderInput={(params: TextFieldProps) => (
        <FormTextField {...params} error={error} helperText={helperText} name={name} />
      )}
      disablePast
    />
  );
};
