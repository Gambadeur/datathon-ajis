import React, { Component } from 'react';

class ActivitySector extends Component {
	render() {
		return (
			<div className="ActivitySector screen" style={{ backgroundColor: "#349F00" }}>
				<h1>ActivitySector</h1>
				<button onClick={() => this.props.goToHomePage()}>Home Page</button>
			</div>
		);
	}
}

export default ActivitySector;
