import React, { Component } from 'react';


const styleCompanySize = {
	margin: '0px',
	width: '100%',
	height: '100vh',
	paddingTop: '30px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	backgroundColor: '#E74C3C',
	color: 'white'
}

const paragraphe = {
	marginTop: '10px',
	textAlign: 'center',
	padding: '20px'
}

class CompanySize extends Component {
	render() {
		return (

			<div style={styleCompanySize} className="screen">
				<h2>Handicap: un emploi pour chacun</h2>
				<h3>De la TPE à la grande entreprise, quel cadre de travail semble le mieux convenir à votre situation?</h3>
				<div className="circle-container">
					<div className="circle"></div>
					<div className="circle"></div>
					<div className="circle"></div>
					<div className="circle"></div>
				</div>

				<div className="next-page-btn"
					onClick={() => this.props.goToNextPage(1)}>
					<i className="fa fa-arrow-right" style={{ color: '#EFFF00' }}></i>
				</div>

				<div style={paragraphe}>
					<p>+ d’infos </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt perspiciatis, exercitationem tempora magni laboriosam! Accusamus minima nostrum itaque esse numquam similique, obcaecati. Recusandae autem placeat, libero ex expedita, ratione magni.
					</p>
				</div>
			</div>
		);
	}
}

export default CompanySize;

