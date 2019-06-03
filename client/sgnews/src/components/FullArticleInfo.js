import React, { Component } from 'react';

class FullArticleInfo extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    return (
      <div>
        <h1>{props.headline}</h1>
        <h4>{props.date.substring(0, 11)}</h4>
        <h3>{props.summary}</h3>
        <p>{props.storyText}</p>
        <h4>Artcle written by {props.journalist.name}</h4>
      </div>
      );
    }

}

export default MediaList;
