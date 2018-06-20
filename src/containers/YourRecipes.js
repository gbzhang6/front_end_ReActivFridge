import React, { Component } from 'react';
import RecipeCard from '../components/RecipeCard'

class YourRecipes extends Component {
  render(){
    return(
      <div>
        <h2>Recipes</h2>
        <RecipeCard />
      </div>
    )
  }
}

export default YourRecipes;
