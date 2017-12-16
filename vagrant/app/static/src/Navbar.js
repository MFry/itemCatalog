import React from 'react';
import logo from './logo.svg';


const Navbar = () => (
  <nav>
    <div className="nav-wrapper container">
      <a href="/" className="brand-logo"><img src={logo} className="App-logo" alt="logo" /></a>
      <ul id="nav-mobile" className="right">
        <li><button className="waves-effect waves-light btn">Login</button></li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
