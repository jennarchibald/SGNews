import React, { Component } from 'react';
import JournalistListInfo from './JournalistListInfo';
import './JournalistList.css';

class JournalistList extends Component {
    render(){
        const journalistNodes = this.props.journalists.map(journalist => {
            return(
                <JournalistListInfo key={journalist.id}>{journalist}</JournalistListInfo>
            );
        });

        return(
            <div className="journalist-list-container">
                <ul>
                    {journalistNodes}
                </ul>
            </div>
        );
    }
}

export default JournalistList;