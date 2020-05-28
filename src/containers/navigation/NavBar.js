import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

class NavBar extends Component {
	render () {
		return (
			<div className="NavBar">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col">
							<NavLink to="/shows" className="hover-line">SHOWS</NavLink>
						</div>
						<div className="col text-center">
							<NavLink to="/artists" className="hover-line">ARTISTS</NavLink>
						</div>
						<div className="col text-right">
							<NavLink to="/about" className="hover-line">ABOUT</NavLink>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NavBar;