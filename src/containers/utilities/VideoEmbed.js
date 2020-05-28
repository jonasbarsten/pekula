import React from 'react';

import './VideoEmbed.css';

const VideoEmbed = (props) => {

	const sideOffset = props.right ? "offset-md-2" : null;
	const title = ('Sorry, no title' || props.title);

	return (
		<div 
			className="row justify-content-center VideoEmbed"
			style={{
				position: 'relative',
				zIndex: 3,
				marginTop: '60px'
			}}
		>
			<div className="col-md-8">
				<div className="row">
					<div className={`col-md-10 ${sideOffset} wrapper`}>
						<iframe title={title} src={`https://player.vimeo.com/video/${props.vimeoId}`} width="640" height="360" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoEmbed;