import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();

export const registerUserAPI = (signUpData) => {
  return axios.post(`${baseUrl}/users/register`, signUpData);
}

export const loginUserAPI = (loginData) => {
  return axios.post(`${baseUrl}/users/login`, loginData);
}

export const getUserAPI = () => {
  return axios.get(`${baseUrl}/user`)
}
