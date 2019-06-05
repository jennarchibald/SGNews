import React from 'react';
import MediaTitle from './MediaTitle';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import './EditorHomePage.css'

const EditorHomePage = (props) => {
  if (props.editor){
    return (
      <>
      <div>
      <MediaTitle title = "Hello, Editor!"/>
      </div>

      <div className = "editor-welcome">
      <p> What would you like to do today?</p>
      </div>

      <div className = "editor-buttons">
      <div className = "add-new">
      <Link to = "/editor/articles/new">
      <Button
      variant="contained"
      >
      ADD NEW ARTICLE
      </Button>
      </Link>
      </div>
      <div className = "add-new">
      <Link
      to = "/editor/journalists/new"
      >
      <Button
      variant="contained"
      className = "add-new">
      ADD NEW JOURNALIST
      </Button>
      </Link>
      </div>
      </div>

      <div className = "editor-login">
      <Button
      variant="contained"
      onClick = {props.logOut}>
      LOG OUT
      </Button>
      </div>

      </>
    )
  } else {
    return (

      <>
      <MediaTitle title = "Please Log In"/>
      <div className = "editor-login">
      <Button
      variant="contained"
      onClick = {props.logIn}>
      LOG IN
      </Button>
      </div>
      </>
    )
  }


}

export default EditorHomePage;
