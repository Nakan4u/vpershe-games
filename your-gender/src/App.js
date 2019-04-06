import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <main>
          <h1>Vpershe games app</h1>
          <img src="https://vpershe.com/assets/uploads/illustration_sex.png" height="300"></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          <button>Play</button>
        </main>
        <footer>
          <a href="https://vpershe.com/" target="blank">
            <img src={logo} alt="logo" width="113"></img>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
