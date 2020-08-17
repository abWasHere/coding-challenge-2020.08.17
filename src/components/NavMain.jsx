import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
	return (
		<div className="NavMain">
			<ul>
				<li>
					<NavLink exact to="/">
						Home
					</NavLink>
				</li>
			</ul>
			<ul>
				<li>
					<NavLink to="/temperature"> Temperature </NavLink>
				</li>
			</ul>
			<ul>
				<li>
					<NavLink to="/customize-image"> Custom Image </NavLink>
				</li>
			</ul>
		</div>
	);
};

export default NavMain;
