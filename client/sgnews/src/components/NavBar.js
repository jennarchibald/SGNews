import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './NavBar.css';

const NavBar = (props) => {
  let initialPath = "/"
  if (props.editor){
    initialPath += "editor/"
  }

  return (
    <AppBar title="navbar">
      <Tabs value={false}>
        <Tab label = "Home" href = "/"/>
        <Tab label = "Articles" href = {`${initialPath}articles`}/>
        <Tab label = "Journalists" href = {`${initialPath}journalists`}/>
        <Tab label = "Editor login" href = "/editor"/>
      </Tabs>
    </AppBar>
  )
}

export default NavBar;
