import React, { useReducer, createContext } from 'react';
import GroceriesReducer from './GroceriesReducer';

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
            const res = await fetch('http://localhost:8000/api/groceries');
            const data = await res.json();
            dispatch({ type: 'COMPLETE_REQUEST' });
            dispatch({ type: 'SET_GROCERIES', payload: data });
        } catch (err) {
            console.log(err);
        }
    };

    const searchByKeyword = async (searchTerm) => {
      try {
          dispatch({ type: 'START_REQUEST' });
          const res = await fetch(`http://localhost:8000/api/groceries?keyword=${searchTerm}`);
          const data = await res.json();
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
