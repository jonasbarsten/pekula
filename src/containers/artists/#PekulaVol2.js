import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import ReleaseCard from '../releases/ReleaseCard';
import VideoEmbed from '../utilities/VideoEmbed';
import ImageEmbed from '../utilities/ImageEmbed';

import './#PekulaVol2.css';
import releasesData from '../releases/Releases.json';

class PekulaVol2 extends Component {

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
		if (document.getElementById('pekula_2')) {
			this.setState({
				contentHeight: document.getElementById('pekula_2').offsetHeight
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
		const bgHeight = this.state.contentHeight - backgroundTopOffset + 331 - 400;

		return (
			<div id="pekula_2">
				<div className="row">
					<div id="background"
						style={{
							height: `${bgHeight + 300}px`
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
					<div className="col-md-8" style={{color: 'white', marginTop: '30px'}}>
						<Fade>
							<p>Pekula Vol. 2 - ONENESS - was the second instalment in a series of commissioned work for the concert venue Parkteatret in Oslo, Norway. Where the first edition “Vol. 1 - ARP” focused more on dense, hard-hitting and energetic sounds, Vol. 2 - ONENESS instead built around a center of melodic percussion like gongs, aluphone and marimba, accompanied by a choir, 3 synthersizers, guitars and drums.</p>
							<p>The concert was attended by hundreds of people on a Friday night in Oslo, and the show was recorded and will be released in 2019 on the night of the 3rd instalment.</p>
						</Fade>
					</div>
				</div>

				<Fade up distance="1%">
					<VideoEmbed vimeoId="305467051" right />
					<ImageEmbed src="/images/artists/pekula-vol-2-2.jpg" left small />
					<VideoEmbed vimeoId="305467043" right />
					<ImageEmbed src="/images/artists/pekula-vol-2-3.jpg" />
					<ImageEmbed src="/images/artists/pekula-vol-2-4.jpg" right />
					<ImageEmbed src="/images/artists/pekula-vol-2-5.jpg" left small />
					<ImageEmbed src="/images/artists/pekula-vol-2-6.jpg" rotate={90} right />
				</Fade>

				<div 
					className="row justify-content-center"
					style={{
						marginBottom: '430px'
					}}
				>
					<div className="col-auto">
						<div style={{
							color: 'white',
							marginTop: '60px'
						}}>
							<Fade>
								<u>{releasesHeading}    </u>
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

export default PekulaVol2;