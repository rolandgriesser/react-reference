import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component1 } from './components/component1';
import { Component2 } from './components/component2';

// const = can't reassign value
// let = can reassign value

// whenever there is no logic, a method is sufficient, instead of inheriting from Component
const App = () => {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Component1 />
      <Component2 buttonLabel='Increase' />
    </div>
  );  
};

export default App;
