import React from 'react';
import '../css/App.css';
import {Link} from 'react-router-dom';

import Logo from './Logo';

function Nav() {
  // const navStyle = {
  //   color: 'white'
  // };

  return (
    <>
    <a href="https://lexaugur.com" className="logo">
      <Logo />
    </a>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <a className="button" href="https://portal.lexaugur.com">Log in</a>
    </>
  );
}

export default Nav;
