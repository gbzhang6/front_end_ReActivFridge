import React, { Component } from 'react';
import YourFridge from "./YourFridge";
import YourRecipes from "./YourRecipes";
const URL = "http://localhost:3000/api/v1/ingredients";

class Index extends Component {
  state = {
    ingredients: [],
    yourIngredients: [],
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(ingredients => this.setState(
      {
        ingredients
      }
    )
  )}

  render(){
    return(
      <div className="fridge">
        <YourFridge allIngredients={this.state.ingredients}/>
        <YourRecipes/>
      </div>
    )
  }
}

export default Index;
