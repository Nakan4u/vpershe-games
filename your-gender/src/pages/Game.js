import React from "react";
import { Link } from "react-router-dom";
import startIcon from "../img/icons/flag-start.svg";
import finishIcon from "../img/icons/flag-finish.svg";

export function Game() {
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
          src="https://vpershe.com/assets/uploads/illustration_sex.png"
          height="200"
          alt="test"
        />
        <h2>А звідки я взявся?</h2>
        <div className="answers">
          <Link to="/final" className="button">
            Розказати правду відповідно до віку дитини, не шокуючи її подробицями
          </Link>
          <Link to="/final" className="button">
            Тебе лелека приніс
          </Link>
          <Link to="/final" className="button">
            В капусті знайшовся
          </Link>
          <Link to="/final" className="button">
            В магазині купили
          </Link>
        </div>
      </div>
    );
  }