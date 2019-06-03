import React, { Component } from 'react';

class FullArticleInfo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.article.headline}</h1>
        <h4>{this.props.article.date.substring(0, 11)}</h4>
        <h3>{this.props.article.summary}</h3>
        <p>{this.props.article.storyText}</p>
        <h4>Article written by {this.props.article.journalist.name}</h4>
      </div>
      );
    }

}

export default FullArticleInfo;
