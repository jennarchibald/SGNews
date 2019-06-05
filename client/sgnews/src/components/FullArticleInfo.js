import React, { Component } from 'react';
import './FullArticleInfo.css';

class FullArticleInfo extends Component {
  render() {
    return (
      <div>
        <title>{this.props.article.headline}</title>
        <h1>{this.props.article.headline}</h1>
        <p>Author: {this.props.article.journalist.name} Published: {this.props.article.date.substring(0, 10)}</p>
        <h3>{this.props.category}</h3>
        <div className="image-wrapper">
        <img src={this.props.article.image} alt={this.props.article.summary}></img>
        </div>
        <p>{this.props.article.summary}</p>
        <p>{this.props.article.storyText}</p>
      </div>
      );
    }

}

export default FullArticleInfo;
