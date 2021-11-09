import { Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@mui/styles';
import './loginStyle.css';
import { Paper } from '@mui/material';
import { loginInitialValues, loginFields } from './loginFields';
import Form from '../../components/Form';

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
          btnText="Login"
        />
        <div>
          {`don't have an account? Please `}
          <Link to="">Register</Link>
        </div>
      </Paper>
    </div>
  );
};

export default Login;
