import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

// context
import { CategoriesContext } from '../../context/categories';

export const Categories = () => {
  const categoriesContext = useContext(CategoriesContext);
  const  { getCategories, categories } = categoriesContext;

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className="navbar__profile-dropdown">
      {
        categories?.map(category => {
          return <li key={ category.id }><Link to="/"> { category.name } </Link></li>
        })
      }
    </ul>
  );
};
