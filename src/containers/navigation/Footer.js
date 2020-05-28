import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import './Footer.css';

class Footer extends Component {

	state = {
		intervalId: 0
	};
	
	scrollStep() {
	  if (window.pageYOffset === 0) {
	      clearInterval(this.state.intervalId);
	  }
	  window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
	}
	
	scrollToTop() {
	  let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
	  this.setState({ intervalId: intervalId });
	}

	render () {
		return (
			<div className="Footer">
				<Fade>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-3 heading-container">
								<p>CONTACT:</p>
							</div>
							<div className="col-md-3 offset-md-1 contact-container">
								<p>A&R:</p>
								<p>Erlend Mokkelbost</p>
								<a href="mailto:erlend@pekula.no"><p>erlend@pekula.no</p></a>
							</div>
							<div className="col-md-3 contact-container">
								<p>Label rep:</p>
								<p>Erik Jansen</p>
								<a href="mailto:erik@pekula.no"><p>erik@pekula.no</p></a>
							</div>
							<div className="col-md-2 arrow">
								<img onClick={this.scrollToTop.bind(this)} style={{maxWidth: '15px', cursor: 'pointer'}}src="/images/arrow.svg"/>
							</div>
						</div>
					</div>
				</Fade>
			</div>
		);
	}
}

export default Footer;