import React from "react";
import { Link } from "react-router-dom";


const navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark text-white" id="navbar">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 fs-4">STAR WARS STORE</span>
				</Link>
				<div className="ml-auto">
				<Link to="/">
					<span className="navbar-brand mb-0 fs-4">Movies</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 fs-4">Mandalorian</span>
				</Link>
				<Link to="/">				
					<span className="navbar-brand mb-0 fs-2">Contact Us</span>
				</Link>
				<Link to="/">
					<span className="btn btn-round btn-danger">Buy Now</span>
				</Link>
				              
				</div> 
			</div>
		</nav>
	);
};

export default navbar;


