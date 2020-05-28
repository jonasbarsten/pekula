import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import ReleaseCard from '../releases/ReleaseCard';
import VideoEmbed from '../utilities/VideoEmbed';
import ImageEmbed from '../utilities/ImageEmbed';

import './#AimingForEnrike.css';
import releasesData from '../releases/Releases.json';

class AimingForEnrike extends Component {

	state = {
		contentHeight: 0
	}

	componentDidMount () {

		// Wait for content to load
		setTimeout(() => {
			this.updateDimensions();
		}, 100);
		
		window.addEventListener("resize", this.updateDimensions.bind(this));
	}

	componentWillUnmount () {
		window.removeEventListener("resize", null);
	}

	updateDimensions () {
		if (document.getElementById('aiming')) {
			this.setState({
				contentHeight: document.getElementById('aiming').offsetHeight
			});
		}
	}

	render () {

		const artist = this.props.artist;

		if (!artist) {
			return <h1>No such artist :/</h1>
		}

		const releases = releasesData.releases.filter((release) => {
			return release.artistId === artist._id;
		});

		const releasesHeading = null;
		const bgElement = document.getElementById("background");
		const backgroundTopOffsetStr = bgElement ? window.getComputedStyle(bgElement, null)['top'] : null;
		const backgroundTopOffset = bgElement ? backgroundTopOffsetStr.substring(0, backgroundTopOffsetStr.length - 2) : null;

		// bg height = content height minus top offset + height of menu/logo - bottom offset
		const bgHeight = this.state.contentHeight - backgroundTopOffset + 331 - 200;

		return (
			<div id="aiming">
				<div className="row">
					<div id="background"
						style={{
							height: `${bgHeight}px`
						}}
					></div>
				</div>
				
				<div className="row heading-container">
					<div className="col text-center">
						<Fade up distance="1%">
							<h1>{artist.name}</h1>
						</Fade>
					</div>
				</div>
				<div className="row justify-content-center banner-container">
					<div className="col-md-10">
						<Fade up distance="1%">
							<img 
								alt={artist.name}
								src={artist.imageUrl} 
								className="img-fluid" 
								style={{objectFit: 'cover', minWidth: '100%', maxHeight: '600px'}}
							/>
						</Fade>
					</div>
				</div>
				<div className="row justify-content-center about-text-container">
					<div className="col-md-8" style={{color: 'black', marginTop: '30px'}}>
						<Fade>
							<p>An explosive duo from Oslo that manages to create an extremely exciting, eccentric universe by means of one drumkit, a number of interconnected guitar amps and a series of loop & effect pedals. A universe filled with jazz, noise, postpunk & funk. Adventurous, energetic, danceable and innovative… Right through the wall of sound!</p>
						</Fade>
					</div>
				</div>

				<Fade up distance="1%">
					<VideoEmbed vimeoId="298215102" right />
					<ImageEmbed src="/images/artists/aiming3.jpg" left small />
					<VideoEmbed vimeoId="298215113" right />
					<ImageEmbed src="/images/artists/aiming4.jpg" fuckCenter col='col-md-10 offset-md-1' />
					<VideoEmbed vimeoId="298215092" right />
				</Fade>

				<div 
					className="row justify-content-center"
					style={{
						marginBottom: '30px'
					}}
				>
					<div className="col-auto">
						<div style={{
							color: 'black',
							marginTop: '60px'
						}}>
							<Fade>
								<u>{releasesHeading}</u>
							</Fade>
						</div>
					</div>
				</div>

				<div className="row justify-content-center">
					{
						releases.map((release) => {
							return <ReleaseCard key={release._id} col={4} release={release} />
						})
					}
				</div>
			</div>
		)
	}
}

export default AimingForEnrike;