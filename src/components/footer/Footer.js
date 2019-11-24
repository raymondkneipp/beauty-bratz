import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import rk from "../../images/rk.svg";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="col">
          <h6>Pages</h6>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <h6>Contact Us</h6>
          <ul>
            <li>gailsbeautybratz@gmail.com</li>
            <li>(513) 560-9831</li>
            <li>453 Main Street, Suite #5 Milford, Ohio</li>
          </ul>
        </div>
        <div className="col">
          <h6>Hours</h6>
          <div className="grid">
            <div className="day">Sunday</div>
            <div className="hours">Closed</div>
            <div className="day">Monday</div>
            <div className="hours">Closed</div>
            <div className="day">Tuesday</div>
            <div className="hours">9am to 5pm</div>
            <div className="day">Wednesday</div>
            <div className="hours">9am to 5pm</div>
            <div className="day">Thursday</div>
            <div className="hours">9am to 5pm</div>
            <div className="day">Friday</div>
            <div className="hours">9am to 5pm</div>
            <div className="day">Saturday</div>
            <div className="hours">Closed</div>
          </div>
        </div>
        <div className="col">
          <h6>Share</h6>

          <ul className="shareList">
            <li>
              <a
                href="https://www.facebook.com/Beauty-Bratz-603888769684080/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fab fa-facebook-f"></span>
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gailsabrat/?igshid=oysa7hga9or6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fab fa-instagram"></span>
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/skidmoregibson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fab fa-twitter"></span>
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gail-gibson-skidmore-902979159/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fab fa-linkedin-in"></span>
                <span className="label">Linkedin</span>
              </a>
            </li>
          </ul>
          <a
            href="https://raymondkneipp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rk"
          >
            <img src={rk} alt="Raymond Kneipp" /> Web Design
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
