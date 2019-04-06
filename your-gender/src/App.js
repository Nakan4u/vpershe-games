import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Vpershe games app</h1>
        <footer>
          <a href="https://vpershe.com/" target="blank">
            <img src={logo} alt="logo"></img>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
