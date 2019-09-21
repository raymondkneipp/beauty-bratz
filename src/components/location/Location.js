import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./location.css";

const Location = ({ google }) => {
	const location = { lat: 39.176991, lng: -84.293102 };

	return (
		<>
			<div id="location">
				<div className="container">
					<div className="layout">
						<span className="fas fa-3x fa-envelope" />
						<p>gailsbeautybratz@gmail.com</p>

						<span className="fas fa-3x fa-map-marker-alt" />
						<p>453 Main Street, Suite #5 Milford, Ohio</p>

						<span className="fas fa-3x fa-phone" />
						<p>(513) 560-9831</p>
					</div>
				</div>
			</div>
			<div style={{ height: "100vh" }}>
				<Map google={google} zoom={18} initialCenter={location}>
					<Marker position={location} />
				</Map>
			</div>
		</>
	);
};

export default GoogleApiWrapper({
	apiKey: process.env.ACCESS_KEY
})(Location);
