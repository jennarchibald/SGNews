import React, { Component } from 'react';

class JournalistListInfo extends Component{

  render(){

    return(

      <div>
          <li>{this.props.children.name} | {this.props.children.bio}</li>
      </div>
    )
  }
}

export default JournalistListInfo;
