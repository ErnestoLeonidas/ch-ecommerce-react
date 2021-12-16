import React from "react";
import { Link } from "react-router-dom";

import CardWidget from './CardWidget';

const NavBar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark text-white" id="navbar">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 fs-4">NEW ERA STORE</span>
				</Link>
				<div className="ml-auto">
				<Link to="/">
					<span className="navbar-brand mb-0 fs-4">Unique</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 fs-4">In Offers</span>
				</Link>
				<Link to="/">				
					<span className="navbar-brand mb-0 fs-2">Contact Us</span>
				</Link>
				<Link to="/">
					<CardWidget />
				</Link>      
				</div> 
			</div>
		</nav>
	);
};

export default NavBar;




