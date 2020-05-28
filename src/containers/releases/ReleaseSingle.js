import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import Logo from '../utilities/Logo';
import ImageEmbed from '../utilities/ImageEmbed';

import './ReleaseSingle.css';

import releaseData from './Releases.json';
import artistData from '../artists/Artists.json';



class ReleaseSingle extends Component {
	render () {
		const slug = this.props.match.params.slug;
		const release = releaseData.releases.find((i) => {return i.slug === slug});
		const links = (release && release.links) ? release.links : [];

		if (!release) {
			return (
				<div>No such release :/</div>
			);
		}

		let artist = artistData.artists.filter((artist) => {
			return artist._id === release.artistId;
		});

		artist = artist[0];

		return (
			<div className="ReleaseSingle container-fluid">
				<Logo mini {...this.props} />
				<div className="row heading-container">
					<div className="col text-center">
						<Fade>
							<h3>{artist.name}</h3>
							<h1>{release.name}</h1>
						</Fade>
					</div>
				</div>

				<div className="row justify-content-md-center">
					<div className="col-lg-6 col-md-8">

						<div className="row cover-image-container justify-content-center">
							<div className="col" style={{maxWidth: '1024px'}}>
								<Fade bottom distance="1%">
									<img
										alt={release.name} 
										src={release.imageUrl} 
										className="img-fluid"
									/>
								</Fade>
							</div>
						</div>	

						<div className="row justify-content-center link-container">
							<Fade>
							{links.map((link) => {
								return (
									<div key={link._id} className="col text-center link-wrapper">
										<a href={link.target} target="blank" className="link hover-line text-uppercase">{link.label}</a>
									</div>
								);
							})}
							</Fade>
						</div>

						<div className="row about-text-container">
							<div className="col">
								<Fade>
									{release.aboutText.map((line, i) => {
										return <p key={i}>{line}</p>
									})}
								</Fade>
							</div>
						</div>
					</div>
				</div>


				{release.content.map((item) => {
					return (
						<Fade key={item._id}>
							<div className="row justify-content-center">
								<div className="col text-center" style={{maxWidth: '80%'}}>
									<ImageEmbed src={item.location} center />
								</div>
							</div>
						</Fade>
					);
				})}

			</div>
		);
	}
}

export default ReleaseSingle;