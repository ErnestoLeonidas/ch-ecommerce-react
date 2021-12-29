import React from "react";
import { Link } from "react-router-dom";

import CardWidget from './CardWidget';


const NavBar = ({links}) => {
	return (
		<nav className="navbar navbar-dark bg-dark text-white" id="navbar">
			<div className="container">

				<Link to="/">
					<span className="navbar-brand mb-0 fs-4">NEW ERA STORE</span>
				</Link>
				<div className="ml-auto">
				{links.map((link)=>{
					return (<Link key={link.id} to={link.href}>
								<span className="navbar-brand mb-0 fs-4">{link.nombre}</span>
							</Link>);
				})}

				<Link to="/">
					<CardWidget />
				</Link>    
				  
				</div> 
			</div>
		</nav>
	);
};

export default NavBar;




