import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { HomePage } from './view/HomePage/index';

import { GroceriesProvider } from './context/goceries';

import './App.scss';

function App() {
  return (
    <GroceriesProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </GroceriesProvider>
  );
}

export default App;
