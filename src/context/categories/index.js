import React, { useReducer, createContext } from 'react';
import CategoriesReducer from './CategoriesReducer';

export const CategoriesContext = createContext();

export const CategoriesProvider = props => {
    const initialState = {
        categories: [],
    };

    const [state, dispatch] = useReducer(CategoriesReducer, initialState);

    const getCategories = async () => {
        try {
            const res = await fetch('http://localhost:8000/api/categories');
            const data = await res.json();
            dispatch({ type: 'SET_CATEGORIES', payload: data });
        } catch (err) {
            console.log(err);
        }
    };
  
    return (
        <CategoriesContext.Provider
            value={{
                categories: state.categories.categories,
                getCategories: getCategories,
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    );
};
