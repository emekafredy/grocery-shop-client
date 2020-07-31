import React, { useEffect, useContext } from 'react';

// components
import { Groceries } from '../../components/Groceries';
import { Loader } from '../../components/Loader';

// context
import { CategoriesContext, CategoriesProvider } from '../../context/categories';

export const GroceriesCategory = ({ id }) => {
  const categoriesContext = useContext(CategoriesContext);
  const  { getCategory, category, loading } = categoriesContext;

  useEffect(() => {
    getCategory(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
     {
      loading ? <Loader /> 
      : <Groceries
        groceries={ category?.groceries }
        title={ category?.name }
      />
     }
    </div>
  );
};


export const Category = (props) => {
  const { id } =  props.match.params;

  return (
    <CategoriesProvider>
      <GroceriesCategory id={id}/>
    </CategoriesProvider>
  );
};
