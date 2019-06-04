import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ArticleListInfo extends Component {

  render() {

    return (
      <div className="article-info">

      <li><Link to = {`/articles/${this.props.children.id}`}>{this.props.children.headline} </Link> | {this.props.children.summary}</li>
      </div>
      );
    }

}

export default ArticleListInfo;
