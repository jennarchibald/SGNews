import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import './FullArticleInfo.css';
import DeletePopover from './DeletePopover';
import Button from '@material-ui/core/Button';

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
        <div className = "editor-buttons">
        <Link to = {`/editor/articles/${this.props.article.id}/edit`}>
        <Button
        variant="contained">
        EDIT ARTICLE</Button></Link>
        <DeletePopover onDelete={this.handleDelete}></DeletePopover>
        </div>
        <title>{this.props.article.headline}</title>
        <h1>{this.props.article.headline}</h1>
        <p>Author: {this.props.article.journalist.name}</p>
        <p>Published:{this.props.article.date.substring(0, 10)}</p>

        <div className="image-wrapper">
        <img src={this.props.article.image} alt={this.props.article.summary}></img>
        </div>
        <p>{this.props.article.summary}</p>
        <p>{this.props.article.storyText}</p>
        <h4>Article written by {this.props.article.journalist.name}</h4>

        </div>
      );
    }
  }
}

export default EditorFullArticleInfo;
