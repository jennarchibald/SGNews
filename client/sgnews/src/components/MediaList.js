import React, { Component } from 'react';
import ArticleInfo from './ArticleInfo';

class MediaList extends Component {
  render() {
    const mediaNodes = this.props.articles.map(article => {
        return(
          <ArticleInfo key={article.id}>{article}</ArticleInfo>
        );
    });

    return (
      <div className="media-list-container">
      <ul>
        <ol>{mediaNodes}</ol>
      </ul>
      </div>
      );
    }

}

export default MediaList;
