import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
// import moment from 'moment';

import Logo from '../utilities/Logo';
import ShowCard from './ShowCard';

import data from './Shows.json';

import './AllShows.css';

class AllShows extends Component {
	render () {

		// const upcomingShows = data.shows.filter((show) => {
		// 	const dateStart = new Date(show.dateStart);
		// 	return dateStart > new Date();
		// });

		// const pastShows = data.shows.filter((show) => {
		// 	const dateStart = new Date(show.dateStart);
		// 	return dateStart < new Date();
		// });

		// const upcomingShowsHeading = (upcomingShows.length === 0) ? null :
		// 	<div className="row category-heading">
		// 		<div className="col text-center">
		// 			<div>
		// 				<Fade>	
		// 					<u>UPCOMING SHOWS</u>
		// 				</Fade>
		// 			</div>
		// 		</div>
		// 	</div>;

		// const pastShowsHeading = (pastShows.length === 0) ? null :
		// 	<div className="row category-heading">
		// 		<div className="col text-center">
		// 			<div>
		// 				<Fade>	
		// 					<u>PAST SHOWS</u>
		// 				</Fade>
		// 			</div>
		// 		</div>
		// 	</div>;

		// const spacing = (upcomingShows.length !== 0 && pastShows.length !== 0) ? '60px' : '0px';

		let shows = data.shows;

		shows.sort(function(a, b){
			const keyA = new Date(a.dateStart);
			const keyB = new Date(b.dateStart);
			// Compare the 2 dates
			if(keyA < keyB) return -1;
			if(keyA > keyB) return 1;
			return 0;
		});

		shows.reverse();

		return (
			<div className="AllShows container-fluid">
				<Logo {...this.props} />
				<Fade up distance="1%">
					<div className="shows-container">
						{shows.map((show) => {

							return (
								<div key={show._id}>
									<ShowCard show={show}/>
								</div>
							);
						})}
					</div>
				</Fade>

			</div>
		);

		// return (
		// 	<div className="AllShows container-fluid">
		// 		<Logo {...this.props} />
		// 		{upcomingShowsHeading}
		// 		{upcomingShows.map((show) => {
		// 			return <ShowSingle key={show._id} slug={show.slug} clickable={true} />
		// 		})}
		// 		<div style={{height: spacing}}></div>
		// 		{pastShowsHeading}
		// 		{pastShows.map((show) => {
		// 			return <ShowSingle key={show._id} slug={show.slug} clickable={true} />
		// 		})}
		// 	</div>
		// );
	}
};

export default AllShows;