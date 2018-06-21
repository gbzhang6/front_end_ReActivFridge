import React, { Component } from 'react';
import IngredientCard from "../components/IngredientCard";
import { Grid, Button, Segment } from 'semantic-ui-react';

class YourFridge extends Component {

  render(){
    const allIngredients = this.props.allIngredients.map(ingredient => <IngredientCard key={ingredient.id} ingredient={ingredient} handleClick={this.props.handleClick} selectedIngredients={this.props.selectedIngredients} />)
    return(
      <div>
        <Segment inverted>
          <h2>My Fridge</h2>
          <Button inverted color='blue' onClick={()=>this.props.handleFindRecipeClick(this.props.selectedIngredients)}> Find Recipes</Button>
          <div>
            <p>Your Ingredients: {this.props.selectedIngredients.join("  ,  ")}</p>
          </div>
        </Segment>
        <div>
          <Grid centered>
            { allIngredients }
          </Grid>
        </div>
      </div>
    )
  }
}

export default YourFridge;
