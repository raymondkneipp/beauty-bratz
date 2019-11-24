import React, { useState } from "react";
import "./testimonials.css";
import five from "../../images/clients/5.jpg";
import seven from "../../images/clients/7.jpg";
import one from "../../images/clients/1.jpg";
import six from "../../images/clients/6.jpg";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div id="testimonials">
      <div className="blur">
        <div className="container">
          <h2>Meet Happy Customers</h2>
          <div className="slider">
            <div className="card" style={{ left: `-${currentSlide * 100}%` }}>
              <div
                className="photo"
                style={{ backgroundImage: `url(${five})` }}
              ></div>
              <p>
                They were able to give me my hair back make me look young again!
              </p>
            </div>
            <div className="card" style={{ left: `-${currentSlide * 100}%` }}>
              <div
                className="photo"
                style={{ backgroundImage: `url(${seven})` }}
              ></div>
              <p>
                I love how they are so personal for each client. They take there
                time and do a phenomenal job!
              </p>
            </div>
            <div className="card" style={{ left: `-${currentSlide * 100}%` }}>
              <div
                className="photo"
                style={{ backgroundImage: `url(${one})` }}
              ></div>
              <p>
                Whether you are struggling with hair loss or just need a hair
                cut, this is the place to go!
              </p>
            </div>
            <div className="card" style={{ left: `-${currentSlide * 100}%` }}>
              <div
                className="photo"
                style={{ backgroundImage: `url(${six})` }}
              ></div>
              <p>
                I had the pleasure of meeting Gail and she is certainly a lady
                on top of her game!
              </p>
            </div>
          </div>
          <div className="dots">
            <button
              className={"dot" + (currentSlide === 0 ? " active" : "")}
              onClick={() => setCurrentSlide(0)}
            ></button>
            <button
              className={"dot" + (currentSlide === 1 ? " active" : "")}
              onClick={() => setCurrentSlide(1)}
            ></button>
            <button
              className={"dot" + (currentSlide === 2 ? " active" : "")}
              onClick={() => setCurrentSlide(2)}
            ></button>
            <button
              className={"dot" + (currentSlide === 3 ? " active" : "")}
              onClick={() => setCurrentSlide(3)}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
