import React, { Component, Fragment } from 'react';

class FullJournalistInfo extends Component{

  render(){
    let articles = [];
    if (this.props.articles){
      articles = this.props.journalist.articles.map((article, index) =>{
        return (
          <Fragment key = {index} >
          <li >{article.headline}</li>
          </Fragment>
        )
      })}
    return(
        <div>
        <h1>{this.props.journalist.name}</h1>
        <img src={this.props.journalist.image} alt = ""></img>
        <p>Bio: {this.props.journalist.bio}</p>
        <p>Previous articles:</p>
        <ul>
        {articles}
        </ul>
        </div>
      )
    }
  }

  export default FullJournalistInfo;
