// Actions
export const SET_CART = "SET_CART";
export const SET_ERRORS = "SET_ERRORS";
export const START_REQUEST = "START_REQUEST";
export const COMPLETE_REQUEST = "COMPLETE_REQUEST";

// Action creators
export const setCart = (cart) => {
  return { type: SET_CART, payload: cart };
}

export const setErrors = (errors) => {
  return { type: SET_ERRORS, payload: errors };
}

export const startRequest = () => {
  return { type: START_REQUEST };
}

export const completeRequest = () => {
  return { type: COMPLETE_REQUEST };
}
