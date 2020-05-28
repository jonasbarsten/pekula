import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReleaseCard extends Component {
	render () {

		const release = this.props.release;
		const shadow = this.props.shadow ? 'custom-shadow' : null;
		const col = this.props.col ? this.props.col : 4;

		return (
			<div
				className={`col-sm-6 col-lg-${col} text-center zoom-on-hover`}
				style={{
					padding: '30px',
					maxWidth: '450px'
				}}
			>
				<Link to={`/releases/${release.slug}`}>
					<img
						alt={release.name}
						className={`img-fluid ${shadow}`}
						src={release.imageUrl}
						style={{maxWidth: '100%'}}
					/>
				</Link>
			</div>
		);
	}
}

export default ReleaseCard;