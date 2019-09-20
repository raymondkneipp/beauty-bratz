import React from "react";

import Hero from "../hero/Hero";
import Share from "../share/Share";
import Grid from "../grid/Grid";
import About from "../about/About";
import Testimonials from "../testimonials/Testimonials";
import Location from "../location/Location";
import Footer from "../footer/Footer";
import CTA from "../cta/CTA";

const Home = () => {
	return (
		<>
			<Hero />
			<Share />
			<Grid />
			<About />
			<Testimonials />
			<Location />
			<CTA />
			<Footer />
		</>
	);
};
export default Home;
