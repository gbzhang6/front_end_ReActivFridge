import React, { Component } from 'react';
import logo from './logo.svg';
import fridge from './fridge_closed.svg';
import './App.css';
import Index from "./containers/Index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={fridge} className="Fridge-logo" alt="fridge logo" />
          <h1 className="App-title">Welcome to reActivFridge</h1>
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
