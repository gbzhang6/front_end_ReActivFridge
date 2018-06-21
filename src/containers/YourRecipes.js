import React, { Component } from 'react';
import RecipeCard from '../components/RecipeCard'
import { Card } from 'semantic-ui-react';

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
