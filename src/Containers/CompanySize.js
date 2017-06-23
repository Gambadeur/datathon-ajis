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

const iframe1 = {
	border: 'none'
}

const iframe2 = {
	padding: '8px 0',
	fontFamily: 'Arial!important',
	fontSize: '13px!important',
	lineHeight: '15px!important',
	textAlign: 'center',
	borderTop: '1px solid #dadada',
	margin: '0 30px'
}

const iframe3 = {
	color: '#989898 !important',
	textDecoration: 'none!important'
}



class CompanySize extends Component {
	render() {
		return (

			<div style={styleCompanySize} className="screen">
				<h2>Handicap: un emploi pour chacun</h2>
				<h3>De la TPE à la grande entreprise, quel cadre de travail semble le mieux convenir à votre situation?</h3>
				{/*<div className="circle-container">
					<div className="circle"><p>TPE</p></div>
					<div className="circle active-circle"><p>PME</p></div>
					<div className="circle"></div>
					<div className="circle"></div>
				</div>*/}
				<iframe allowfullscreen src="//e.infogram.com/type_dentreprise?src=embed" title="Type d&#39;entreprise" width="550" height="485" scrolling="no" frameborder="0" style={iframe1}></iframe>

				<div className="next-page-btn-container">
					<div className="next-page-btn"
						onClick={() => this.props.goToNextPage(2)}>
						<i className="fa fa-arrow-right" style={{ color: '#E74C3C' }}></i>
					</div>
				</div>

				<div className="info">
					<p>+ d’infos </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt perspiciatis, exercitationem tempora magni laboriosam! Accusamus minima nostrum itaque esse numquam similique, obcaecati. Recusandae autem placeat, libero ex expedita, ratione magni.
					</p>
				</div>
			</div>
		);
	}
}

export default CompanySize;

