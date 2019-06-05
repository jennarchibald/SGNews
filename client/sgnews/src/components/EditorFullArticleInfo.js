import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import './FullArticleInfo.css';
import DeletePopover from './DeletePopover';

class EditorFullArticleInfo extends Component {
  constructor(props){
    super(props);
    this.state = {}

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    console.log("Delete article logging")
    this.props.deleteArticle(this.props.article)
    this.setState({redirect: true})
  }

  render() {
    if (this.state.redirect){
      return (
        <Redirect to = "/editor/articles" />
      )
    } else {
      return (
        <div>
        <title>{this.props.article.headline}</title>
        <h1>{this.props.article.headline}</h1>
        <p>Author: {this.props.article.journalist.name}</p>
        <p>Published:{this.props.article.date.substring(0, 10)}</p>
        <Link to = {`/editor/articles/${this.props.article.id}/edit`}>EDIT</Link>
        <div className="image-wrapper">
        <img src={this.props.article.image} alt={this.props.article.summary}></img>
        </div>
        <p>{this.props.article.summary}</p>
        <p>{this.props.article.storyText}</p>
        <h4>Article written by {this.props.article.journalist.name}</h4>

        <DeletePopover onDelete={this.handleDelete}></DeletePopover>

        </div>
      );
    }
  }
}

export default EditorFullArticleInfo;
