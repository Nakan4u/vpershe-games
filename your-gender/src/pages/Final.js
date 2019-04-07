import React from "react";
import { Link } from "react-router-dom";
import startIcon from "../img/icons/flag-start.svg";
import finishIcon from "../img/icons/flag-finish.svg";
import arrowIcon from "../img/icons/arrow.svg";
import photo from "../img/assets/Illustration-final.png";

export const Final = () => {
    return (
      <div className="final">
        <div className="progressBar">
          <img className="flagIcon startIcon" src={startIcon} alt="start icon" />
          <span className="track" style={{ width: "100%" }} />
          <img
            className="flagIcon finishIcon"
            src={finishIcon}
            alt="finish icon"
          />
        </div>
        <img
          src={photo}
          alt="congratulation picture"
        />
        <h2>Вітаємо! Вашій дитині буде соромно на першому уроці географії.</h2>
        <article className="usefullLink">
          <p>
            <img
              src="https://vpershe.com/assets/uploads/village.jpg"
              height="100"
              alt="test"
            />
            <a
              href="https://vpershe.com/sexoteca/yak-hovoryty-z-ditmy-pro-sex-village"
              target="blank"
            >
              Як говорити з дітьми про секс - The Village Україна
            </a>
            <img className="arrowIcon" src={arrowIcon} alt="arrow icon" />
          </p>
        </article>
        <Link to="/" className="button">
          Спробувати інші дурні відповіді
        </Link>
      </div>
    );
  }