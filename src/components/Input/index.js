/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { TextField } from '@mui/material';
import React from 'react';

const Input = ({ field, form: { touched, errors }, ...rest }) => (
    <TextField
      {...field}
      {...rest}
      error={!!touched[field.name] && !!errors[field.name]}
      helperText={touched[field.name] && errors[field.name]}
      variant="outlined"
      fullWidth
    />
);

export default Input;
