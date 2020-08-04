import React from 'react';

import './ErrorsList.scss';

export const ErrorsList = ({ errors }) => {
  return (
    <div className="error-list__container">
      <ul>
        {
          errors.map(error => {
            return ( <li key={errors.indexOf(error)}> { error.msg } </li> )
          })
        }
      </ul>
    </div>
  )
}
