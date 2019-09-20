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
					<Link to="/contact/" className="cta">
						Schedule Appointment
					</Link>
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
