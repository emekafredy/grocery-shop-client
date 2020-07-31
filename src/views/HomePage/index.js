import React, { useEffect, useContext } from 'react';

// components
import { Banner } from '../../components/Banner/index';
import { Groceries } from '../../components/Groceries';
import { Loader } from '../../components/Loader';

// context
import { GroceriesContext } from '../../context/goceries';

export const HomePage = () => {
  const groceriesContext = useContext(GroceriesContext);
  const  { getGroceries, groceries, loading } = groceriesContext;

  useEffect(() => {
    getGroceries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
     <Banner />
     {
      loading ? <Loader /> 
      : <Groceries
        groceries={ groceries }
        title="Featured Products"
      />
     }
    </div>
  );
};
