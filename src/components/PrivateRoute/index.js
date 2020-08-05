import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

// context
import { AuthContext } from '../../context/auth';

export const PrivateRoute = ({ component: ComposedComponent }) => {
  const authContext = useContext(AuthContext);
  const  { user } = authContext;

  return (
    <Route
      render={ props => (
        user.id
          ? <ComposedComponent {...props} />
          : <Redirect to={{
              pathname: '/auth/login',
              state: { from: props.location }
            }}
            />
      )}
    />
  )
}
