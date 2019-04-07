import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
      <div className="home">
        <h1>Vpershe games app</h1>
        <img
          src="https://vpershe.com/assets/uploads/illustration_sex.png"
          height="300"
          alt="test"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore
        </p>
        <Link to="/game" className="button">
          Play
        </Link>
      </div>
    );
  }