export default (state, action) => {
  switch (action.type) {
    case 'SET_PAYMENT_SUCCESS':
      return {
          ...state,
          payment: action.payload
      };
    case 'START_REQUEST':
      return {
          ...state,
          loading: true
      };
    case 'COMPLETE_REQUEST':
      return {
          ...state,
          loading: false
      };
    default:
      return state;
  }
};
