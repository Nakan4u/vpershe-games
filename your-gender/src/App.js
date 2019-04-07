import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from "./img/logo.svg";
import "./App.scss";
import { Social } from "./components/social";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { Game21 } from "./pages/Game2.1";
import { Game22 } from "./pages/Game2.2";
import { Game23 } from "./pages/Game2.3";
import { Final } from "./pages/Final";


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <a href="https://vpershe.com/" target="blank">
            <img src={logo} alt="logo" width="113" />
          </a>
          <Social />
        </header>
        <main>
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/game" component={Game} />
              <Route path="/game1" component={Game21} />
              <Route path="/game2" component={Game22} />
              <Route path="/game3" component={Game23} />
              <Route path="/final" component={Final} />
            </div>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
