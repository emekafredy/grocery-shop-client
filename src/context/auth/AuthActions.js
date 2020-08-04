// Actions
export const SET_USER = "SET_USER";
export const SET_ERRORS = "SET_ERRORS";
export const START_REQUEST = "START_REQUEST";
export const COMPLETE_REQUEST = "COMPLETE_REQUEST";

// Action creators
export const setUser = (user) => {
  return { type: SET_USER, payload: {user} };
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
