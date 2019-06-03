import React, { Component } from 'react';
import MediaTitle from '../components/MediaTitle';
import ArticleList from '../components/ArticleList';

class MediaContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      journalists: []
    }
  }

  componentDidMount() {
    const articleUrl = 'http://localhost:8080/articles/bydate';
    const journalistsUrl = 'http://localhost:8080/journalists'
    fetch(articleUrl)
    .then(res => res.json())
    .then((articles) => {
      this.setState({ articles: articles });
    });
    fetch(journalistsUrl)
    .then(res => res.json())
    .then((journalistsData) => {
      const journalists = journalistsData["_embedded"].journalists;
      this.setState({ journalists: journalists });
    });
  }

    render() {



      return (
        <div className="media-container">
          <MediaTitle title="LANGUAGE!! :P"/>

          <ArticleList articles={this.state.articles} />
        </div>
      );
    }
  }

  export default MediaContainer;
