import React, { useReducer, createContext } from 'react';
import GroceriesReducer from './GroceriesReducer';

// API
import { getGroceriesAPI, searchByKeywordAPI } from '../../api/groceries';

export const GroceriesContext = createContext();

export const GroceriesProvider = props => {
  const initialState = {
    groceries: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(GroceriesReducer, initialState);

  const getGroceries = async () => {
    try {
      dispatch({ type: 'START_REQUEST' });
      const response = await getGroceriesAPI();
      const { data } = response;
      dispatch({ type: 'COMPLETE_REQUEST' });
      dispatch({ type: 'SET_GROCERIES', payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const searchByKeyword = async (searchTerm) => {
    try {
      dispatch({ type: 'START_REQUEST' });
      const response = await searchByKeywordAPI(searchTerm);
      const { data } = response
      dispatch({ type: 'COMPLETE_REQUEST' });
      dispatch({ type: 'SET_SEARCH_RESULT', payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GroceriesContext.Provider
      value={{
        groceries: state.groceries.groceries,
        loading: state.loading,
        getGroceries: getGroceries,
        searchByKeyword: searchByKeyword
      }}
    >
      {props.children}
    </GroceriesContext.Provider>
  );
};
