import React, { useReducer, createContext } from 'react';
import CheckoutReducer from './CheckoutReducer';

// API
import { getCheckoutAPI, makePaymentAPI } from '../../api/checkout';

export const CheckoutContext = createContext();

export const CheckoutProvider = props => {
  const initialState = {
    payment: {},
    loading: true
  };

  const [state, dispatch] = useReducer(CheckoutReducer, initialState);

  const getCheckout = async () => {
    try {
      await getCheckoutAPI();
      dispatch({ type: 'COMPLETE_REQUEST' });
    } catch (err) {
      console.log(err);
    }
  };

  const makePayment = async (paymentData) => {
    try {
        dispatch({ type: 'START_REQUEST' });
        const response = await makePaymentAPI(paymentData);
        const { data } = response;
        dispatch({ type: 'COMPLETE_REQUEST' });
        dispatch({ type: 'SET_PAYMENT_SUCCESS', payload: data });
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        getCheckout: getCheckout,
        makePayment: makePayment,
        loading: state.loading,
        payment: state.payment
      }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
};
