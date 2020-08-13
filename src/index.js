import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import Counters from './components/counters'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li> */}
              <button className='btn ml-6'>Navbar--></button>
              <Link to="/" className='btn btn-secondary ml-2'>Home  </Link>
            {/* </li> */}
            {/* <li> */}
              <Link to="/about" className='btn btn-secondary ml-3' >About  </Link>
            {/* </li>
            <li> */}
              <Link to="/users" className='btn btn-secondary ml-3' >Users  </Link>
            {/* </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <React.StrictMode>
             <Counters />
           </React.StrictMode>
          </Route>
        </Switch>
      </div>
    </Router>, document.getElementById('root')
  );
;
function Home() {
  return Counters;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
