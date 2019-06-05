import React, { Component } from 'react';
import EditorJournalistListInfo from './EditorJournalistListInfo';
import './EditorJournalistList.css'

class EditorJournalistList extends Component {
    render(){
        const journalistNodes = this.props.journalists.map(journalist => {
            return(
                <EditorJournalistListInfo key={journalist.id}>{journalist}</EditorJournalistListInfo>
            );
        });

        return(
            <div className="editor-journalist-list-container">
                <ul className="editor-journalist-list-each-container">
                    {journalistNodes}
                </ul>
            </div>
        );
    }
}

export default EditorJournalistList;
