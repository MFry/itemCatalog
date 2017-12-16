import React from 'react';
import logo from './logo.svg';


const Navbar = () => (
  <nav>
    <div className="nav-wrapper container">
      <a href="/" className="brand-logo"><img src={logo} className="App-logo" alt="logo" /></a>
      <ul id="nav-mobile" className="right">
        <li><a href="collapsible.html">Login</a></li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
