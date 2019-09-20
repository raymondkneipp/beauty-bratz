import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<h1>
					Beauty Bratz specializes in custom{" "}
					<span className="em">hair pieces</span> and{" "}
					<span className="em">wigs</span>. We also{" "}
					<span className="em">cut</span>, <span className="em">trim</span>,{" "}
					<span className="em">color</span>, and{" "}
					<span className="em">style</span> hair.
				</h1>
				<Link to="/contact/" className="cta">
					Get a Quote
				</Link>
			</div>
		</div>
	);
};

export default Hero;
