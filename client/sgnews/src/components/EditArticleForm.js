import React, { Component } from 'react';

class EditArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: this.props.article.category,
      headline: this.props.article.headline,
      image: this.props.article.image,
      journalist: this.props.article.journalist,
      region: this.props.article.region,
      storytext: this.props.article.storyText,
      summary: this.props.article.summary
    }

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleHeadlineChange = this.handleHeadlineChange.bind(this);
    this.handleImageChange = this.handleJournalistChange.bind(this);
    this.handleJournalistChange = this.handleJournalistChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleStoryTextChange = this.handleStoryTextChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
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
    this.setState({storytext: event.target.value});
  };

  handleSummaryChange(event){
    this.setState({summary: event.target.value});
  };

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
        <form>
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
        value = {this.state.storyText}
        onChange = {this.handleStoryTextChange}/>
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
        <option
        value = {this.state.region}
        disabled>
        Select a region
        </option>
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
        defaultValue = "default">
        <option
        disabled
        value = "default">
        Select a category
        </option>
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
        <label htmlFor="journalist">journalist:</label>
        <select
        required
        onChange = {this.handleJournalistChange}
        defaultValue="default">
        <option disabled
        value = "default">
        Select a journalist
        </option>
        {this.props.journalists.map((journalist)=>
          <option
          key={journalist.id}
          value={`http://localhost:8080/journalist/${journalist.id}`}>
          {journalist.name}
          </option>)}
          </select>

          </div>

          <input onClick={this.handleFormSubmit} type="submit" value="submit" />

          </form>
        )};
      }
    }

export default EditArticleForm;
