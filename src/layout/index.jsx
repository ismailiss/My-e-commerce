import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Todo from '../pages/todoapp';
import OwnerList from '../containers/owner/ownerList/ownerList';

function About() {
  return <h2>About</h2>;
}
export default () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/owner-list">owner-list</Link>
            </li>
          </ul>
        </nav>
        
      <Switch>
        <Route exact path='/' component={Todo} />
        <Route exact path='/about'>
          <About />
        </Route>
        <Route path="/owner-list" component={OwnerList} />

      </Switch>     
       </div>
    </Router>
  );
};
