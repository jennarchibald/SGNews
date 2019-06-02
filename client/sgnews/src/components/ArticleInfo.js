import React, { Component } from 'react';

class ArticleInfo extends Component {

  render() {

    return (
      <div className="article-info">
      <p>{this.props.storyText}</p>
      <p>{this.props.summary}</p>
      <p>{this.props.headline}</p>
      <p>{this.props.article}</p>
      </div>
      );
    }

}

export default ArticleInfo;
