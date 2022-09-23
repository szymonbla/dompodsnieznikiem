/* eslint-disable no-unused-vars */
import { Mark } from '@mui/base';
import { Grid, Slider, Typography } from '@mui/material';
import { FormikErrors } from 'formik';

import { FormValuesProps } from 'common/components/Shared/Form';

interface BaseSliderProps {
  name: string;
  setValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<FormValuesProps>>;
  value: number;
}

export const BaseSlider = ({ name, value, setValue }: BaseSliderProps) => {
  function valueWithLabelMarks() {
    const filledArray: Mark[] = Array.from({ length: 12 }, (_, index) => {
      index++;
      return { value: index, label: index };
    });

    return filledArray;
  }

  return (
    <Grid sx={{ '& > *': { mb: 2 } }}>
      <Typography variant="body2">Z iloma osobami będziesz wypoczywać?</Typography>
      <Slider
        name={name}
        value={value}
        onChange={(_, newValue) => {
          setValue(name, newValue);
        }}
        step={1}
        marks={valueWithLabelMarks()}
        min={1}
        max={12}
        sx={{ color: 'text.primary' }}
      />
    </Grid>
  );
};
