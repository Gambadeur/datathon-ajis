import React, { Component } from 'react';

import CompanySize from './CompanySize';
import Region from './Region';
import ActivitySector from './ActivitySector';

class Carousel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: 0,
		}

		this.goToNextPage = this.goToNextPage.bind(this);
		this.goToHomePage = this.goToHomePage.bind(this);
	}

	getActiveComponent(elementsNumber) {
		const { active } = this.state;

		const percentage = 100 * (active * -1);

		return {
			left: `${percentage}%`
		}
	}

	goToNextPage(nextPage) {
		const carouselEl = document.getElementById('carousel');

		if (nextPage === 1) {
			carouselEl.classList.add('animate-panel1');
			this.setState({
				active: nextPage
			});
			setTimeout(() => carouselEl.classList.remove('animate-panel1'), 1000);
		}
		else if (nextPage === 2) {
			carouselEl.classList.add('animate-panel2');
			this.setState({
				active: nextPage
			});
			setTimeout(() => carouselEl.classList.remove('animate-panel2'), 1000);
		}
	}

	goToHomePage() {
		this.setState({
			active: 0
		});
	}


	render() {

		return (
			<div className="App carousel-container">
				<div id="carousel"
					style={this.getActiveComponent(3)}>
					<CompanySize goToNextPage={this.goToNextPage} />
					<Region goToNextPage={this.goToNextPage} />
					<ActivitySector goToHomePage={this.goToHomePage} />
				</div>
			</div>
		);
	}
}

export default Carousel;
