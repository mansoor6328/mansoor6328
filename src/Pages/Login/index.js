import { Formik, Field } from 'formik';
import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './loginStyle.css';
import { Paper } from '@mui/material';
import { loginInitialValues, loginFields } from './loginFields';
import Form from '../../components/Form';

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
});

const Login = () => {
  const classes = useStyles();
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
          onSubmit={(value) => {
            console.log(value);
          }}
          fields={loginFields}
        />
      </Paper>
    </div>
  );
};

export default Login;
