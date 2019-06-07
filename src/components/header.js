import React from 'react';

import logo from '../assets/images/logo.png';

const Header = props => (
	<header id="header" className="alt">
		<span className="logo">
			<img src={logo} alt="" />
		</span>
		<h1>The Fighter Portal</h1>
		<p>Portal for super Heroes</p>
	</header>
);

export default Header;
