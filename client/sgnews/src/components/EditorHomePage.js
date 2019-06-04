import React from 'react';
import MediaTitle from './MediaTitle';

const EditorHomePage = (props) => {
  if (props.editor){
    return (
      <>
      <MediaTitle title = "Hello, Editor!"/>
      <button
      onClick = {props.logOut}>
      LOG OUT
      </button>
      </>
    )
  } else {
    return (

      <>
      <MediaTitle title = "Please Log In"/>
      <button
      onClick = {props.logIn}>
      LOG IN
      </button>
      </>
    )
  }


}

export default EditorHomePage;
