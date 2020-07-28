import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
class Header extends Component {
	render() {
		return (
			<div>
				<header>
					<h1>Work Finder</h1>
					<nav>
						<Link to='/'>Home</Link>
						<Link to='../Refine/Refine.js'>Refine your search</Link>
					</nav>
				</header>
			</div>
		);
	}
}

export default Header;
