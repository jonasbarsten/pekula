import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';

import './ShowSingle.css';
import data from './Shows.json';

class ShowSingle extends Component {

	generateTextOverlay (text, repetitions) {
		let result = [];

		if (!repetitions) {
			result.push(text);
		}

		for (let i = 0; i < repetitions; i++) {
			result.push(text);
		};

		return result;
	}

	render () {

		const slug = this.props.slug;
		const show = data.shows.find((i) => {return i.slug === slug});

		if (!show) {
			return (
				<div>No such show :/</div>
			);
		}

		const name = this.props.clickable ?
			<Link to={`/shows/${slug}`}><h1>{show.name}</h1></Link> :
			<h1>{show.name}</h1>;

		const ticketPre = show.ticketUrl ? 
			<div className="col-md-1 offset-md-1 text-center">
				<a href={show.ticketUrl} target="self"><span className="rotate-minus-90"><u>GET TICKETS</u></span></a>
			</div> : <div className="col-md-1 offset-md-1"></div>;

		const ticketPost = show.ticketUrl ?
			<div className="col-md-1 offset-md-1 text-center">
				<a href={show.ticketUrl} target="self"><span className="rotate-plus-90"><u>GET TICKETS</u></span></a>
			</div> : <div className="col-md-1 offset-md-1"></div>;


		return (
			<div className="ShowSingle">
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

				{show.content.map((item) => {

					switch(item.type) {
						case 'image':
							return (
								<div className="row" key={item._id}>
									<div 
										className="col-md-10 offset-md-1"
										style={{marginTop: item.marginTop}}
									>
										<Fade bottom distance="1%">
											<img 
												alt={item.alt}
												src={item.location}
												className="img-fluid"
												style={{
													minWidth: '100%',
													objectFit: 'cover'
												}}
											/>
										</Fade>
									</div>
								</div>
							);

						case 'background':
							return (
								<div className="row" key={item._id}>
									<Fade right distance="1%">							
										<img 
											alt={item.alt}
											src={item.location} 
											className="img-fluid"
											style={{
												transform: item.transform,
												marginTop: item.marginTop,
												zIndex: item.zIndex,
												position: 'relative',
												minWidth: '100%',
												objectFit: 'cover'
											}}
										/>
									</Fade>
								</div>
							);

						case 'textOverlay':

							if (!item.repetitions) {
								item.repetitions = 1;
							};

							const overlayContent = this.generateTextOverlay(item.text, item.repetitions);

							return (
								<div className="row" key={item._id}>
									<Fade left distance="1%">
										<div 
											className="col text-center text-overlay"
											style={{
												color: item.color
											}}
										>
										{overlayContent.map((text, i) => {
											return (
												<h2 key={i}>{text}</h2>
											);
										})}
										</div>
									</Fade>
								</div>
							);

						default:
							return null;
					}

				})}

			</div>
		);
	}
}

export default ShowSingle;