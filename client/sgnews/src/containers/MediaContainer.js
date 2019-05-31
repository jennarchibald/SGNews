import React, { Component } from 'react';
import MediaTitle from '../components/MediaTitle';
import MediaList from '../components/MediaList';

class MediaContainer extends Component{

    render() {

      return (
        <div className="media-container">
        <MediaTitle />

        <MediaList />
        </div>
      );
    }
  }

  export default MediaContainer;
