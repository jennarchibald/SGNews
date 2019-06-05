import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const TabLink = ({ onClick, href, isActive, label }) =>
    {
      return (
        <Tab
        label={label}
        onActive={onClick}
        />
      )
    }

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
