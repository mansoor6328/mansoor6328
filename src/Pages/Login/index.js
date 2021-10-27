import { Formik } from 'formik';
import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './loginStyle.css';
import { Paper } from '@mui/material';

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
        <Formik>
          {({}) => (
            <form>
              <div
                style={{
                  padding: 10,
                }}
              >
                <TextField
                  variant="outlined"
                  label="Username"
                  id="username"
                  fullWidth
                />
              </div>
              <div
                style={{
                  padding: 10,
                }}
              >
                <TextField
                  variant="outlined"
                  label="Password"
                  id="password"
                  type="password"
                  fullWidth
                />
              </div>
              <div
                style={{
                  padding: 10,
                }}
              >
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Paper>
    </div>
  );
};

export default Login;
