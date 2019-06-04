import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  let initialPath = "/"
  if (props.editor){
    initialPath += "editor/"
  }
  return (
    <ul className = "nav-bar">
      <li><Link to = "/">Home</Link></li>
      <li><Link to = {`${initialPath}articles`}>Articles</Link></li>
      <li><Link to = {`${initialPath}journalists`}>Journalists</Link></li>
      <li><Link to = "/editor">Editor Login</Link></li>
    </ul>
  )
}

export default NavBar;
