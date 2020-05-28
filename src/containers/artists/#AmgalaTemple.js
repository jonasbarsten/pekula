import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import ReleaseCard from '../releases/ReleaseCard';
import VideoEmbed from '../utilities/VideoEmbed';
import ImageEmbed from '../utilities/ImageEmbed';

import './#AmgalaTemple.css';
import releasesData from '../releases/Releases.json';

class AmgalaTemple extends Component {

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
		if (document.getElementById('amgala')) {
			this.setState({
				contentHeight: document.getElementById('amgala').offsetHeight
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
		const bgHeight = this.state.contentHeight - backgroundTopOffset + 331 - 150;

		return (
			<div id="amgala">
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
				<div className="row about-text-container">
					<div className="col-md-6 offset-md-2" style={{color: 'white', marginTop: '30px'}}>
						<Fade>
							<p>AMGALA TEMPLE is the sound of three musical forces combined. The result is an overwhelming clash of spontaneity and control, improvisation and clairvoyance - all meshed together in a quest to make something radiant.</p>
						</Fade>
					</div>
				</div>

				<Fade up distance="1%">
					<VideoEmbed vimeoId="298200778" right />
					<ImageEmbed src="/images/artists/amgala3.jpg" left small />
					<ImageEmbed src="/images/artists/amgala4.jpg" right />
					<div className="row about-text-container">
						<div className="col-md-6 offset-md-4" style={{color: 'white', marginTop: '30px'}}>
						
								<p>The mix of Lars Horntveth, Amund Maarud and Gard Nilssen is a wish come true for music fans, as they each have made great impact as bandleaders, solo artists and musicians in an array of projects - be it with Jaga Jazzist, Susanne Sundfør, Todd Terje, Morudes, Bushman’s Revenge, a-ha or Gard Nilssen’s Acoustic Unity.</p>
								<p>But AMGALA TEMPLE sounds little like the above. These musicians’ profound interest in old and new sounds, and their deep respect for each other, was essential in creating this space where they could create more freely - venturing into new sonic landscapes - letting whatever happens happen.</p>
								<p>Lars Horntveth´s multi-instrumentalism - playing bass, synthesizers and more, Amund Maarud´s wild guitar abilities and Gard Nilssen’s impeccable freeform drumming makes for a breathtaking sound.</p>
							
						</div>
					</div>

					<VideoEmbed vimeoId="298194813" />
					<VideoEmbed vimeoId="298189837" right />
					<ImageEmbed src="/images/artists/amgala2.jpg" left small />
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

export default AmgalaTemple;