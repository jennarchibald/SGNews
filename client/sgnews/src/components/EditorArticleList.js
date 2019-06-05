import React, { Component } from 'react';
import EditorArticleListInfo from './EditorArticleListInfo';
import './EditorArticleList.css';

class EditorArticleList extends Component {
  render() {
    const mediaNodes = this.props.articles.map(article => {
        return(
          <EditorArticleListInfo key={article.id}>{article}</EditorArticleListInfo>
        );
    });

    return (
      <div className="editor-article-list-container">
      <ul className="editor-article-list-each-container">
        {mediaNodes}
      </ul>
      </div>
      );
    }

}

export default EditorArticleList;
