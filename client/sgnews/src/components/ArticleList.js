import React, { Component } from 'react';
import ArticleListInfo from './ArticleListInfo';
import './ArticleList.css'

class ArticleList extends Component {
  render() {
    const mediaNodes = this.props.articles.map(article => {
        return(
          <ArticleListInfo key={article.id}>{article}</ArticleListInfo>
        );
    });

    return (
      <div className="article-list-container">
      <ul className="article-list-each-container">
        {mediaNodes}
      </ul>
      </div>
      );
    }

}

export default ArticleList;
