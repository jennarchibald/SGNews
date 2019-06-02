import React, { Component } from 'react';

class ArticleInfo extends Component {

  render() {

    return (
      <div className="article-info">

      <li>{this.props.children.headline} | {this.props.children.summary}</li>
      </div>
      );
    }

}

export default ArticleInfo;
