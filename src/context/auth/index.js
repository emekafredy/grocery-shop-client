import React, { useReducer, createContext } from 'react';
import jwt_decode from 'jwt-decode';

import AuthReducer from './AuthReducer';
import { setUser, setErrors, startRequest, completeRequest, logout } from './AuthActions';

// API
import { registerUserAPI, loginUserAPI } from '../../api/auth';
import { setToken } from '../../utils/setToken';

export const AuthContext = createContext();

export const AuthProvider = props => {
  const initialState = {
    user: {},
    errors: [],
    loading: true,
    isAuthenticated: false,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = async (registerData) => {
    try {
      dispatch(startRequest());
      const response = await registerUserAPI(registerData);
      const { data } = response;

      await localStorage.setItem('jwtToken', data.token);
      setToken(data.token);

      const decoded = await jwt_decode(data.token);
      
      dispatch(completeRequest());
      dispatch(setUser(decoded));
    } catch (err) {
      dispatch(setErrors(err.response.data));
    }
  };

  const loginUser = async (loginData) => {
    try {
        dispatch({ type: 'START_REQUEST' });
        const response = await loginUserAPI(loginData);
        const { data } = response;
        dispatch({ type: 'COMPLETE_REQUEST' });
        dispatch({ type: 'SET_USER', payload: data });
    } catch (err) {
        console.log(err);
    }
  };

  const setCurrentUser = async (decoded) => {
    dispatch(setUser(decoded));
  }

  return (
    <AuthContext.Provider
      value={{
        registerUser: registerUser,
        loginUser: loginUser,
        user: state.user,
        errors: state.errors.errors,
        loading: state.loading,
        setCurrentUser: setCurrentUser,
        isAuthenticated: state.isAuthenticated
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
