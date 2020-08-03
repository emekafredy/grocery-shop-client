import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const setToken = (token) => {
  if (token) {
    axios.defaults.headers['authorization'] = token
  } else {
    delete axios.defaults.headers['authorization'];
  }
}

export const isAuthenticated = () => {
  if (localStorage.jwtToken) {
    const decoded = jwt_decode(localStorage.jwtToken);
    
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
