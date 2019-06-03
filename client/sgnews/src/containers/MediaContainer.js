import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MediaTitle from '../components/MediaTitle';
import ArticleList from '../components/ArticleList';
import JournalistList from '../components/JournalistList';
import FullArticleInfo from '../components/FullArticleInfo';
import NavBar from '../components/NavBar';

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

  findByID(array,id) {
      return array.find((element) => element.id === id);
  };

    render() {
      return (
        <Router>
          <NavBar/>
          <Switch>
          <Route
          exact path = "/"
          render = {() => <MediaTitle title = "HomePage" />}
          />
          <Route
          exact path = "/articles"
          render = {() => <ArticleList articles = {this.state.articles} />}
          />
          <Route
          exact path = "/journalists"
          render = {() => <JournalistList journalists = {this.state.journalists} />}
          />
          <Route
          path = "/articles/:id"
          render = {(props) => {
            if (this.state.articles[0]){
            return (
            <FullArticleInfo article = {this.findByID(this.state.articles,parseInt(props.match.params.id))} />
          )}}}
          />
          <Route
          path = "/journalists/:id"
          render = {(props) => {
            return (
            <MediaTitle title = {`journalists ${props.match.params.id}`} />
          )}}
          />
          </Switch>
        </Router>

      );
    }
  }

  export default MediaContainer;
