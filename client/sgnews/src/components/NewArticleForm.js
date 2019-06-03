import React, { Component } from 'react';

class NewArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catagory: "",
      date: "",
      headline: "",
      id: "",
      image: "",
      journalist: "",
      region: "",
      storytext: "",
      summary: ""
    }
  }
}

export default NewArticleForm;
