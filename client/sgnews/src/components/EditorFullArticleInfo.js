import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditorFullArticleInfo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.article.headline}</h1>
        <h4>{this.props.article.date.substring(0, 10)}</h4>
        <Link to = {`/editor/articles/${this.props.article.id}/edit`}>EDIT</Link>
        <img src={this.props.article.image} alt={this.props.article.summary}></img>
        <h3>{this.props.article.summary}</h3>
        <p>{this.props.article.storyText}</p>
        <h4>Article written by {this.props.article.journalist.name}</h4>
      </div>
      );
    }

}

export default EditorFullArticleInfo;
