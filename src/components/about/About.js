import React from "react";
import "./about.css";

import owner from "../../images/owner.jpg";

const About = () => {
	return (
		<div id="about">
			<div className="container">
				<div className="layout">
					<div className="head">
						<img src={owner} className="owner" alt="Gail Gibson" />
						<h2>Gail Gibson</h2>
						<h3>Trichologist</h3>
						<h4>Specialist in hair and scalp care</h4>
					</div>
					<div className="body">
						<h3>About Us</h3>
						<p>
							Beauty Bratz is owned and managed by Gail Gibson. We focus on
							clients with thinning hair and hair loss. Using hair pieces and
							wigs we can have you looking young again. Along with hair loss
							treatments we also provide hair cut, color, and styling. Come see
							us today for a free consultation.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
