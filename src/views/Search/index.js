import React, { useEffect, useContext } from 'react';

// components
import { Groceries } from '../../components/Groceries';
import { Loader } from '../../components/Loader';

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
      : <Groceries
        groceries={ groceries }
        title={ `Results for ${searchTerm}` }
      />
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
