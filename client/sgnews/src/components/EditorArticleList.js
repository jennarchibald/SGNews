import React, { Component } from 'react';
import EditorArticleListInfo from './EditorArticleListInfo';

class EditorArticleList extends Component {
  render() {
    const mediaNodes = this.props.articles.map(article => {
        return(
          <EditorArticleListInfo key={article.id}>{article}</EditorArticleListInfo>
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

export default EditorArticleList;
