import React, { useEffect, useContext } from 'react';
import { Link, Typography } from '@material-ui/core';

// components
import { Groceries } from '../../components/Groceries';
import { Loader } from '../../components/Loader';
import { BreadCrumbs } from '../../components/BreadCrumbs';

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
      : <div>
          <BreadCrumbs>
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography> Category </Typography>
            <Typography color="textPrimary"> { category?.name } </Typography>
          </BreadCrumbs>
          <Groceries groceries={ category?.groceries } />
        </div>
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
