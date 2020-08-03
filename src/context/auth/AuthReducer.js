import {
  SET_USER, SET_ERRORS, START_REQUEST, COMPLETE_REQUEST
} from './AuthActions';

export default (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
        isAuthenticated: false,
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
