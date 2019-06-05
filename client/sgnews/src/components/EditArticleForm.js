import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


class EditArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.article.id,
      date: this.props.article.date,
      category: this.props.article.category,
      headline: this.props.article.headline,
      image: this.props.article.image,
      journalist: this.props.article.journalist.id,
      region: this.props.article.region,
      storyText: this.props.article.storyText,
      summary: this.props.article.summary
    }

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleHeadlineChange = this.handleHeadlineChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleJournalistChange = this.handleJournalistChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleStoryTextChange = this.handleStoryTextChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleCategoryChange(event){
    this.setState({category: event.target.value});
  };

  handleHeadlineChange(event){
    this.setState({headline: event.target.value});
  };

  handleImageChange(event){
    this.setState({image: event.target.value});
  };

  handleJournalistChange(event){
    this.setState({journalist: event.target.value});
  };

  handleRegionChange(event){
    this.setState({region: event.target.value});
  };

  handleStoryTextChange(event){
    this.setState({storyText: event.target.value});
  };

  handleSummaryChange(event){
    this.setState({summary: event.target.value});
  };

  handleFormSubmit(event){
    event.preventDefault();
    const editedArticle = this.state;
    const journalistURL = `http://localhost:8080/journalists/${this.state.journalist}`
    editedArticle.journalist = journalistURL
    this.props.handleSubmit(editedArticle);
    this.setState({redirect: true})
  }

  render() {
    if (this.state.redirect){
      return (
        <Redirect to = "/editor/articles" />
      )
    } else {
      const regions = ["BORDERS",
    "CENTRAL",
    "HIGHLANDS",
    "LOTHIAN",
    "STRATHCLYDE",
    "UK",
    "WORLD"];
      const categories = ["BUSINESS",
    "POLITICS",
    "TECH",
    "SCIENCE",
    "HEALTH",
    "EDUCATION",
    "ENTERTAINMENT"];
      return (
        <form
        onSubmit={this.handleFormSubmit}>
        <div className="form_wrap" >
        <label htmlFor="headline">Headline:</label>
        <input
        required
        type = "text"
        name = "headline"
        value = {this.state.headline}
        onChange = {this.handleHeadlineChange}/>
        </div>

        <div className="form_wrap" >
        <label htmlFor="summary">Summary:</label>
        <input
        required
        type="text"
        name="summary"
        value = {this.state.summary}
        onChange = {this.handleSummaryChange}/>
        </div>

        <div className="form_wrap" >
        <label htmlFor="storyText">Story Text:</label>
        <textarea
        required
        type="text"
        rows="5" cols="40"
        name="storyText"
        defaultValue = {this.state.storyText}
        onChange = {this.handleStoryTextChange}
        />
        </div>

        <div className="form_wrap" >
        <label htmlFor="image">Image Here:</label>
        <input
        required
        type="text"
        name="image"
        value = {this.state.image}
        onChange = {this.handleImageChange}/>
        </div>

        <div className="form_wrap" >
        <label htmlFor="region">Region:</label>
        <select
        required
        onChange = {this.handleRegionChange}
        defaultValue = {this.state.region}>
        {regions.map((region, index) => {
          return(
            <option
            key = {index}
            value = {region}>
            {region}
            </option>
          )
        })}
        </select>
        </div>

        <div className="form_wrap" >
        <label htmlFor="category">Category:</label>
        <select
        required
        onChange = {this.handleCategoryChange}
        defaultValue = {this.state.category}>
        {categories.map((category, index) => {
          return(
            <option
            key = {index}
            value = {category}>
            {category}
            </option>
          )
        })}
        </select>
        </div>

        <div className="form_wrap" >
        <label htmlFor="journalist">Journalist:</label>
        <select
        required
        onChange = {this.handleJournalistChange}
        value = {this.state.journalist}>
        {this.props.journalists.map((journalist)=> {
          return (
          <option
          key={journalist.id}
          value={journalist.id}>
          {journalist.name}
          </option>)})}
          </select>

          </div>

          <input  type="submit" value="submit" />

          </form>
        )};
      }
    }

export default EditArticleForm;
