import {
  SET_USER, SET_ERRORS, START_REQUEST, COMPLETE_REQUEST, SET_USER_PROFILE
} from './AuthActions';

export default (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
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
