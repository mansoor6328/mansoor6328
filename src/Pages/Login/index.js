import { Formik } from 'formik';
import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './loginStyle.css';

const useStyles = makeStyles({
  root: {
    padding: '0 30px',
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <Formik>
        {({}) => (
          <form>
            <TextField
              className={classes.root}
              variant="outlined"
              label="Username"
              id="username"
              style={{ margin: 10 }}
            />
            <TextField
              className={classes.root}
              variant="outlined"
              label="Password"
              id="password"
              type="password"
            />
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
