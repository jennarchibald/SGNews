import React, { Component } from 'react';

class NewArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catagory: "",
      headline: "",
      image: "",
      journalist: "",
      region: "",
      storytext: "",
      summary: ""
    }

    render (
      return (
        <form>
          <div className="form_wrap" >
            <label htmlFor="headline">Headline:</label>

          </div>

          <div className="form_wrap" >
            <label htmlFor="summary">Summary:</label>


          </div>

          <div className="form_wrap" >
            <label htmlFor="storyText">Story Text:</label>


          </div>

          <div className="form_wrap" >
            <label htmlFor="region">Region:</label>


          </div>

          <div className="form_wrap" >
            <label htmlFor="catagory">catagory:</label>


          </div>

          <div className="form_wrap" >
            <label htmlFor="image">image here:</label>


          </div>

          <div className="form_wrap" >
            <label htmlFor="journalist">journalist:</label>


          </div>

      )
    )
  }
}

export default NewArticleForm;
