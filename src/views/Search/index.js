import React, { useEffect, useContext } from 'react';
import { Link, Typography } from '@material-ui/core';


// components
import { Groceries } from '../../components/Groceries';
import { Loader } from '../../components/Loader';
import { BreadCrumbs } from '../../components/BreadCrumbs';

// context
import { GroceriesContext } from '../../context/goceries';

export const SearchGroceries = ({ searchTerm }) => {
  const groceriesContext = useContext(GroceriesContext);
  const  { searchByKeyword, groceries, loading } = groceriesContext;

  useEffect(() => {
    searchByKeyword(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div>
     {
      loading ? <Loader /> 
      : <div>
          <BreadCrumbs>
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography> Search </Typography>
            <Typography color="textPrimary"> { searchTerm } </Typography>
          </BreadCrumbs>
          <Groceries groceries={ groceries } />
        </div>
     }
    </div>
  );
};

export const Search = (props) => {
  const { keyword } =  props.match.params;

  return (
    <SearchGroceries searchTerm={keyword}/>
  );
};
