import React from "react";
import { Link } from "react-router-dom";
import startIcon from "../img/icons/flag-start.svg";
import finishIcon from "../img/icons/flag-finish.svg";
import photo from "../img/assets/Illustration-3.png";

export function Game23() {
    return (
      <div className="question">
        <div className="progressBar">
          <img className="flagIcon startIcon" src={startIcon} alt="start icon" />
          <span className="track" style={{ width: "75%" }} />
          <img
            className="flagIcon finishIcon"
            src={finishIcon}
            alt="finish icon"
          />
        </div>
        <img
          src={photo}
          height="200"
          alt="test"
        />
        <h2>А діткам там не холодно?</h2>
        <div className="answers">
          <Link to="/final" className="button">
            Ні, вони у хмаринках, там тепло
          </Link>
          <Link to="/final" className="button">
            Не знаю, спитай у мами/тата
          </Link>
        </div>
      </div>
    );
  }