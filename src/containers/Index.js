import React, { Component } from 'react';
import YourFridge from "./YourFridge";
import YourRecipes from "./YourRecipes";
const URL = "http://localhost:3000/api/v1/ingredients";
const URL2 = "http://localhost:3000/api/v1/recipes/"

class Index extends Component {
  state = {
    ingredients: [],
    selectedIngredients: [],
    recipes: {},
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

  handleClick = (newIngredientName) => {
    this.setState({
      selectedIngredients: [...this.state.selectedIngredients, newIngredientName]
    })
  }

  handleFindRecipeClick = (selectedIngredients) => {
    fetch(URL2 + this.state.selectedIngredients.join('%20'))
    .then(response => response.json())
    .then(recipes => this.setState(
      {
        recipes
      })
    )
  }

  render(){
    const tempIngredients = this.state.ingredients.slice(0,20)
    return(
      <div className="fridge">
        <YourFridge
          allIngredients={tempIngredients}
          selectedIngredients={this.state.selectedIngredients}
          handleClick={this.handleClick}
          handleFindRecipeClick={this.handleFindRecipeClick}
          />
        <YourRecipes recipes={this.state.recipes}/>
      </div>
    )
  }
}

export default Index;
