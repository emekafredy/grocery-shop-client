import React from 'react';

import { Banner } from '../../components/Banner/index';
import { Groceries } from '../../components/Groceries';

export const HomePage = () => {
  return (
    <div>
     <Banner />
     <Groceries />
    </div>
  );
};
