import React, { Component } from 'react';
import YourFridge from "./YourFridge";
import YourRecipes from "./YourRecipes";

class Index extends Component {
  render(){
    return(
      <div className="fridge">
        <YourFridge/>
        <YourRecipes/>
      </div>
    )
  }
}

export default Index;
