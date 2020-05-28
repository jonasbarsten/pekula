import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Logo from '../utilities/Logo';

import './AllArtists.css';

import data from './Artists.json';

class AllArtists extends Component {
	render () {
		return (
			<div className="AllArtists container-fluid">
				<Logo mini {...this.props} />
				<div className="row justify-content-center list-container">
					<div className="col-md-10">
						{data.artists.map((artist, i) => {

							const order = (i % 2 === 1) ? 'order-md-last' : 'order-md-first';
							const offset = (i % 2 === 1) ? '' : 'offset-md-1';
							const fadeLeft = (i % 2 === 1) ? true : false;
							const fadeRight = (i % 2 === 1) ? false : true;

							return (
								<div key={artist._id}>
									<Fade left={fadeLeft} right={fadeRight} distance="1%">
										<div className="row align-items-center list-item" key={artist._id}>
										
											<div className={`col-md-2 offset-md-1 ${order} text-center`}>
												<Link to={`/artists/${artist.slug}`}><h1>{artist.name}</h1></Link>
											</div>
											<div className={`col-md-8 ${offset} zoom-on-hover`}>
												<Link to={`/artists/${artist.slug}`}>
													<img 
														alt={artist.name}
														src={artist.imageUrl} 
														className="img-fluid" 
														style={{objectFit: 'cover', width: '100%', height: '450px', padding: '0px 10px'}}
													/>
												</Link>
											</div>
										
										</div>
									</Fade>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
};

export default AllArtists;