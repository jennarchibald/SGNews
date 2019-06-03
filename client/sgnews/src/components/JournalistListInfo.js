import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class JournalistListInfo extends Component{

  render(){

    return(

      <div>
          <li><Link to = {`/journalists/${this.props.children.id}`}>{this.props.children.name} </Link>| {this.props.children.bio}</li>
      </div>
    )
  }
}

export default JournalistListInfo;
