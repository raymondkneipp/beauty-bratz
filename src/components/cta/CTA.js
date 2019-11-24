import React from "react";
import { Link } from "react-router-dom";
import "./cta.css";

const CTA = () => {
  return (
    <div id="cta">
      <div className="container">
        <h3>Reach Out Today</h3>
        <h4>Begin Your Beauty Journey Here</h4>
        <div className="buttons">
          <a
            href="https://goo.gl/maps/FuMxZtxi365gRSfy6"
            className="cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
          <Link to="/contact/" className="sub">
            Contact Us
          </Link>
        </div>
        <Link to="/services/" className="text">
          Browse Our Services
        </Link>
      </div>
    </div>
  );
};

export default CTA;
