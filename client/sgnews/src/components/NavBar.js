import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Link} from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component{

  render(){

    let initialPath = "/"
    if (this.props.editor){
      initialPath += "editor/"
    }

    return (
      <AppBar title="navbar">
      <div className = "MuiTabs-flexContainer NavBar-container">
      <Link className = "nav-link" to = "/">Home</Link>
      <Link className = "nav-link" to = {`${initialPath}articles`}>Articles</Link>
      <Link className = "nav-link" to = {`${initialPath}journalists`}>Journalists</Link>
      <Link className = "nav-link editor-link" to = "/editor">Editor Login</Link>
      </div>
      </AppBar>
    )
  }
}

export default NavBar;
