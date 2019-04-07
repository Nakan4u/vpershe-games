import React from "react";
import { Link } from "react-router-dom";
import photo from "../img/assets/Illustration-main.png";

export const Home = () => {
    return (
      <div className="home">
        <h1>А звідки я взявся?</h1>
        <img
          src={photo}
          alt="Illustration-main"
        />
        <Link to="/game" className="button">
          ГРАТИ
        </Link>
      </div>
    );
  }