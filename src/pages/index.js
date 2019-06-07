import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Waypoint } from 'react-waypoint';

import Layout from '../components/layout';
import Header from '../components/Header';
import Nav from '../components/Nav';
import pic01 from '../assets/images/pic01.png';
import ant from '../assets/images/ant.png';
import bat from '../assets/images/bat.png';
import cap from '../assets/images/cap.png';
import iron from '../assets/images/iron.png';
import spidr from '../assets/images/spidr.png';
import thor from '../assets/images/thor.png';
import joker from '../assets/images/joker.png';
import loki from '../assets/images/loki.png';
import venom from '../assets/images/venom.png';
import sinister from '../assets/images/sinister.png';
import shredder from '../assets/images/shredder.png';
import deathstroke from '../assets/images/deathstroke.png';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stickyNav: false
		};
	}

	_handleWaypointEnter = () => {
		this.setState(() => ({ stickyNav: false }));
	};

	_handleWaypointLeave = () => {
		this.setState(() => ({ stickyNav: true }));
	};

	render() {
		return (
			<Layout>
				<Helmet title="FIghter Portal" />

				<Header />

				<Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave} />
				<Nav sticky={this.state.stickyNav} />

				<div id="main">
					<section id="intro" className="main">
						<div className="spotlight">
							<div className="content">
								<header className="major">
									<h2>About us</h2>
								</header>
								<p>
								A superhero (sometimes rendered super-hero or super hero or Super) is a type of heroic stock character,
								 usually possessing supernatural or superhuman powers, who is dedicated to fighting the evil of their universe,
								 protecting the public, and usually battling super-villains. A female superhero is sometimes called a super-heroine
								  (also rendered super-heroine or super heroine), although the word superhero is also commonly used for females. Superhero fiction is
									 the genre of fiction that is centered on such characters, especially in American comic book and films since the 1930s.
								</p>
								<p></p>
								{/* <ul className="actions">
									<li>
										<Link to="/generic" className="button">
											Learn More
										</Link>
									</li>
								</ul> */}
							</div>
							<span className="screenshot">
								<img src={pic01} alt="" />
							</span>
						</div>
					</section>

					<section id="features" className="main special">
						<header className="major">
							<h2>List of Heores</h2>
						</header>
						<ul className="features">
							<li>
							<span> <img src={iron} alt="" width="200" height="100" /> </span>
								<h3>Iron-Man</h3>
								 <a href ="https://superheroes.fandom.com/wiki/Iron_Man">ReadMore</a>
							</li>
							<li>
									<span> <img src={cap} alt="" width="200" height="100" /> </span>
								<h3>Capitan America</h3>
								 <a href ="https://superheroes.fandom.com/wiki/Captain_America">ReadMore</a>
							</li>
							<li>
							<span> <img src={thor} alt="" width="200" height="100" /> </span>
								<h3>Thor</h3>
								<a href ="https://superheroes.fandom.com/wiki/Thor">ReadMore</a>
							</li>
							<li>
							<span> <img src={spidr} alt="" width="200" height="100" /> </span>
								<h3>Thor</h3>
								<a href ="https://www.superherostuff.com/biographies/spideybio.html">ReadMore</a>
							</li>
							<li>
							<span> <img src={bat} alt="" width="200" height="100" /> </span>
								<h3>Thor</h3>
								<a href ="https://en.wikipedia.org/wiki/Batman">ReadMore</a>
							</li>
							<li>
							<span> <img src={ant} alt="" width="200" height="100" /> </span>
								<h3>Thor</h3>
								<a href ="https://mashable.com/article/ant-man-good-superhero-movie/">ReadMore</a>
							</li>
						</ul>
						{/* <footer className="major">
							<ul className="actions">
								<li>
									<Link to="/generic" className="button">
										Learn More
									</Link>
								</li>
							</ul>
						</footer> */}
					</section>

					<section id="benefits" className="main special">
						<header className="major">
							<h2>Super-Villains</h2>
								</header>
							<ul className="features">
								<li>
								<span> <img src={joker} alt="" width="200" height="100" /> </span>
									<h3>Joker</h3>
									 <a href ="https://comicvine.gamespot.com/joker/4005-1702/">ReadMore</a>
								</li>
								<li>
										<span> <img src={loki} alt="" width="200" height="100" /> </span>
									<h3>Loki</h3>
									 <a href ="https://comicvine.gamespot.com/loki/4005-4324/">ReadMore</a>
								</li>
								<li>
								<span> <img src={venom} alt="" width="200" height="100" /> </span>
									<h3>Venom</h3>
									<a href ="https://comicvine.gamespot.com/venom/4005-1486/">ReadMore</a>
								</li>
								<li>
								<span> <img src={sinister} alt="" width="200" height="100" /> </span>
									<h3>Sinister</h3>
									<a href ="https://comicvine.gamespot.com/mr-sinister/4005-3179/">ReadMore</a>
								</li>
								<li>
								<span> <img src={shredder} alt="" width="200" height="100" /> </span>
									<h3>Shredder</h3>
									<a href ="https://comicvine.gamespot.com/shredder/4005-42406/">ReadMore</a>
								</li>
								<li>
								<span> <img src={deathstroke} alt="" width="200" height="100" /> </span>
									<h3>Death Stroke</h3>
									<a href ="https://comicvine.gamespot.com/deathstroke/4005-3588/">ReadMore</a>
								</li>
							</ul>
						{/* <footer className="major">
							<ul className="actions">
								<li>
									<Link to="/generic" className="button">
										Learn More
									</Link>
								</li>
							</ul>
						</footer> */}
					</section>

					<section id="cta" className="main special">
						<header className="major">
							<h2>Vote for Your Heros</h2>
							<p>
							You can vote for your favorites heroes and villains to display at the top
								<br />
							It will take 5 mins only
							</p>
						</header>
						<footer className="major">
							<ul className="actions">
								<li>
									<Link to="/generic" className="button special">
										Get Started
									</Link>
								</li>
								{/* <li>
									<Link to="/generic" className="button">
										Learn More
									</Link>
								</li> */}
							</ul>
						</footer>
					</section>
				</div>
			</Layout>
		);
	}
}

export default Index;
