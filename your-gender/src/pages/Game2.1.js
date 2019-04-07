import React from "react";
import { Link } from "react-router-dom";
import startIcon from "../img/icons/flag-start.svg";
import finishIcon from "../img/icons/flag-finish.svg";
import photo from "../img/assets/Illustration-1.png";

export function Game21() {
    return (
      <div className="question">
        <div className="progressBar">
          <img className="flagIcon startIcon" src={startIcon} alt="start icon" />
          <span className="track" style={{ width: "25%" }} />
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
        <h2>А де він мене взяв?</h2>
        <div className="answers">
          <Link to="/game2" className="button">
            На небі, де багато-багато діточок
          </Link>
          <Link to="/final" className="button">
            Не знаю, спитай у мами/тата
          </Link>
          <Link to="/final" className="button">
           В магазині
          </Link>
        </div>
      </div>
    );
  }