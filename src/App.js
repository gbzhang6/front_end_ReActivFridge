import React, { Component } from 'react';
import fridge from './fridge_closed.svg';
import './App.css';
import Index from "./containers/Index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to reActivFridge</h1>
          <img src={fridge} className="Fridge-logo" alt="fridge logo" />
        </header>
        < Index />
      </div>
    );
  }
}

export default App;

/*make sure to credit these guys:
Fridge by Vectors Market from the Noun Project
*/
