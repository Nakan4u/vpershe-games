import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="home">
      <h1>Vpershe games app</h1>
      <img src="https://vpershe.com/assets/uploads/illustration_sex.png" height="300"></img>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
      <Link to="/questions" className="button">Play</Link>
    </div>
  );
}

function Questions() {
  return (
  <div>
    <div className="progressBar">
      <span className="progress" style={{width: '50%'}}></span>
    </div>
    <img src="https://vpershe.com/assets/uploads/illustration_sex.png" height="200"></img>
    <h2>А звідки я взявся?</h2>
    <div className="answers">
      <Link to="/final" className="button">В капусті знайшовся</Link>
      <Link to="/final" className="button">В магазині купили</Link>
    </div>
  </div>
  );
}

function Final() {
  return (
    <div>
      <div className="progressBar">
        <span className="progress" style={{width: '100%'}}></span>
      </div>
      <img src="https://vpershe.com/assets/uploads/illustration_sex.png" height="100"></img>
      <h2>Вітаємо! Вашій дитині буде соромно на першому уроці географії.</h2>
      <article>
        <p>
          <img src="https://vpershe.com/assets/uploads/illustration_sex.png" height="20"></img>
          <a href="https://vpershe.com/assets/uploads/illustration_sex.png" target="blank">
            Міфи про статеві інфекції
          </a>
        </p>
      </article>
      <Link to="/" className="button">Спробувати інші дурні відповіді</Link>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <a href="https://vpershe.com/" target="blank">
            <img src={logo} alt="logo" width="113"></img>
          </a>
        </header>
        <main>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/questions" component={Questions} />
            <Route path="/final" component={Final} />
          </div>
        </Router>
        </main>
      </div>
    );
  }
}

export default App;
