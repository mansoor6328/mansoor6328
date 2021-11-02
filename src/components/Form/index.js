import { Button } from '@mui/material';
import { Field, Formik } from 'formik';
import React from 'react';

const Form = ({ fields, btnText, ...rest }) => (
  <Formik
    {...rest}
    // initialValues={loginInitialValues}
    // onSubmit={(value) => {
    //   console.log(value);
    // }}
  >
    {({ handleSubmit, errors, isSubmitting }) => (
      <form onSubmit={handleSubmit}>
        {!!errors.serverError && <h1>{errors.serverError}</h1>}
        {fields.map((x) => (
          <Field key={x.name} {...x} />
        ))}
        <div
          style={{
            padding: 10,
          }}
        >
          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            fullWidth
          >
            {btnText}
          </Button>
        </div>
      </form>
    )}
  </Formik>
);

export default Form;
