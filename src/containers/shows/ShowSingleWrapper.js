import React, { Component } from 'react';

import Logo from '../utilities/Logo';
import ShowSingle from './ShowSingle';

import './ShowSingleWrapper.css';

class ShowSingleWrapper extends Component {
	render () {
		const slug = this.props.match.params.slug;

		return (
			<div className="ShowSingleWrapper container-fluid">
				<Logo mini {...this.props} />
				<ShowSingle slug={slug} />
			</div>
		);
	}
};

export default ShowSingleWrapper;