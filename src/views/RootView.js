import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from '../components/NavBar';
import { PrivateRoute } from '../components/PrivateRoute';

import { HomePage } from './HomePage';
import { Category } from './Category';
import { Search } from './Search';
import { Register } from './Auth/Register';
import { Login } from './Auth/Login';
import { GroceryDetails } from './GroceryDetails';
import { ShoppingCart } from './ShoppingCart';
import { UserProfile } from './UserProfile';
import { Checkout } from './Checkout';


export const RootView = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/category/:id" component={ Category } />
        <Route exact path="/search/:keyword" component={ Search } />
        <Route exact path="/grocery/:id" component={ GroceryDetails } />
        <Route exact path="/cart" component={ ShoppingCart } />
        <Route exact path="/auth/register" component={ Register } />
        <Route exact path="/auth/login" component={ Login } />
        <PrivateRoute exact path="/user" component={ UserProfile } />
        <PrivateRoute exact path="/checkout" component={ Checkout } />
      </Switch>
    </Router>
  );
}
