import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  const hours = [
    "Closed",
    "Closed",
    "9am to 5pm",
    "9am to 5pm",
    "9am to 5pm",
    "9am to 5pm",
    "Closed"
  ];

  const date = new Date();

  return (
    <div className="hero">
      <div className="blur">
        <div className="container">
          <h1>
            Hair Replacement Service and Salon in <strong>Milford, OH</strong>
          </h1>
          <h2>Today's Hours: {hours[date.getDay()]}</h2>
          <div className="btnGrid">
            <Link to="/contact/" className="cta">
              Free Quote
            </Link>
            <a
              href="https://goo.gl/maps/FuMxZtxi365gRSfy6"
              target="_blank"
              rel="noopener noreferrer"
              className="subCta"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
