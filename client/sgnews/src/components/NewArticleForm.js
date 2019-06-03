import React, { Component } from 'react';

class NewArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      headline: "",
      image: "",
      journalist: "",
      region: "",
      storytext: "",
      summary: ""
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
      return (
        <form>
          <div className="form_wrap" >
            <label htmlFor="headline">Headline:</label>
            <input 
            type = "text" 
            name = "headline"
            onChange = {this.handleHeadlineChange}/>
          </div>

          <div className="form_wrap" >
            <label htmlFor="summary">Summary:</label>
            <input 
            type="text" 
            name="summary"
            onChange = {this.handleSummaryChange}/>
          </div>

          <div className="form_wrap" >
            <label htmlFor="storyText">Story Text:</label>
            <textarea 
            type="text" 
            rows="5" cols="40" 
            name="storyText"
            onChange = {this.handleStoryTextChange}/>
          </div>

          <div className="form_wrap" >
            <label htmlFor="region">Region:</label>
            <input 
            type="text" 
            name="region"
            onChange = {this.handleRegionChange}/>
          </div>

          <div className="form_wrap" >
            <label htmlFor="category">Category:</label>
            <input 
            type="text" 
            name="catagory"
            onChange = {this.handleCategoryChange}/>
          </div>

          <div className="form_wrap" >
            <label htmlFor="image">Image Here:</label>
            <input 
            type="text" 
            name="image"
            onChange = {this.handleImageChange}/>
          </div>

          <div className="form_wrap" >
            <label htmlFor="journalist">journalist:</label>
            <select>
              {this.props.journalists.map((journalist)=>
                <option
                key={journalist.id}
                value={`http://localhost:8080/journalist/${journalist.id}`}
                onChange = {this.handleJournalistChange}> 
                {journalist.name}
                </option>)}
            </select>

          </div>

          <input onClick={() => console.log("submitted")} type="submit" value="submit" />

        </form>
      );
    }
  }

export default NewArticleForm;
