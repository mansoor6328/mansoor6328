import { Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@mui/styles';
import './loginStyle.css';
import { Paper } from '@mui/material';
import axios from 'axios';
import { loginInitialValues, loginFields } from './loginFields';
import Form from '../../components/Form';
import axiosInstance from '../../utils/axiosInstance';
import { storeUserDetails } from '../../utils';

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
      const res = await axiosInstance.post('login', values);

      storeUserDetails(res);

      // const res = await fetch('http://localhost:3000/login', {
      //   method: 'POST',
      //   body: JSON.stringify(values),
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Accept: 'application/json',
      //   },
      // });

      // const data = await res.json();
      // if (!res.ok) throw new Error(data);

      actions.resetForm();
      history.go(0);
    } catch (error) {
      actions.setErrors({ serverError: error });
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
