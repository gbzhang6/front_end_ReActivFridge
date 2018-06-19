import React, { Component } from 'react';
import RecipeCard from '../components/RecipeCard'

class YourRecipes extends Component {
  render(){
    return(
      <div>
        Recipes
        < RecipeCard />
      </div>
    )
  }
}

export default YourRecipes;
