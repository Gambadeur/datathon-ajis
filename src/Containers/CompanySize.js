import React, { Component } from 'react';

class CompanySize extends Component {
	render() {
		return (
			<div className="CompanySize screen" style={{ backgroundColor: '#EFFF00' }}>
				<h1>CompanySize</h1>


				<div className="next-page-btn"
					onClick={() => this.props.goToNextPage(1)}>
					<i className="fa fa-arrow-right" style={{ color: '#EFFF00' }}></i>
				</div>
			</div >
		);
	}
}

export default CompanySize;
