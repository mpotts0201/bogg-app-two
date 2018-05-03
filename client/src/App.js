import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Index from './components/Index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Index/>
      </div>
    );
  }
}

export default App;
