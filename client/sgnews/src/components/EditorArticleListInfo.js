import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditorArticleListInfo extends Component {

  render() {

    return (
      <div className="editor-article-info">

      <li><Link to = {`/editor/articles/${this.props.children.id}`}>{this.props.children.headline} </Link>| {this.props.children.summary} <Link to = {`/editor/articles/${this.props.children.id}/edit`}>EDIT</Link></li>
      </div>
      );
    }

}

export default EditorArticleListInfo;
