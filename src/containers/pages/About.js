import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import Logo from '../utilities/Logo';

import './About.css';

class About extends Component {
	render () {
		return (
			<div className="About container-fluid">
				<Logo {...this.props} />
				<div className="row content-container">
					
						<div className="col-md-5 offset-md-2 bio">
							<Fade left distance="1%">
								<p className="sub-heading">ABOUT</p>
								<p>Pekula is a brand new record label, celebrating adventurous sounds from in and outside of Norway. It’s a collaboration between Jansen Records and Erlend Mokkelbost, as well as designers Jens Jørgen Carelius Krogsveen, Jonas Barsten and photographer Frode Fjerdingstad.</p>
							</Fade>
						</div>
					
						<div className="col-md-2 offset-md-1 contact">
							<Fade right distance="1%">
								<p className="sub-heading">WE ARE</p>
								<span className="contact-list">
									<p>A&R
									<br/>Erlend Mokkelbost
									<br /><a href="mailto:erlend@pekula.no">erlend@pekula.no</a></p>

									<p>Label rep
									<br />Erik Jansen
									<br /><a href="mailto:erik@pekula.no">erik@pekula.no</a></p>


								</span>
							</Fade>
						</div>
				</div>
			</div>
		);
	}
}

export default About;