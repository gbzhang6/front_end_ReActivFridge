import React, { Component } from 'react';
import RecipeCard from '../components/RecipeCard'
import { Grid, Button, Segment } from 'semantic-ui-react';

class YourRecipes extends Component {
  render(){
    console.log("Your Recipes", this.props.recipeDetail)
    const allRecipes = () => this.props.recipes.matches.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} recipeDetail={this.props.recipeDetail} detailClick={this.props.handleRecipeDetailClick} />)

    const hasThings = this.props.recipes.matches

    return(
      <div>
        <Segment inverted>
          <h2>Recipes</h2>
          <Button inverted color='blue' onClick={()=>this.props.handleFindRecipeClick(this.props.selectedIngredients)}> Back to Fridge </Button>
          <div>
          </div>
        </Segment>
        <div>
          <Grid centered>
            {hasThings? allRecipes() : null}
          </Grid>
        </div>
      </div>
    )
  }
}

export default YourRecipes;
