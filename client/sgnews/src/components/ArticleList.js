import React, { Component } from 'react';
import ArticleListInfo from './ArticleListInfo';

class ArticleList extends Component {
  render() {
    const mediaNodes = this.props.articles.map(article => {
        return(
          <ArticleListInfo key={article.id}>{article}</ArticleListInfo>
        );
    });

    return (
      <div className="media-list-container">
      <ul>
        {mediaNodes}
      </ul>
      </div>
      );
    }

}

export default ArticleList;
