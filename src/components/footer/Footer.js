import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../../images/icon-white.svg";
import rk from "../../images/rk.svg";

const Footer = () => {
	return (
		<div id="footer">
			<div className="container">
				<div className="col">
					<Link to="/">
						<h6>Beauty Bratz</h6>
					</Link>
				</div>
				<div className="col">
					<img src={logo} alt="Beauty Bratz" className="icon" />
				</div>
				<div className="col">
					<a
						href="https://raymondkneipp.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={rk} alt="Raymond Kneipp" className="rk" /> Web Design
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
