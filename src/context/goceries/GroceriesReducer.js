export default (state, action) => {
  switch (action.type) {
      case 'SET_GROCERIES':
          return {
              ...state,
              groceries: action.payload
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
