import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();

export const getCheckoutAPI = () => {
  return axios.get(`${baseUrl}/payments`);
}

export const makePaymentAPI = (paymentData) => {
  return axios.post(`${baseUrl}/charge`, paymentData);
}
