import React, { useReducer, createContext } from 'react';
import CategoriesReducer from './CategoriesReducer';

// API
import { getCategoriesAPI, getCategoryAPI } from '../../services/api/categories';

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
      const response = await getCategoriesAPI();
      const { data } = response;
      dispatch({ type: 'SET_CATEGORIES', payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const getCategory = async (id) => {
    try {
        dispatch({ type: 'START_REQUEST' });
        const response = await getCategoryAPI(id);
        const { data } = response;
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
