import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Link} from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component{

  render(){

    let id = "";

    let initialPath = "/"

    if (this.props.editor){
      initialPath += "editor/"
      id += "private-nav"
    } else {
      id += "public-nav"
    }

    return (
      <AppBar title="">
      <div className = "MuiTabs-flexContainer NavBar-container" id = {id}>
      <Link className = "nav-link" to = "/">
        <img className="nav-logo" src="/images/SGNews1.png" alt="TitleLogo"></img>
      </Link>
      <Link className = "nav-link" to = {`${initialPath}articles`}>Articles</Link>
      <Link className = "nav-link" to = {`${initialPath}journalists`}>Journalists</Link>
      <Link className = "nav-link editor-link" to = "/editor">Editor Portal</Link>
      </div>
      </AppBar>
    )
  }
}

export default NavBar;
