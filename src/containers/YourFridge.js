import React, { Component } from 'react';
import IngredientCard from "../components/IngredientCard";
import { Card } from 'semantic-ui-react';

class YourFridge extends Component {

  render(){
    const allIngredients = this.props.allIngredients.map(ingredient => <IngredientCard key={ingredient.id} ingredient={ingredient} />)
    return(
      <div>
        <h1>My Fridge</h1>
        <Card.Group>
          { allIngredients }
        </Card.Group>
      </div>
    )
  }
}

export default YourFridge;
