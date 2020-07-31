import React, { useReducer, createContext } from 'react';
import CategoriesReducer from './CategoriesReducer';

export const CategoriesContext = createContext();

export const CategoriesProvider = props => {
    const initialState = {
        categories: [],
        category: {},
        loading: true
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

    const getCategory = async (id) => {
      try {
          dispatch({ type: 'START_REQUEST' });
          const res = await fetch(`http://localhost:8000/api/category/${id}`);
          const data = await res.json();
          dispatch({ type: 'COMPLETE_REQUEST' });
          dispatch({ type: 'SET_CATEGORY', payload: data });
      } catch (err) {
          console.log(err);
      }
    };
  
    return (
        <CategoriesContext.Provider
            value={{
                categories: state.categories.categories,
                getCategories: getCategories,
                category: state.category.category,
                getCategory: getCategory,
                loading: state.loading,
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    );
};
