import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';
import { Categories } from '../Categories';

import { CategoriesProvider } from '../../context/categories';
 
export const NavBar = () => {
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
                <input type="text" className="navbar__search-input" placeholder="What are you looking for?" />
                <button type="submit" className="navbar__search-button"> Search </button>
              </div>
            </div>
          </li>
          <li className="navbar__menu-list-item navbar__category">
            <Link
              to='/'
              className="navbar__menu-list-item-link"
            >
              <div className="navbar__menu-item-title navbar__category-title">
               Categories <i className="angle down icon"></i>
              </div> 
            </Link>
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
