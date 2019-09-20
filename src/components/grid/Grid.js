import React from "react";
import "./grid.css";

import oneBefore from "../../images/clients/1-before.jpg";
import oneAfter from "../../images/clients/1.jpg";
import threeBefore from "../../images/clients/3-before.jpg";
import threeAfter from "../../images/clients/3.jpg";
import five from "../../images/clients/5.jpg";
import seven from "../../images/clients/7.jpg";

const Grid = () => {
	return (
		<div className="grid">
			<div className="title">Hair Pieces</div>
			<div
				className="block before"
				style={{ backgroundImage: `url(${oneBefore})` }}
			>
				Before
			</div>
			<div
				className="block after"
				style={{ backgroundImage: `url(${oneAfter})` }}
			>
				After
			</div>
			<div
				className="block before"
				style={{ backgroundImage: `url(${threeBefore})` }}
			>
				Before
			</div>
			<div
				className="block after"
				style={{ backgroundImage: `url(${threeAfter})` }}
			>
				After
			</div>
			<div className="title wigs">Wigs</div>
			<div className="block" style={{ backgroundImage: `url(${five})` }}></div>
			<div className="title style">Cut Color Style</div>
			<div className="block" style={{ backgroundImage: `url(${seven})` }}></div>
		</div>
	);
};

export default Grid;
