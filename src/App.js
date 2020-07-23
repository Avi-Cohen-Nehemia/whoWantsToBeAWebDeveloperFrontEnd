import React from 'react';
import './App.css';
import Landing from "./components/Landing";
import Question from './components/Question';
import FourOhFour from './components/FourOhFour';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/game">
          <Question />
        </Route>
        <FourOhFour/>
      </Switch>
    </Router>
  );
}

export default App;
