import React from 'react';
import './ArticleFilterSelect.css'

class ArticleFilterSelect extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      regionFilter: "ALL",
      categoryFilter: "ALL"
    }

    this.handleRegionChange = this.handleRegionChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }


  handleRegionChange(event){
    this.setState({regionFilter: event.target.value}, ()=> {
      this.props.changeFilter(this.state);
    })
  }


  handleCategoryChange(event){
    this.setState({categoryFilter: event.target.value}, ()=> {
      this.props.changeFilter(this.state);
    })
  }

  componentWillUnmount(){
    this.props.changeFilter({regionFilter: "ALL", categoryFilter: "ALL"})
  }

  render(){
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

    const regionsOptions = regions.map((region) => {
      return(
        <option
        key = {region}
        value = {region}
        >
        {region}
        </option>
      )
    })
    const categoriesOptions = categories.map((category) => {
      return(
        <option
        key = {category}
        value = {category}
        >
        {category}
        </option>
      )
    })
    return(
      <>
      <select
      className = "article-filter-select region-select"
      onChange = {this.handleRegionChange}
      defaultValue = "ALL">
      <option
      value = "ALL">All Regions
      </option>
      {regionsOptions}
      </select>

      <select
      className = "article-filter-select category-select"
      onChange = {this.handleCategoryChange}
      defaultValue = "ALL">
      <option
      value = "ALL">All Categories
      </option>
      {categoriesOptions}
      </select>
      </>
    )
  }
}

export default ArticleFilterSelect;
