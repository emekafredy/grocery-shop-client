import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from '../components/NavBar';
// import { PrivateRoute } from '../components/PrivateRoute';

import { HomePage } from './HomePage';
import { Category } from './Category';
import { Search } from './Search';
import { Register } from './Auth/Register';
import { Login } from './Auth/Login';


export const RootView = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/category/:id" component={ Category } />
        <Route exact path="/search/:keyword" component={ Search } />
        <Route exact path="/auth/register" component={ Register } />
        <Route exact path="/auth/login" component={ Login } />
      </Switch>
    </Router>
  );
}
