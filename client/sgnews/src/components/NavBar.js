import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <ul className = "nav-bar">
      <li><Link to = "/">Home</Link></li>
      <li><Link to = "/articles">Articles</Link></li>
      <li><Link to = "/journalists">Journalists</Link></li>
      <li><Link to = "/editor">Editor Page</Link></li>
    </ul>
  )
}

export default NavBar;
