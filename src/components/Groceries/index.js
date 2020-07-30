import React from 'react';
import { Grid } from '@material-ui/core';

// components
import { Grocery } from '../Grocery/index';

import './Groceries.scss';

export const Groceries = ({ groceries, title }) => {
  return (
    <div className="groceries__container">
      <div className="groceries__header">
        <h3> { title } </h3>
        <hr />
      </div>
  
      <Grid container spacing={3}>
        {
          groceries.groceries && groceries.groceries.map(grocery => {
            return (
              <Grocery key={grocery.id} grocery={grocery}/>
            );
          })
        }
      </Grid>
    </div>
  );
};
