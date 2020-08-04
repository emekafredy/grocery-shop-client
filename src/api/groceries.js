import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();

export const getGroceriesAPI = () => {
  return axios.get(`${baseUrl}/groceries`);
}

export const searchByKeywordAPI = (searchTerm) => {
  return axios.get(`${baseUrl}/groceries?keyword=${searchTerm}`);
}
