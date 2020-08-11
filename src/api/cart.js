import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();

export const generateCartIdAPI = () => {
  return axios.get(`${baseUrl}/shopping-cart/generateId`);
}

export const addToCartAPI = (groceryId, data) => {
  return axios.post(`${baseUrl}/shopping-cart/${groceryId}`, data);
}

export const getCartAPI = (cartId) => {
  return axios.get(`${baseUrl}/shopping-cart/${cartId}`);
}

export const updateItemQuantityAPI = (id, cartId, quantity) => {
  return axios.put(`${baseUrl}/shopping-cart/${id}/${cartId}`, { quantity });
}

export const deleteCartItemAPI = (id, cartId) => {
  return axios.delete(`${baseUrl}/shopping-cart/${id}/${cartId}`);
}
