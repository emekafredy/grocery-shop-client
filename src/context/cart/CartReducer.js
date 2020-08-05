import {
  SET_CART, SET_ERRORS, START_REQUEST, COMPLETE_REQUEST
} from './CartActions';

export default (state, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case START_REQUEST:
      return {
          ...state,
        loading: true
      };
    case COMPLETE_REQUEST:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
