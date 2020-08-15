import axios from 'axios';

export const setToken = (token) => {
  if (token) {
    axios.defaults.headers['authorization'] = token
  } else {
    delete axios.defaults.headers['authorization'];
  }
}

export const numberSeperator = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
