import React from "react";
import Footer from "../footer/Footer";
import Location from "../location/Location";
import "./contact.css";

const Contact = () => {
	return (
		<>
			<div id="contact">
				<header>
					<h1>Contact</h1>
					<p>We can't wait to here from you!</p>
				</header>
				<div className="container">
					<form name="contact" method="post">
						<input type="hidden" name="form-name" value="contact" />
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="John Doe"
							required
						/>
						<label htmlFor="phone">Phone</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							placeholder="(987) 654-3210"
							required
						/>
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							id="message"
							placeholder="I would like to set up an appointment."
							rows="5"
							required
						></textarea>
						<button type="submit">
							<span className="fas fa-paper-plane"></span> Send Message
						</button>
					</form>
				</div>
			</div>
			<Location />
			<Footer />
		</>
	);
};

export default Contact;
