import React, { Component } from 'react';
// import Fade from 'react-reveal/Fade';

import Logo from '../utilities/Logo';

import './ArtistSingle.css';

import AimingForEnrike from './#AimingForEnrike';
import AmgalaTemple from './#AmgalaTemple';
import PekulaVol1 from './#PekulaVol1';
import PekulaVol2 from './#PekulaVol2';

import data from './Artists.json';

class ArtistSingle extends Component {
	render () {

		const slug = this.props.match.params.slug;
		const artist = data.artists.find((i) => {return i.slug === slug});

		if (!artist) {
			return (
				<div>No such artist :/</div>
			);
		}

		let artistElement = null;

		switch (artist.name) {
			case 'Aiming for Enrike':
				artistElement = <AimingForEnrike artist={artist} />
				break;
			case 'Amgala Temple':
				artistElement = <AmgalaTemple artist={artist} />
				break;
			case 'Pekula Vol. 1':
				artistElement = <PekulaVol1 artist={artist} />
				break;
			case 'Pekula Vol. 2':
				artistElement = <PekulaVol2 artist={artist} />
				break;
			default:
				artistElement = <div>No such artist :/</div>
		}

		return (
			<div className="ArtistSingle container-fluid">
				<Logo mini {...this.props} />

				{artistElement}

			</div>
		);
	}
}

export default ArtistSingle;