import { Button } from '@mui/material';
import { Field, Formik } from 'formik';
import React from 'react';

const Form = ({ fields, ...rest }) => (
  <Formik
    {...rest}
    // initialValues={loginInitialValues}
    // onSubmit={(value) => {
    //   console.log(value);
    // }}
  >
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        {fields.map((x) => (
          <Field key={x.name} {...x} />
        ))}
        <div
          style={{
            padding: 10,
          }}
        >
          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </div>
      </form>
    )}
  </Formik>
);

export default Form;
