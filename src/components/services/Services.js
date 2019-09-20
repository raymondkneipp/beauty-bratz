import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import "./services.css";

const Services = () => {
	return (
		<>
			<div id="services">
				<header>
					<h1>Services</h1>
					<p>What can Beauty Bratz do for you?</p>
				</header>
				<div className="container">
					<div className="card">
						<span className="fas fa-puzzle-piece"></span>
						<h3>Hair Pieces</h3>
						<p>
							Feel young again and get your hair back. We offer hair pieces in
							human hair, synthetic hair, and blends of both.
						</p>
						<Link to="/contact/">Free Quote</Link>
					</div>
					<div className="card">
						<span className="fas fa-user-alt"></span>
						<h3>Wigs</h3>
						<p>
							Natural looking wigs where you can't even tell you are wearing
							one. Wigs are offered with human hair, synthetic, and blends.
						</p>
						<Link to="/contact/">Free Quote</Link>
					</div>
					<div className="card">
						<span className="fas fa-spray-can"></span>
						<h3>Style</h3>
						<p>Make sure you look great on that special occasion.</p>
						<Link to="/contact/">Free Quote</Link>
					</div>
					<div className="card">
						<span className="fas fa-cut"></span>
						<h3>Hair Cut</h3>
						<p>
							Professional hair cuts that will make you feel great about
							yourself.
						</p>
						<Link to="/contact/">Free Quote</Link>
					</div>
					<div className="card">
						<span className="fas fa-palette"></span>
						<h3>Hair Color</h3>
						<p>
							Looking to change your hair up a bit? Beauty Bratz offers changing
							the base color, base color and hilites, Bali Asji, and Glaz.
						</p>
						<Link to="/contact/">Free Quote</Link>
					</div>
					<div className="card">
						<span className="fas fa-plus"></span>
						<h3>Hair Extensions</h3>
						<p>
							Hair extensions are offered in human hair, synthetic, and blends.
						</p>
						<Link to="/contact/">Free Quote</Link>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Services;
