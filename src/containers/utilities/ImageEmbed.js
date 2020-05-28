import React from 'react';

const ImageEmbed = (props) => {

	let sideOffset = props.right ? "offset-md-2" : null;
	let center = props.center ? "col" : "col-md-10";
	const rotate = props.rotate ? props.rotate : 0;
	const alt = props.alt ? props.alt : 'No description available, sorry!';
	const fuckCenter = props.fuckCenter ? null : 'justify-content-center';
	const col = props.col ? props.col : 'col-md-8';


	if (props.small && props.right) {
		sideOffset = "offset-md-4";
		center = "col-md-8";
	}

	if (props.small && props.left) {
		sideOffset = "offset-md-1";
		center = "col-md-8";
	}

	return (
		<div 
			className={`row ${fuckCenter}`}
			style={{
				position: 'relative',
				zIndex: 3,
				marginTop: '60px',
				transform: `rotate(${rotate}deg)`
			}}
		>
			<div className={col}>
				<div className="row">
					<div className={`${center} ${sideOffset}`}>
						<img 
							src={props.src} 
							className="img-fluid"
							alt={alt}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ImageEmbed;