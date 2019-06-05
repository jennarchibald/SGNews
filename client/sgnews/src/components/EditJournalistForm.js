import React from 'react';
import {Redirect} from 'react-router-dom';
import './JournalistForm.css';


class EditJournalistForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.props.journalist.id,
      name: this.props.journalist.name,
      image: this.props.journalist.image,
      bio: this.props.journalist.bio
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
    this.setState({redirect: true})
  }

  render(){
    if (this.state.redirect){
      return (
        <Redirect to = {`/editor/journalists/${this.state.id}`} />
      )
    } else {

      return(
        <form
        onSubmit = {this.handleFormSubmit}>
        <div className="form-wrap">
        <label htmlFor = "name">Name:</label>
        <input
        type="text"
        id = "name"
        value = {this.state.name}
        onChange = {this.handleNameChange}/></div>

        <div className="form-wrap">
        <label htmlFor = "image">Image URL:</label>
        <input
        type="text"
        id = "image"
        value = {this.state.image}
        onChange = {this.handleImageChange}/></div>

        <div className="form-wrap">
        <label htmlFor = "bio">Biography:</label>
        <input
        type="text"
        id = "bio"
        value = {this.state.bio}
        onChange = {this.handleBioChange}/></div>

        <div className="submit-button">
        <label></label>
        <input type = "submit" value = "submit" />
        </div>
        </form>
      )
    }
  }
}

export default EditJournalistForm;
