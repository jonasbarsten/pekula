import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';

import './Logo.css';

const easeInOut = (t) => { 

	const negative = (t < 0) ? true : false;

	if (negative) {
		t = t + 1;
	};

	t = t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

	if (negative) {
		t = t - 1;
	};

	return t;
};

const pathsWithLargeLogo = [
	'/',
	'/about',
	'/shows'
];

const topPostAnim = 108;

class Logo extends Component {
	state = {
		spin: 0,
		textTop: 0,
		lTop: 0,
		counter: null,
		reset: null,
		bounce: null,
		moveText: null,
		moveL: null,
		animating: false
	}

	componentWillUnmount() {
		clearInterval(this.state.counter);
		clearInterval(this.state.reset);
		clearInterval(this.state.bounce);
		clearInterval(this.state.moveText);
		clearInterval(this.state.moveL);
	}

	componentWillMount() {
		const currentLocation = this.props.location.pathname;
		const previousLocation = (this.props.lastLocation && this.props.lastLocation.pathname);

		const currentType = (pathsWithLargeLogo.indexOf(currentLocation) === -1) ? 'mini' : 'large';
		const previousType = (pathsWithLargeLogo.indexOf(previousLocation) === -1) ? 'mini' : 'large';

		if (currentType !== previousType) {

			if (!this.props.mini) {
				this.setState({
					textTop: topPostAnim,
					lTop: (topPostAnim * -1) + 55
				});
			} else if (this.props.mini) {
				this.setState({
					// textTop: topPostAnim,
					lTop: -10
				});
			}

			this.animate();

		} else if (currentType === 'mini') {

			this.setState({
				textTop: topPostAnim + 8,
				lTop: (topPostAnim * -1) + 55
			});

		} else {

			this.setState({
				lTop: -11
			});
			// Using default state for large logo
			return;
		}
	}

	startSpin() {

		clearInterval(this.state.reset);
		clearInterval(this.state.bounce);

		this.setState({
			counter: setInterval(() => {
				if (this.state.spin >= 1) {
					this.setState({spin: 0})
				};

				this.setState({
					spin: this.state.spin + 0.00014
				});
			}, 5)

		});
	}

	stopSpin() {
		clearInterval(this.state.counter);
		clearInterval(this.state.bounce);

		this.setState({
			reset: setInterval(() => {
				if (this.state.spin <= -0.015) {

					clearInterval(this.state.counter);
					clearInterval(this.state.reset);

					this.setState({
						bounce: setInterval(() => {
							if (this.state.spin >= 0) {
								clearInterval(this.state.bounce);
								this.setState({
									spin: 0
								})
							} else {
								this.setState({
									spin: this.state.spin + 0.005
								})
							}
						}, 20)
					});

				} else {
					this.setState({
						spin: this.state.spin - 0.005
					});
				};
			}, 10)
		});
	}

	animate() {

		this.setState({
			animating: true
		});

		if (this.props.mini) {

			this.setState({
				moveText: setInterval(() => {
					if (this.state.textTop > 115) {
						clearInterval(this.state.moveText);
					} else {
						this.setState({
							textTop: this.state.textTop + 1
						});
					}
				}, 10)
			});

			this.setState({
				moveL: setInterval(() => {
					if (this.state.lTop < (((topPostAnim - 1) * -1) + 55)) {
						clearInterval(this.state.moveL);
						this.setState({
							animating: false
						});
					} else {
						this.setState({
							lTop: this.state.lTop - 1
						});
					}
				}, 28)
			});

		} else {

			this.setState({
				moveText: setInterval(() => {

					if (this.state.textTop < 1) {
						clearInterval(this.state.moveText);
					} else {
						this.setState({
							textTop: this.state.textTop - 1
						});
					}
				}, 10)
			});

			this.setState({
				moveL: setInterval(() => {
					if (this.state.lTop > -12) {
						clearInterval(this.state.moveL);
						this.setState({
							animating: false
						});
					} else {
						this.setState({
							lTop: this.state.lTop + 1
						});
					}
				}, 26)
			});
		}
	}

	render () {

		const spin = Number.parseFloat(this.state.spin * 359).toFixed(2);
		const textTop = this.state.textTop;
		// const textTop = Number.parseFloat((easeInOut((this.state.textTop + topPostAnim) / (topPostAnim * 2)) * (topPostAnim * 2)) - topPostAnim).toFixed(2);
		const lTop = Number.parseFloat((easeInOut((this.state.lTop + topPostAnim) / (topPostAnim * 2)) * (topPostAnim * 2)) - topPostAnim).toFixed(2);

		let textZIndex = this.props.mini ? 1 : 3;
		let lZIndex = 3;
		// let lZIndex = this.props.mini ? 3 : 2;
		let hiddenCarpetZIndex = this.props.mini ? 2 : 1;

		if (this.state.animating) {
			textZIndex = 1;
			// lZIndex = 3;
			hiddenCarpetZIndex = 2;
		};

		return (
			<div
					// onMouseEnter={this.startSpin.bind(this)} 
					// onMouseLeave={this.stopSpin.bind(this)}
				className="Logo"
				style={{
					margin: 'auto',
					overflow: 'hidden',
					height: '240px',
					position: 'relative',
					padding: '1px'
				}}>	
				<Link to="/">	
					<div
						style={{
							top: `${textTop}px`,
							position: 'relative',
							zIndex: textZIndex
						}}
					>
						<img src="/images/logo-text.svg" alt="logo-text" />
					</div>
					<div
						style={{
							top: `${lTop}px`,
							position: 'relative',
							marginTop: '-28px'
						}}
					>
						<div
							style={{
								transform: `rotate(${spin}deg)`,
								WebkitTransform: `rotate(${spin}deg)`,
								MozTransform: `rotate(${spin}deg)`,
								msTransform: `rotate(${spin}deg)`,
								position: 'relative',
								zIndex: lZIndex
							}}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.27 219.31">
									<path d="M102.71,107.07,103.19,0h-1.6C73.16-.13,47.74,12.26,28.16,34.87,9.75,56.13.13,84.77,0,113.43c-.25,58.12,53,105.62,113.3,105.88,58.8.26,105.21-52.6,106-111.5l0-1.64Zm10.61,109C54.76,215.83,3,169.78,3.2,113.44,3.43,61,39.23,4.07,100,3.23L99.5,110.32l116.52-.9C214.4,165.74,169.6,216.34,113.32,216.09Z"/>
									<path fill="white" d="M113.32,216.09C54.76,215.83,3,169.78,3.2,113.44,3.43,61,39.23,4.07,100,3.23L99.5,110.32l116.52-.9C214.4,165.74,169.6,216.34,113.32,216.09Z"/>
								</svg>
						</div>
						<div style={{
							height: '250px',
							top: '-63px',
							position: 'relative',
							backgroundColor: 'white',
							zIndex: hiddenCarpetZIndex
						}}></div>
					</div>
				</Link>
			</div>
		);
	}
}

export default withLastLocation(Logo);