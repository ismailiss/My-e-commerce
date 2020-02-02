import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Todo from '../pages/todoapp';

function About() {
  return <h2>About</h2>;
}
export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Todo} />
        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
  );
};
