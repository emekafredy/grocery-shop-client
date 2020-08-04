import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();

export const getCategoriesAPI = () => {
  return axios.get(`${baseUrl}/categories`);
}

export const getCategoryAPI = (id) => {
  return axios.get(`${baseUrl}/category/${id}`);
}
