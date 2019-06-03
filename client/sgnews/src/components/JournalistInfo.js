import React, { Component } from 'react';

class JournalistInfo extends Component{

  render(){

    return(

      <div>
        <h1>{this.props.journalists.name}</h1>
        <img src="{this.props.journalists.image}"></img>
        <p>Bio: {this.props.journalists.bio}</p>
        <ul> Previous articles:
          <li>{this.props.journalists.articles}</li>
        </ul>
      </div>
    )
  }
}

export default JournalistInfo;
