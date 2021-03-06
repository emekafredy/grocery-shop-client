import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

// component
import { Categories } from '../Categories';

// context
import { CategoriesProvider } from '../../context/categories';
import { AuthContext } from '../../context/auth';
import { CartContext } from '../../context/cart/index';

import './NavBar.scss';
 
export const NavBar = () => {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();
  const { user, logoutUser } = useContext(AuthContext);
  const { cart, getCart } = useContext(CartContext);

  const handleGroceriesSearch = (event) => {
    event.preventDefault();
    history.push(`/search/${keyword}`)
  }

  const handleOnChange = (event) => {
    setKeyword(event.target.value)
  }

  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      history.push(`/search/${keyword}`)
    }
  }

  const logUserOut = () => {
    logoutUser()
  }

  const profileNav = (
    <li className="navbar__menu-list-item navbar__profile">
      <span className="navbar__menu-list-item-link">
        <div className="navbar__menu-item-title">
          Hi, {user?.firstName} <i className="angle down icon"></i>
        </div> 
      </span>
      <ul className="navbar__profile-dropdown">
        <li><Link to="/user">Profile</Link></li>
        <li><Link to="/">Orders</Link></li>
        <li><Link to="/" onClick={() => logUserOut()}>Logout</Link></li>
      </ul>
    </li>
  );
  
  const authNav = (
    <>
    <li className="navbar__menu-list-item">
      <Link to='/auth/register' className="navbar__menu-list-item-link">
        <div className="navbar__menu-item-title"> Register </div> 
      </Link>
    </li>
    <li className="navbar__menu-list-item">
      <Link to='/auth/login' className="navbar__menu-list-item-link">
        <div className="navbar__menu-item-title"> Login </div> 
      </Link>
    </li>
    </>
  ); 
  
  useEffect(() => {
    getCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.totalItems]);

  return (
    <CategoriesProvider>
      <nav className="navbar">
        <Link to='/' className="navbar__brand-text">Grocery Shop</Link>
        <input className="navbar__menu-btn" type="checkbox" id="navbar__menu-btn" />
        <label className="navbar__menu-icon" htmlFor="navbar__menu-btn"><span className="navbar__navicon"></span></label>
        <ul className="navbar__menu-list">
          <li className="navbar__menu-list-item">
            <div className="navbar__search-bar-container">
              <div className="navbar__search-bar">
                <input
                  type="text"
                  className="navbar__search-input"
                  aria-label="search for groceries"
                  placeholder="Which product are you looking for?"
                  onChange={(event) => handleOnChange(event)}
                  onKeyDown={(event) => handleOnKeyDown(event) }
                />
                <button 
                  className="navbar__search-button"
                  onClick={(event) => handleGroceriesSearch(event)}
                > 
                  Search 
                </button>
              </div>
            </div>
          </li>
          <li className="navbar__menu-list-item navbar__category">
            <span className="navbar__menu-list-item-link">
              <div className="navbar__menu-item-title navbar__category-title">
               Categories <i className="angle down icon"></i>
              </div> 
            </span>
            <Categories />
          </li>
          <li className="navbar__menu-list-item">
            <Link to='/cart' className="navbar__menu-list-item-link">
              <div className="navbar__menu-item-title">
                <i className="cart arrow down icon"></i>
                Cart { cart.totalItems ? <span className="navbar__total-cart-items"> { cart.totalItems } </span> : '' }
              </div>
            </Link>
          </li>
          { user?.id ? profileNav : authNav }
        </ul>
      </nav> <br/><br/><br/>
    </CategoriesProvider>
  )
}
