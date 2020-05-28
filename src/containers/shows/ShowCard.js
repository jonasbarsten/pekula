import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import moment from 'moment';

import './ShowCard.css';

class ShowCard extends Component {


	render () {

		const show = this.props.show;

		if (!show) {
			return (
				<div>No such show :/</div>
			);
		}

		const showDay = moment(show.dateStart);
		const fromNow = moment().diff(showDay, 'days');

		let heading = (fromNow <= 0) ? 'UPCOMING SHOW' : 'PAST SHOW';

		if (show.dateStart === moment().format('YYYY-MM-DD')) {
			heading = 'SHOW TODAY!';
		}

		const name = this.props.clickable ?
			<Link to={`/shows/${show.slug}`}><h1>{show.name}</h1></Link> :
			<h1>{show.name}</h1>;

		const	ticketPre = (show.ticketUrl && fromNow <= 0) ? 
				<div className="col-md-1 offset-md-1 text-center">
					<a href={show.ticketUrl} target="self"><span className="rotate-minus-90"><u>GET TICKETS</u></span></a>
				</div> : <div className="col-md-1 offset-md-1"></div>;

		const	ticketPost = (show.ticketUrl && fromNow <= 0) ?
				<div className="col-md-1 offset-md-1 text-center">
					<a href={show.ticketUrl} target="self"><span className="rotate-plus-90"><u>GET TICKETS</u></span></a>
				</div> : <div className="col-md-1 offset-md-1"></div>;


		return (
			<div className="ShowCard">
				<div className="row category-heading">
					<div className="col text-center">
						<div>
							<Fade>	
								<u>{heading}</u>
							</Fade>
						</div>
					</div>
				</div>
				<div className="row heading-container align-items-center">
					<Flash>
						{ticketPre}
					</Flash>
					<div className="col-md-6 offset-md-1 text-center">
						<Fade>
							{name}
						</Fade>
					</div>
					<Flash>
						{ticketPost}
					</Flash>
				</div>
			</div>
		);
	}
}

export default ShowCard;