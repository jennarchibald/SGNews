import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MediaTitle from '../components/MediaTitle';
import ArticleList from '../components/ArticleList';
import JournalistList from '../components/JournalistList';
import FullArticleInfo from '../components/FullArticleInfo';
import FullJournalistInfo from '../components/FullJournalistInfo';
import NavBar from '../components/NavBar';
import EditorHomePage from '../components/EditorHomePage';

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
          exact path = "/editor"
          render = {() => <EditorHomePage />}
          />
          <Route
          exact path = "/editor/articles"
          render = {() => <ArticleList articles = {this.state.articles} />}
          />
          <Route
          exact path = "/editor/journalists"
          render = {() => <JournalistList journalists = {this.state.journalists} />}
          />
          <Route
          path = "/articles/:id"
          render = {(props) => {
            const article = this.findByID(this.state.articles, parseInt(props.match.params.id));
            if (article){
            return (
            <FullArticleInfo article = {article} />
          )}}}
          />
          <Route
          path = "/journalists/:id"
          render = {(props) => {
            const journalist = this.findByID(this.state.journalists, parseInt(props.match.params.id));
            if (journalist){
            return (
            <FullJournalistInfo journalist = {journalist} />
          )}}}
          />
          <Route
          path = "/editor/articles/:id"
          render = {(props) => {
            const article = this.findByID(this.state.articles, parseInt(props.match.params.id));
            if (article){
            return (
            <FullArticleInfo article = {article} />
          )}}}
          />
          <Route
          path = "/editor/journalists/:id"
          render = {(props) => {
            const journalist = this.findByID(this.state.journalists, parseInt(props.match.params.id));
            if (journalist){
            return (
            <FullJournalistInfo journalist = {journalist} />
          )}}}
          />
          </Switch>
        </Router>

      );
    }
  }

  export default MediaContainer;
