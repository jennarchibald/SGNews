import React from 'react';
import MediaTitle from './MediaTitle';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const EditorHomePage = (props) => {
  if (props.editor){
    return (
      <>
      <MediaTitle title = "Hello, Editor!"/>

      <div>
      <Button
      variant="contained"
      onClick = {props.logOut}>
      LOG OUT
      </Button>
      </div>

      <div>
      <Link to = "/editor/articles/new">
      <Button
      variant="contained">
      ADD NEW ARTICLE
      </Button>
      </Link>
      </div>

      <div>
      <Link to = "/editor/journalists/new">
      <Button
      variant="contained">
      ADD NEW JOURNALIST
      </Button>
      </Link>
      </div>

      </>
    )
  } else {
    return (

      <>
      <MediaTitle title = "Please Log In"/>
      <Button
      variant="contained"
      onClick = {props.logIn}>
      LOG IN
      </Button>
      </>
    )
  }


}

export default EditorHomePage;
