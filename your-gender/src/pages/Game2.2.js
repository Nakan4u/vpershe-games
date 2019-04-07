import React from "react";
import { Link } from "react-router-dom";
import startIcon from "../img/icons/flag-start.svg";
import finishIcon from "../img/icons/flag-finish.svg";
import photo from "../img/assets/Illustration-2.png";

export function Game22() {
    return (
      <div className="question">
        <div className="progressBar">
          <img className="flagIcon startIcon" src={startIcon} alt="start icon" />
          <span className="track" style={{ width: "50%" }} />
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
        <h2>А що вони там роблять?</h2>
        <div className="answers">
          <Link to="/game3" className="button">
            Чекають, поки за ними прилетить лелека.
          </Link>
          <Link to="/final" className="button">
            Не знаю, спитай у мами/тата.
          </Link>
        </div>
      </div>
    );
  }