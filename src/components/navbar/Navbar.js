import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";

import logo from "../../images/beauty-bratz.svg";
import "./navbar.css";

const Navbar = ({ location, history }) => {
	const [open, setOpen] = useState(false);
	const [filled, setFilled] = useState(false);

	useEffect(() => {
		setFilled(location.pathname !== "/" ? true : false);

		const unlisten = history.listen(() => {
			window.scrollTo(0, 0);
		});
		return () => {
			unlisten();
		};
	}, [location.pathname, filled, history]);

	return (
		<nav className={(open ? "open" : "") + (filled ? " dark" : "")}>
			<img src={logo} alt="Beauty Bratz" className="logo" />

			<button
				type="button"
				id="toggle"
				onClick={() => {
					setOpen(!open);
				}}
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</button>

			<ul className={open ? "open" : "close"}>
				<li>
					<NavLink
						exact
						activeClassName="active"
						to="/"
						onClick={() => setOpen(false)}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						activeClassName="active"
						to="/services/"
						onClick={() => setOpen(false)}
					>
						Services
					</NavLink>
				</li>
				{/* <li>
					<NavLink activeClassName="active" to="/products/" onClick={() => setOpen(false)}>
						Products
					</NavLink>
				</li> */}
				<li>
					<NavLink
						activeClassName="active"
						to="/contact/"
						onClick={() => setOpen(false)}
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default withRouter(Navbar);
