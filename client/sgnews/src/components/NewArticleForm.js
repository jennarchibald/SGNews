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
  }

    render() {
      return (
        <form>
          <div className="form_wrap" >
            <label htmlFor="headline">Headline:</label>
            <input type="text" name="headline"/>
          </div>

          <div className="form_wrap" >
            <label htmlFor="summary">Summary:</label>
            <input type="text" name="summary"/>


          </div>

          <div className="form_wrap" >
            <label htmlFor="storyText">Story Text:</label>
            <textarea type="text" rows="5" cols="40" name="storyText"/>


          </div>

          <div className="form_wrap" >
            <label htmlFor="region">Region:</label>
            <input type="text" name="region"/>


          </div>

          <div className="form_wrap" >
            <label htmlFor="catagory">catagory:</label>
            <input type="text" name="catagory"/>


          </div>

          <div className="form_wrap" >
            <label htmlFor="image">image here:</label>
            <input type="text" name="image"/>


          </div>

          <div className="form_wrap" >
            <label htmlFor="journalist">journalist:</label>
            <select>
              {this.props.journalists.map((journalist)=>
                <option
                key={journalist.id}
                value={`http://localhost:8080/journalist/${journalist.id}`}> {journalist.name}
                </option>)}
            </select>

          </div>

          <input onClick={() => console.log("submitted")} type="submit" value="submit" />

        </form>
      );
    }
  }

export default NewArticleForm;
