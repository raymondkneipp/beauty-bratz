import React from "react";
import "./share.css";

const Share = () => {
	return (
		<div className="share">
			<div className="container">
				<a
					href="https://www.facebook.com/Beauty-Bratz-603888769684080/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="fab fa-facebook-square"></span>
				</a>
				<a
					href="https://www.instagram.com/gailsabrat/?igshid=oysa7hga9or6"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="fab fa-instagram"></span>
				</a>
				<a
					href="https://twitter.com/skidmoregibson"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="fab fa-twitter-square"></span>
				</a>
			</div>
		</div>
	);
};

export default Share;
