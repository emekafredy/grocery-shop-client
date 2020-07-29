import React from 'react';
import { Link } from 'react-router-dom';

import './Banner.scss';

export const Banner = () => {
  return (
    <div>
      <div className="banner banner__hero">
        <div className="banner__content">
          <Link to='/'>Shop Now</Link>
        </div>
      </div>
    </div>
  )
}
