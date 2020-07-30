import React, { useReducer, createContext } from 'react';
import GroceriesReducer from './GroceriesReducer';

export const GroceriesContext = createContext();

export const GroceriesProvider = props => {
    const initialState = {
        groceries: [],
        loading: true
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
  
    return (
        <GroceriesContext.Provider
            value={{
                groceries: state.groceries.groceries,
                loading: state.loading,
                getGroceries: getGroceries,
            }}
        >
            {props.children}
        </GroceriesContext.Provider>
    );
};
