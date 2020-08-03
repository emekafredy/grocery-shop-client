import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { PrivateRoute } from './components/PrivateRoute/index';

import { HomePage } from './views/HomePage';
import { Category } from './views/Category';
import { Search } from './views/Search';
import { Register } from './views/Auth/Register';
import { Login } from './views/Auth/Login';

import { GroceriesProvider } from './context/goceries';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <AuthProvider>
      <GroceriesProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <PrivateRoute exact path="/category/:id" component={ Category } />
            <Route exact path="/search/:keyword" component={ Search } />
            <Route exact path="/auth/register" component={ Register } />
            <Route exact path="/auth/login" component={ Login } />
          </Switch>
        </Router>
      </GroceriesProvider>
    </AuthProvider>
  );
}

export default App;
