import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import Logo from '../utilities/Logo';
import ShowCard from '../shows/ShowCard';
import ReleaseCard from '../releases/ReleaseCard';

import './Home.css';

import releasesData from '../releases/Releases.json';
import showsData from '../shows/Shows.json';

class Home extends Component {

	state = {
		rndImg: null
	}

	randomizeImage () {
		this.setState({
			rndImg: `/images/mood/Mood ${Math.floor(Math.random() * 317) + 1}.jpeg`
		});
	}

	componentDidMount () {
		this.randomizeImage();
	}

	render () {

		const upcomingShows = showsData.shows.filter((show) => {
			const dateStart = new Date(show.dateStart);
			return dateStart > new Date();
		});

		let rndImgContainer = (upcomingShows.length !== 0) ? null :
			<div className="row" style={{marginTop: '60px'}}>
				<div 
					className="col"
					style={{
						paddingLeft: '0',
						paddingRight: '0'
					}}
				>
					<Fade up distance="1%">
						<img 
							src={this.state.rndImg} 
							className="img-fluid" 
							alt="Random mood"
							style={{
								objectFit: 'contain',
								minWidth: '100%'
							}}
							onClick={this.randomizeImage.bind(this)}
						/>
					</Fade>
				</div>
			</div>;

		// Jens didn't want this
		rndImgContainer = null;

		return (
			<div>
				<div className="Home container-fluid">
					<Logo {...this.props} />
					<div className="row about-text-container justify-content-center">
						<div className="text-center col-md-8">
							<Fade left distance="1%">
								<h3>Pekula is a record label from Oslo.</h3>
							</Fade>
						</div>
					</div>

					<Fade bottom cascade distance="1%">
						<div className="row" style={{marginTop: '80px'}}>
							<div className="col-md-10 offset-md-1">
								<div className="row justify-content-center">
									{releasesData.releases.map((release) => {
										return <ReleaseCard key={release._id} release={release} shadow />
									})}
								</div>
							</div>
						</div>
					</Fade>

					{upcomingShows.map((show) => {
						return <ShowCard key={show._id} show={show} />
					})}

					{rndImgContainer}

				</div>
			</div>
		);
	}
}

export default Home;