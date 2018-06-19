import React, { Component } from 'react';
import IngredientCard from "../components/IngredientCard"

class YourFridge extends Component {
  render(){
    return(
      <div>
        My Fridge
        <IngredientCard />
      </div>
    )
  }
}

export default YourFridge;
