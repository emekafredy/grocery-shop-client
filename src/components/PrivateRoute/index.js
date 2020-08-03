import React, { useContext, useEffect, useRef } from 'react';
import jwt_decode from 'jwt-decode';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from '../../context/auth/index';
import { setToken } from '../../utils/setToken';

export const PrivateRoute = ({ component: ComposedComponent }) => {
  const authContext = useContext(AuthContext);
  const  { setCurrentUser, user } = authContext;
  const isAuthenticated = useRef(false);

  useEffect(() => {
    if (!!localStorage.jwtToken) {
      setToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);
      setCurrentUser(decoded);
  
      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        isAuthenticated.current = false;
      } else {
        isAuthenticated.current = true;
        console.log('helloooooooo', isAuthenticated);
      }
    }  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // if (!!localStorage.jwtToken) {
  //   setToken(localStorage.jwtToken);
  //   const decoded = jwt_decode(localStorage.jwtToken);
  //   setCurrentUser(decoded);

  //   setAuth(true);
  // } 
  console.log('DECODED 2', isAuthenticated);

  return (
    <Route
      render={ props => (
        isAuthenticated.current
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
