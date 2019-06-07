import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

const Nav = props => (
	<nav id="nav" className={props.sticky ? 'alt' : ''}>
		<Scrollspy items={['intro', 'features', 'benefits', 'cta']} currentClassName="is-active" offset={-300}>
			<li>
				<Scroll type="id" element="intro">
					<a href="#service">About us</a>
				</Scroll>
			</li>
			<li>
				<Scroll type="id" element="features">
					<a href="#features">Super Heores</a>
				</Scroll>
			</li>
			<li>
				<Scroll type="id" element="benefits">
					<a href="#benefits">Super-Villains </a>
				</Scroll>
			</li>
			<li>
				<Scroll type="id" element="cta">
					<a href="#cta">Choose Favorite</a>
				</Scroll>
			</li>
		</Scrollspy>
	</nav>
);

export default Nav;
