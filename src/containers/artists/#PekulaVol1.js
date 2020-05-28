import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import ReleaseCard from '../releases/ReleaseCard';
import VideoEmbed from '../utilities/VideoEmbed';
import ImageEmbed from '../utilities/ImageEmbed';

import './#PekulaVol1.css';
import releasesData from '../releases/Releases.json';

class PekulaVol1 extends Component {

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
		if (document.getElementById('pekula_1')) {
			this.setState({
				contentHeight: document.getElementById('pekula_1').offsetHeight
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
			<div id="pekula_1">
				<div className="row">
					<div id="background"
						style={{
							height: `${bgHeight + 190}px`
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
							<p>Erlend Mokkelbost - musician, producer and co-owner of Pekula Records - was asked to make 50 minutes worth of music to celebrate the clubs 15th anniversary. He immediately got the idea to change the format of how these concerts are usually created and presented. This would become Pekula Vol. 1</p>
							<p>The music was created by Simen Følstad Nilsen, Axel Skalstad and Mokkelbost, and was put together in one creatively explosive week in a studio in Northern Italy. Based on a mix of improvisation and written pieces, it became an energetic slab of music, filled with energy, warped guitar sounds and complex rhythms, held together by a red thread of arpeggiated synthesizers.</p>
							<p>The performers are drummer Axel Skalstad, bass player Ellen Brekken, keyboardist and singer Marte Eberson, guitarist Simen Følstad Nilsen, keyboardist and percussionist Jonas Barsten and keyboardist and singer Gunhild Ramsay Kristoffersen - all well known names from the Norwegian pop, jazz, electronic and rock-scenes.</p>
						</Fade>
					</div>
				</div>

				<Fade up distance="1%">
					<VideoEmbed vimeoId="298243557" right />
					<ImageEmbed src="/images/artists/pekula-vol-1-2.jpg" left />
				</Fade>


				<div 
					className="row justify-content-center"
					style={{
						marginBottom: '30px'
					}}
				>
					<div className="col-auto">
						<div style={{
							color: 'white',
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

export default PekulaVol1;