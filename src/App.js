import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { HomePage } from './views/HomePage';
import { Category } from './views/Category';
import { Search } from './views/Search';

import { GroceriesProvider } from './context/goceries';

import './App.scss';

function App() {
  return (
    <GroceriesProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/category/:id" component={Category} />
          <Route exact path="/search/:keyword" component={Search} />
        </Switch>
      </Router>
    </GroceriesProvider>
  );
}

export default App;
