import React from 'react';
import './App.css';
import Landing from "./components/Landing";
import Question from './components/Question';

import history from "./history";

import {
  Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router history={history}>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/game">
        <Question />
      </Route>
    </Router>
  );
}

export default App;
