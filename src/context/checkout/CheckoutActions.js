// Actions
export const SET_PAYMENT_SUCCESS = "SET_PAYMENT_SUCCESS";
export const START_REQUEST = "START_REQUEST";
export const COMPLETE_REQUEST = "COMPLETE_REQUEST";

// Action creators
export const setPaymentSuccess = (payment) => {
  return { type: SET_PAYMENT_SUCCESS, payload: payment };
};

export const startRequest = () => {
  return { type: START_REQUEST };
}

export const completeRequest = () => {
  return { type: COMPLETE_REQUEST };
}
