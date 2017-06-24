import React, { Component } from 'react';
import TPE from './../assets/TPE.png';
import PME from './../assets/PME.png';
import ETI from './../assets/ETI.png';
import GE from './../assets/GE.png';

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
				<h2>Tous capables !</h2>
				<h3>De la TPE à la grande entreprise, quel cadre de travail semble le mieux convenir à votre situation?</h3>

				<div>


					<div className="circle-container">
						<div>
							<div className="circle">
								<div className="inner-circle">
									<p>TPE</p>
									<div className="company-size-info">
										<p>Entreprise de moins de 10 employés</p>
										<p>32%</p>
									</div>
								</div>
							</div>
						</div>

						<div className="circle active-circle">
							<div className="inner-circle">
							<p>PME</p>
							<div className="company-size-info">
								<p>Entreprise de 10 à 149 employés</p>
								<p>48%</p>
							</div>
						</div>

						</div>
						<div className="circle">
							<div className="inner-circle">
								<p>ETI</p>
								<div className="company-size-info">
										<p>Entreprise de 250 à 4999 employés</p>
										<p>18%</p>
								</div>
							</div>
						</div>
						<div className="circle">
							<div className="inner-circle">
								<p>Grande Entreprise</p>
								<div className="company-size-info">
									<p>Entreprise de plus de 5000 employés</p>
									<p>1%</p>
								</div>
							</div>
						</div>
					</div>

					<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3em' }}>
						<img src={TPE} alt="" />
						<img src={PME} alt="" />
						<img src={ETI} alt="" />
						<img src={GE} alt="" />
					</div>

				</div>
				{/*<iframe allowfullscreen src="//e.infogram.com/type_dentreprise?src=embed" title="Type d&#39;entreprise" width="550" height="485" scrolling="no" frameborder="0" style={iframe1}></iframe>*/}


				<div className="next-page-btn-container">
					<div className="next-page-btn"
						onClick={() => this.props.goToNextPage(2)}>
						<i className="fa fa-arrow-right" style={{ color: '#E74C3C' }}></i>
					</div>
				</div>

				<div className="info">
					<p>Le type d’entreprise qui est le plus susceptible de mettre en oeuvre des dispositifs pour maintenir en emploi les personnes handicapées ou les recruter sont les PME.
					</p>
				</div>
			</div>
		);
	}
}

export default CompanySize;
