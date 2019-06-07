import React from 'react';
import { Link } from 'gatsby';

// import logo from '../assets/images/logo.svg';

const Footer = props => (
	<footer id="footer">
		<section>
			<h2>The Fighter Portal</h2>
			<p>
				A superhero (sometimes rendered super-hero or super hero or Super)
				is a type of heroic stock character, usually possessing supernatural
				or superhuman powers, who is dedicated to fighting the evil of
				their universe, protecting the public, and usually battling super-villains.
			</p>

			{/* <ul className="actions">
				<li>
					<Link to="/generic" className="button">
						Learn More
					</Link>
				</li>
			</ul> */}
		</section>
		<section>
			<h2>Feed Back</h2>
			<dl className="alt">
				<dt>Address</dt>
				<dd>Delhi, India</dd>
				<dt>Phone</dt>
				<dd>
					<a href="00-9897-365-583">+00-9897-365-585</a>
				</dd>
				<dt>Email</dt>
				<dd>
					<a href="mailto:fighter@fighter.com">fighter@fighter.com</a>
				</dd>
			</dl>
			<ul className="icons">
				<li>
					<a href="https://twitter.com" className="icon fa-twitter alt">
						<span className="label">Twitter</span>
					</a>
				</li>
				<li>
					<a href="https://facebook.com" className="icon fa-facebook alt">
						<span className="label">Facebook</span>
					</a>
				</li>
				<li>
					<a href="https://instagram.com" className="icon fa-instagram alt">
						<span className="label">Instagram</span>
					</a>
				</li>

			</ul>
		</section>
		<p className="copyright">
			&copy; The Fighter portalo Pvt Ltd 
		</p>
	</footer>
);

export default Footer;
