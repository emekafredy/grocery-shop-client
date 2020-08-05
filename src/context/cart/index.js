import React, { useReducer, createContext } from 'react';

import CartReducer from './CartReducer';
import { setCart, setErrors, startRequest, completeRequest } from './CartActions';

// API
import { generateCartIdAPI, addToCartAPI, getCartAPI } from '../../api/cart';

export const CartContext = createContext();

export const CartProvider = props => {
  const initialState = {
    cart: {},
    errors: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const getCart = async () => {
    try {
      dispatch(startRequest());

      const cartId = await localStorage.getItem('cartId');
      if (!cartId) {
        const generateCartResponse = await generateCartIdAPI();
        localStorage.setItem('cartId', generateCartResponse.data.cartId);
      }

      const response = await getCartAPI(cartId);
      const { data } = response;
      
      dispatch(setCart(data));
      dispatch(completeRequest());
    } catch (err) {
      dispatch(setErrors(err.response.data));
    }
  };

  const addToCart = async (cartData) => {
    try {
      dispatch(startRequest());
      const response = await addToCartAPI(cartData);
      const { data } = response;

      dispatch(setCart(data));
      dispatch(completeRequest());
    } catch (err) {
      dispatch(setErrors(err.response.data));
    }
  };

  return (
    <CartContext.Provider
      value={{
        getCart: getCart,
        addToCart: addToCart,
        errors: state.errors.errors,
        loading: state.loading,
        cart: state.cart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
