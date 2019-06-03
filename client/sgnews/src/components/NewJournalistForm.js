import React from 'react';

class NewJournalistForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      image: "",
      bio: ""
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(event){
    this.setState({name: event.target.value});
  };

  handleBioChange(event){
    this.setState({bio: event.target.value});
  }

  handleImageChange(event){
    this.setState({image: event.target.value});
  }

  handleFormSubmit(event){
    event.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render(){
    return(
      <form>
      <label htmlFor = "name">Name:</label>
      <input
      id = "name"
      value = {this.state.name}
      onChange = {this.handleNameChange}/>

      <label htmlFor = "image">Image URL:</label>
      <input
      id = "image"
      value = {this.state.image}
      onChange = {this.handleImageChange}/>

      <label htmlFor = "bio">Biography:</label>
      <input
      id = "bio"
      value = {this.state.bio}
      onChange = {this.handleBioChange}/>

      <input type = "submit" value = "submit" onClick = {this.handleFormSubmit}/>
      </form>
    )
  }
}

export default NewJournalistForm;
