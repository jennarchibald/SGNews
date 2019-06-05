import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MediaTitle from '../components/MediaTitle';
import ArticleList from '../components/ArticleList';
import EditorArticleList from '../components/EditorArticleList';
import NewArticleForm from '../components/NewArticleForm';
import JournalistList from '../components/JournalistList';
import EditorJournalistList from '../components/EditorJournalistList';
import FullArticleInfo from '../components/FullArticleInfo';
import FullJournalistInfo from '../components/FullJournalistInfo';
import EditorFullJournalistInfo from '../components/EditorFullJournalistInfo';
import EditorFullArticleInfo from '../components/EditorFullArticleInfo';
import ErrorPage from '../components/ErrorPage';
import NavBar from '../components/NavBar';
import EditorHomePage from '../components/EditorHomePage';
import NewJournalistForm from '../components/NewJournalistForm';
import EditJournalistForm from '../components/EditJournalistForm';
import EditArticleForm from '../components/EditArticleForm';

class MediaContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      journalists: [],
      editorLogin: false
    }

    this.postNewArticle = this.postNewArticle.bind(this);
    this.postNewJournalist = this.postNewJournalist.bind(this);
    this.putUpdateJournalist = this.putUpdateJournalist.bind(this);
    this.putUpdateArticle = this.putUpdateArticle.bind(this);

    this.fakeLogin = this.fakeLogin.bind(this);
    this.fakeLogout = this.fakeLogout.bind(this);
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

  fakeLogin(){
    this.setState({editorLogin: true})
  }

  fakeLogout(){
    this.setState({editorLogin: false})
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
      const newArticle = postedArticle;
      newArticle.journalist = postedArticle["_embedded"].journalist;
      articles.push(newArticle);
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
    const id = journalist.id
    fetch("http://localhost:8080/journalists/" + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(journalist)
    })
    .then((res) => {
      return res.json();
    })
    .then((updatedJournalist) => {
      // console.log(updatedJournalist)
      // const articles = updatedJournalist["_embedded"].articles;
      // updatedJournalist.articles = articles;
      const journalist = this.findByID(this.state.journalists, updatedJournalist.id);
      // console.log(journalist)
      const journalistIndex = this.state.journalists.indexOf(journalist);
      const journalists = this.state.journalists;
      journalists[journalistIndex].bio = updatedJournalist.bio;
      journalists[journalistIndex].name = updatedJournalist.name;
      journalists[journalistIndex].image = updatedJournalist.image;
      this.setState(journalists);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  putUpdateArticle(article){
    const id = article.id
    fetch("http://localhost:8080/articles/" + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })
    .then((res) => {
      return res.json();
    })
    .then((updatedArticle) => {
      const journalist = updatedArticle["_embedded"].journalist;
      updatedArticle.journalist = journalist;
      const article = this.findByID(this.state.articles, updatedArticle.id);
      const articleIndex = this.state.articles.indexOf(article);
      const articles = this.state.articles;
      articles[articleIndex] = updatedArticle;
      this.setState(articles);
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(this.state.articles)
  }

  deleteJournalist(journalist){
    const id = journalist.id
    fetch("http://localhost:8080/journalists/" + id, {
      method: 'DELETE'
    })
    .then((res) => {
      const journalist = this.findByID(this.state.journalists, id);
      const journalistIndex = this.state.journalists.indexOf(journalist);
      const journalists = this.state.journalists;
      journalists.splice(journalistIndex, 1);
      this.setState(journalists);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  deleteArticle(article){
    const id = article.id
    fetch("http://localhost:8080/articles/" + id, {
      method: 'DELETE'
    })
    .then((res) => {
      const article = this.findByID(this.state.articles, id);
      const articleIndex = this.state.articles.indexOf(article);
      const newArticles = this.state.articles;
      newArticles.splice(articleIndex, 1);
      this.setState({articles: newArticles});
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
      <NavBar
      editor = {this.state.editorLogin}
      />
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
      render = {() => {
        return (
          <EditorHomePage
          editor = {this.state.editorLogin}
          logIn = {this.fakeLogin}
          logOut = {this.fakeLogout}
          />
        )}}
        />
        <Route
        exact path = "/editor/articles"
        render = {() => <EditorArticleList articles = {this.state.articles} />}
        />
        <Route
        exact path = "/editor/journalists"
        render = {() => <EditorJournalistList journalists = {this.state.journalists} />}
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
            <NewArticleForm journalists = {this.state.journalists} handleSubmit = {this.postNewArticle} />
          )}}
          />
          <Route

          exact path ="/editor/articles/:id/edit"
          render = {(props) => {
            const article = this.findByID(this.state.articles, parseInt(props.match.params.id));
            if (article){
              return (
                <EditArticleForm article = {article} journalists = {this.state.journalists} handleSubmit = {this.putUpdateArticle} />
              )} else {
                return (
                  <ErrorPage />
                )}}}
                />
                <Route
                exact path ="/editor/articles/new"
                render = {(props) => {
                  return (
                    <NewArticleForm journalists = {this.state.journalists} handleSubmit = {this.postNewArticle} />
                  )}}
                  />

                  <Route                  path = "/articles/:id"
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
                          exact path = "/editor/journalists/:id/edit"
                          render = {(props) => {
                            const journalist = this.findByID(this.state.journalists, parseInt(props.match.params.id));
                            if (journalist){
                              return (
                                <EditJournalistForm journalist = {journalist} handleSubmit = {this.putUpdateJournalist}/>
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
                                    <EditorFullArticleInfo article = {article} />
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
                                        <EditorFullJournalistInfo journalist = {journalist} />
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
