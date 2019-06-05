import React from 'react';


class ArticleFilterSelect = {
  constructor(props){
    super(props)

    this.handleRegionChange = this.handleRegionChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }


  handleRegionChange(event){
    console.log(event.target.value)
  }


  handleCategoryChange(event){
    console.log(event.target.value)
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
      onChange = {this.handleRegionChange}>
      <option
      value = "All">All Regions
      </option>
      {regionsOptions}
      </select>

      <select
      onChange = {this.handleCategoryChange}>
      <option
      value = "All">All Categories
      </option>
      {categoriesOptions}
      </select>
      </>
    )
  }
}

export default ArticleFilterSelect;
