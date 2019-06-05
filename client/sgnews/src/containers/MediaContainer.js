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
import ArticleFilterSelect from '../components/ArticleFilterSelect';
import Footer from '../components/Footer';

class MediaContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      selectedArticles: [],
      journalists: [],
      editorLogin: false
    }

    this.postNewArticle = this.postNewArticle.bind(this);
    this.postNewJournalist = this.postNewJournalist.bind(this);
    this.putUpdateJournalist = this.putUpdateJournalist.bind(this);
    this.putUpdateArticle = this.putUpdateArticle.bind(this);
    this.deleteJournalist = this.deleteJournalist.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);

    this.fakeLogin = this.fakeLogin.bind(this);
    this.fakeLogout = this.fakeLogout.bind(this);

    this.applyFilter = this.applyFilter.bind(this);

  }

  componentDidMount() {
    const articleUrl = 'http://localhost:8080/articles/bydate';
    const journalistsUrl = 'http://localhost:8080/journalists'
    fetch(articleUrl)
    .then(res => res.json())
    .then((articles) => {
      this.setState({ articles: articles , selectedArticles: articles});
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

  applyFilter(filters){
    let filteredArticles = [];

    if (filters.regionFilter === "ALL"){
      filteredArticles = this.state.articles;
    } else {
      filteredArticles = this.state.articles.filter((article) => {
        return article.region === filters.regionFilter;
      })
    }

    if (filters.categoryFilter !== "ALL"){
      let articles = filteredArticles.filter((article) => {
        return article.category === filters.categoryFilter;
      });
      filteredArticles = articles;
    }

    this.setState({selectedArticles: filteredArticles})
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
      articles.unshift(newArticle);
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
      const journalist = this.findByID(this.state.journalists, updatedJournalist.id);
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
      this.setState({articles: newArticles, selectedArticles: newArticles});
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
      render = {() => {
        return(
          <>
          <ArticleFilterSelect
          filterCategories = {this.filterCategories}
          changeFilter = {this.applyFilter}/>
          <ArticleList articles = {this.state.selectedArticles} />
          </>
        )
      }}
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
        render = {() => {
          return(
            <>
            <ArticleFilterSelect
            filterCategories = {this.filterCategories}
            changeFilter = {this.applyFilter}/>
            <EditorArticleList articles = {this.state.selectedArticles} />
            </>
          )
        }}
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
                                    <EditorFullArticleInfo
                                    article = {article}
                                    deleteArticle = {this.deleteArticle} />
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
                                        <EditorFullJournalistInfo journalist = {journalist} deleteJournalist={this.deleteJournalist} />
                                      )} else {
                                        return (
                                          <ErrorPage />
                                        )
                                      }}}
                                      />


                                      </Switch>
                                      <Footer editor = {this.state.editorLogin}/>
                                      </Router>

                                    );
                                  }
                                }

                                export default MediaContainer;
