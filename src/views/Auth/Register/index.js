import React, { useContext, useState } from 'react';
import { TextField, Grid, Button, CircularProgress } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

// context
import { AuthContext } from '../../../context/auth/index';

// components
import { ErrorsList } from '../../../components/ErrorsList/index';

import '../auth.scss';

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const authContext = useContext(AuthContext);
  const  { user, registerUser, errors, loading } = authContext;

  if (user.id) history.push('/');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    registerUser({ name, email, password, confirmPassword })
  }

  return (
    <div className="auth__container">
      <div className="auth__header">
        <h1> Register </h1>
        <span> Fields marked with * are required </span>
        <hr />
      </div>

      { errors?.length > 0 ? <ErrorsList errors={errors}/> : '' }
      
      <form className="auth__form" noValidate autoComplete="off" onSubmit={(e) => handleFormSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              className="auth__input-field"
              required
              label="Name"
              helperText="Incorrect entry."
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="auth__input-field"
              required
              label="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="auth__input-field"
              required
              label="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="auth__input-field"
              required
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="auth__submit-btn"
              variant="contained"
              type="submit"
              disabled={loading}
            > 
              { loading ? <CircularProgress className="auth__submit-loader" size={20} /> : 'Register' }
            </Button>
          </Grid>
        </Grid>
        <div className="auth__redirect">
          Already registered? please <Link to="/auth/login"> Log in </Link>
        </div>
      </form>
    </div>
  )
}
