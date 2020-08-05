import React from 'react';
import { Breadcrumbs } from '@material-ui/core';

import './BreadCrumbs.scss';

export const BreadCrumbs = ({ children }) => {
  return (
    <div className="breadcrumbs-container">
      <Breadcrumbs aria-label="breadcrumb">
        { children }
      </Breadcrumbs>
    </div>
  )
}
