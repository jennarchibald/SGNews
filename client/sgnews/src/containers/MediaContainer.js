import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MediaTitle from '../components/MediaTitle';
import ArticleList from '../components/ArticleList';
import NewArticleForm from '../components/NewArticleForm';
import JournalistList from '../components/JournalistList';
import FullArticleInfo from '../components/FullArticleInfo';
import FullJournalistInfo from '../components/FullJournalistInfo';
import ErrorPage from '../components/ErrorPage';
import NavBar from '../components/NavBar';
import EditorHomePage from '../components/EditorHomePage';
import NewJournalistForm from '../components/NewJournalistForm';

class MediaContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      journalists: []
    }

    this.postNewArticle = this.postNewArticle.bind(this);
    this.postNewJournalist = this.postNewJournalist.bind(this);
  }

  componentDidMount() {
    const articleUrl = 'http://localhost:8080/articles/bydate';
    const journalistsUrl = 'http://localhost:8080/journalists'
    fetch(articleUrl)
    .then(res => res.json())
    .then((articles) => {
      this.setState({ articles: articles });
    })
    .catch((error) => {
      console.log(error);
    });

    fetch(journalistsUrl)
    .then(res => res.json())
    .then((journalistsData) => {
      const journalists = journalistsData["_embedded"].journalists;
      this.setState({ journalists: journalists });
    })
    .catch((error) => {
      console.log(error)
    });

  }

  postNewArticle(article){
    article.date = new Date();
    fetch("http://localhost:8080/articles", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    })
    .then((res) => {
      return res.json();
    })
    .then((postedArticle) => {
      const articles = this.state.articles;
      articles.push(postedArticle);
      this.setState({articles: articles});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  postNewJournalist(journalist){
    journalist.articles = [];
    fetch("http://localhost:8080/journalists", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(journalist)
    })
    .then((res) => {
      return res.json();
    })
    .then((postedJournalist) => {
      const journalists = this.state.journalists;
      journalists.push(postedJournalist);
      this.setState({journalists: journalists});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  putUpdateJournalist(journalist){
    // journalist.articles = [];
    const id = journalist.id
    fetch("http://localhost:8080/journalists/" + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(journalist)
    })
    .then((res) => {
      return res.json();
    })
    .then((updatedJournalist) => {
      if (updatedJournalist.id === id){
        journalists[updatedJournalist.id - 1] = updatedJournalist;
        this.setState({journalists: journalists});
      }
    })
    .catch((error) => {
      console.log(error);
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
          exact path = "/editor/journalists/new"
          render = {(props) => {
            return (
              <NewJournalistForm handleSubmit = {this.postNewJournalist}/>
            )
          }}
          />
          <Route
          exact path ="/editor/articles/new"
          render = {(props) => {
                return (
                <NewArticleForm journalists = {this.state.journalists} />
              )}}
            />
          <Route
          path = "/articles/:id"
          render = {(props) => {
            const article = this.findByID(this.state.articles, parseInt(props.match.params.id));
            if (article){
            return (
            <FullArticleInfo article = {article} />
          )} else {
            return (
              <ErrorPage />
            )
          }}}
          />
          <Route
          path = "/journalists/:id"
          render = {(props) => {
            const journalist = this.findByID(this.state.journalists, parseInt(props.match.params.id));
            if (journalist){
            return (
            <FullJournalistInfo journalist = {journalist} />
          )} else {
            return (
              <ErrorPage />
            )
          }}}
          />
          <Route
          path = "/editor/articles/:id"
          render = {(props) => {
            const article = this.findByID(this.state.articles, parseInt(props.match.params.id));
            if (article){
            return (
            <FullArticleInfo article = {article} />
          )} else {
            return (
              <ErrorPage />
            )
          }}}
          />
          <Route
          path = "/editor/journalists/:id"
          render = {(props) => {
            const journalist = this.findByID(this.state.journalists, parseInt(props.match.params.id));
            if (journalist){
            return (
            <FullJournalistInfo journalist = {journalist} />
          )} else {
            return (
              <ErrorPage />
            )
          }}}
          />



          </Switch>
        </Router>

      );
    }
  }

  export default MediaContainer;
