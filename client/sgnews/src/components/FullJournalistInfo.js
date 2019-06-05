import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import './FullJournalistInfo.css';

class FullJournalistInfo extends Component{

  render(){
    let articles = [];
    if (this.props.journalist.articles){
      articles = this.props.journalist.articles.map((article, index) =>{
        return (
          <Fragment key = {index} >
          <li ><Link
          to = {`/articles/${article.id}`}>{article.headline}</Link></li>
          </Fragment>
        )
      })}
      return(
        <div>
        <h1>{this.props.journalist.name}</h1>
        <img className = "journalist-photo" src={this.props.journalist.image} alt = ""></img>
        <p>{this.props.journalist.bio}</p>
        {articles}
        </div>
      )
    }

  }

  export default FullJournalistInfo;
