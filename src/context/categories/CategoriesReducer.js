export default (state, action) => {
  switch (action.type) {
      case 'SET_CATEGORIES':
          return {
              ...state,
              categories: action.payload
          };
      case 'SET_CATEGORY':
          return {
              ...state,
              category: action.payload
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
