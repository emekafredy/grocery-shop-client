import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './NavBar.scss';
import { Categories } from '../Categories';

import { CategoriesProvider } from '../../context/categories';
 
export const NavBar = (props) => {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();

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
            <Link
              to='/'
              className="navbar__menu-list-item-link"
            >
              <div className="navbar__menu-item-title">
                <i className="cart arrow down icon"></i>
                Cart
              </div>
            </Link>
          </li>
          <li className="navbar__menu-list-item">
            <Link
              to='/'
              className="navbar__menu-list-item-link"
            >
              <div className="navbar__menu-item-title"> Register </div> 
            </Link>
          </li>
          <li className="navbar__menu-list-item">
            <Link
              to='/'
              className="navbar__menu-list-item-link"
            >
              <div className="navbar__menu-item-title"> Login </div> 
            </Link>
          </li>
          {/* <li className="navbar__menu-list-item navbar__profile">
            <Link
              to='/'
              className="navbar__menu-list-item-link"
            >
              <div className="navbar__menu-item-title">
                Hi, Emeka <i className="angle down icon"></i>
              </div> 
            </Link>
            <ul className="navbar__profile-dropdown">
              <li><Link to="/">Profile</Link></li>
              <li><Link to="/">Orders</Link></li>
              <li><Link to="/">Logout</Link></li>
            </ul>
          </li> */}
        </ul>
      </nav> <br/><br/><br/>
    </CategoriesProvider>
  )
}
