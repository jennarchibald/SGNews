import React, { Component } from 'react';

class ArticleInfo extends Component {

  render() {

    return (
      <div className="article-info">
      <p>{this.props.children.storyText}</p>
      <p>{this.props.children.summary}</p>
      <p>{this.props.children.headline}</p>
      <p>{this.props.children.article}</p>
      </div>
      );
    }

}

export default ArticleInfo;
