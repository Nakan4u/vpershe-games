import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './img/logo.svg';
import startIcon from './img/icons/flag-start.svg';
import finishIcon from './img/icons/flag-finish.svg';
import './App.scss';

function Home() {
  return (
    <div className="home">
      <h1>Vpershe games app</h1>
      <img src="https://vpershe.com/assets/uploads/illustration_sex.png" height="300" alt="test"></img>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
      <Link to="/questions" className="button">Play</Link>
    </div>
  );
}

function Questions() {
  return (
  <div className="question">
    <div className="progressBar">
      <img className="flagIcon startIcon" src={startIcon} alt="start icon"></img>
      <span className="track" style={{width: '50%'}}></span>
      <img className="flagIcon finishIcon" src={finishIcon} alt="finish icon"></img>
    </div>
    <img src="https://vpershe.com/assets/uploads/illustration_sex.png" height="200" alt="test"></img>
    <h2>А звідки я взявся?</h2>
    <div className="answers">
      <Link to="/final" className="button">Розказати правду відповідно до віку дитини, не шокуючи її подробицями</Link>
      <Link to="/final" className="button">Тебе лелека приніс</Link>
      <Link to="/final" className="button">В капусті знайшовся</Link>
      <Link to="/final" className="button">В магазині купили</Link>
    </div>
  </div>
  );
}

function Final() {
  return (
    <div className="final">
      <div className="progressBar">
        <img className="flagIcon startIcon" src={startIcon} alt="start icon"></img>
        <span className="track" style={{width: '100%'}}></span>
        <img className="flagIcon finishIcon" src={finishIcon} alt="finish icon"></img>
      </div>
      <img src="https://vpershe.com/assets/uploads/illustration_sex.png" height="100" alt="test"></img>
      <h2>Вітаємо! Вашій дитині буде соромно на першому уроці географії.</h2>
      <article>
        <p>
          <img src="https://vpershe.com/assets/uploads/illustration_sex.png" height="20" alt="test"></img>
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
