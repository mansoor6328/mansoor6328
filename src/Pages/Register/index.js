import React from 'react';
import { Paper } from '@mui/material';
import { registerInitialValues, registerFields } from './registerFields';
import Form from '../../components/Form';

const Register = ({ history }) => {
  const onRegister = async (values, actions) => {
    const { confirmPassword, ...rest } = values;
    try {
      const res = await fetch('http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify(rest),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      console.warn(res);

      const data = await res.json();
      if (!res.ok) throw new Error(data);

      actions.resetForm();
      history.replace('/');
    } catch (error) {
      console.warn(error.message);
      actions.setErrors({ serverError: error.message });
    }
  };

  const validateRegisterForm = (values) => {
    const errors = {};
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Password and confirm password should match.';
    }
    return errors;
  };

  return (
    <div className="login-container">
      <Paper
        elevation={3}
        style={{
          flex: 1,
          maxWidth: 500,
          padding: 20,
        }}
      >
        <Form
          validate={validateRegisterForm}
          initialValues={registerInitialValues}
          onSubmit={onRegister}
          fields={registerFields}
          btnText="Register"
        />
      </Paper>
    </div>
  );
};

export default Register;
