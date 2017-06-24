import React, { Component } from 'react';

class Conclusion extends Component {
	render() {
		return (
			<div className="Conclusion screen" style={{ backgroundColor: "#8EC3A7", color: "#fff"}}>
				{/*<h2 className="centered">Pour conclure</h2>*/}
				<h3 className="centered" style={{ marginTop: '10px' }}>Pour conclure</h3>
			

				<div className="next-page-btn-container">
					<div className="next-page-btn"
						onClick={() => this.props.goToNextPage(3)}>
						<i className="fa fa-arrow-right" style={{ color: '#8EC3A7' }}></i>
					</div>
				</div>
			</div>
		);
	}
}

export default Conclusion;