import React from 'react';
import './App.css';
import Landing from "./components/Landing";
import Question from './components/Question';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
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
