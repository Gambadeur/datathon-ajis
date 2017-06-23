import React, { Component } from 'react';

class Region extends Component {
	render() {
		return (
			<div className="Region screen" style={{ backgroundColor: "#9F2300" }}>
				<h1>Region</h1>
				<button onClick={() => this.props.goToNextPage(2)}>Next page</button>
			</div>
		);
	}
}

export default Region;
