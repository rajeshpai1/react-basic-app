import React from 'react';
import { Link } from 'react-router-dom';
import * as all from '../routesMap'

const Navbar = (props) => (
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <img src="https://ca.slack-edge.com/THPBAEFKQ-UML7PUZ0C-cc6d94c99df8-512" className="rounded-circle" width="65px"/>
      <li class="nav-item active">
        <a class="nav-link ml-2 mt-2 font-weight-bold	" href={all.HomeRoute}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mt-2 font-weight-bold " href={all.AboutRoute}>About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mt-2 font-weight-bold" href={all.UserRoute}>User</a>
      </li>
    </ul>
  </div>
   <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>
);

export default Navbar;
