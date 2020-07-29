import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { HomePage } from './view/HomePage/index';

import './App.scss';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
