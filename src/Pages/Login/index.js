import { Formik, Field } from 'formik';
import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './loginStyle.css';
import { Paper } from '@mui/material';
import { loginInitialValues, loginFields } from './loginFields';
import Form from '../../components/Form';

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
});

const Login = ({ history }) => {
  const classes = useStyles();

  const onLogin = async (values, actions) => {
    console.warn(actions);
    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      await wait(3000);
      const data = await res.json();
      if (!res.ok) throw new Error(data);

      actions.resetForm();
      history.replace('/');
    } catch (error) {
      actions.setErrors({ serverError: error.message });
    }
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
          initialValues={loginInitialValues}
          onSubmit={onLogin}
          fields={loginFields}
          btnText="Register"
        />
      </Paper>
    </div>
  );
};

export default Login;
