import React from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import '../auth.scss';

export const Login = () => {
  return (
    <div className="auth__container">
      <div className="auth__header">
        <h1> Login </h1>
        <hr />
      </div>

      <form className="auth__form" noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField className="auth__input-field" required id="standard-required" label="Email" />
          </Grid>
          <Grid item xs={12}>
            <TextField className="auth__input-field" required id="standard-required" label="Password" />
          </Grid>
          <Grid item xs={12}>
            <Button className="auth__submit-btn" variant="contained"> Login </Button>
          </Grid>
        </Grid>
        <div className="auth__redirect">
          Not yet registered? <Link to="/auth/register"> Create an account </Link>
        </div>
      </form>
    </div>
  )
}
