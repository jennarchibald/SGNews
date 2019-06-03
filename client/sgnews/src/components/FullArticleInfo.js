import React, { Component } from 'react';

class FullArticleInfo extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    return (
      <div>
        <h1>{props.article.headline}</h1>
        <h4>{props.article.date.substring(0, 11)}</h4>
        <h3>{props.article.summary}</h3>
        <p>{props.article.storyText}</p>
        <h4>Article written by {props.article.journalist.name}</h4>
      </div>
      );
    }

}

export default FullArticleInfo;
