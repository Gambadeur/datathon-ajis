import React, { Component } from 'react';

class Conclusion extends Component {
	render() {
		const paragraphTitle = {
			marginTop: '1.3em',
			fontSize: '1.3rem',
		}

		return (
			<div className="Conclusion screen" style={{ backgroundColor: "#5FB7E5", color: "#fff"}}>
				<h2 className="centered">Tous capables !</h2>
				<h3 className="centered" style={{ marginTop: '10px' }}>A quelles aides pouvez-vous prétendre ?</h3>
			
				<div style={{padding: '0 15em'}}>
					<h4 style={paragraphTitle}>Si vous êtes une personne reconnue handicapée</h4>
					<p>Les aides mobilisables dans le cadre de l’accès à l’emploi incluent les aides à la reprise d’emploi (avec l’accès au contrat de professionnalisation ou d’apprentissage, l’aide à la création d’activité), les aides qui relèvent de la compensation (aides techniques, aide à la mobilité, etc.) et les aides à la formation.</p>
					<p>Pour se maintenir en emploi, l’Agefiph peut débloquer des aides à la compensation (prothèses auditives, aides à l’aménagement de véhicule, au surcoût du permis de conduire), etc.</p>

					<h4 style={paragraphTitle}>Si vous êtes une entreprise</h4>
					<p>L’Agefiph peut vous aider en ce qui concerne la compensation (’adaptation des situations de travail), pour l’accès à la formation (aide au tutorat, contrat de génération) et pour maintenir dans l’emploi les personnes handicapées, notamment en fin de carrière.</p>
					<p>Pour vous inciter à recruter ou à participer à la formation, des dispositifs sont également mobilisables : ainsi, les aides aux contrats de professionnalisation et d’apprentissage, ou les aides à la formation des jeunes handicapés en emploi avenir.</p>
				
					<div style={{marginTop: '1.3em', fontSize: '0.9rem'}}>
						<p>Pour en savoir plus : <a style={{color: '#fff'}} href="https://www.agefiph.fr/Personne-handicapee">https://www.agefiph.fr/Personne-handicapee</a></p> 
						<p>et pour trouver un job : <a style={{color: '#fff'}} href="http://www.ladapt.net/espace-emploi.html">http://www.ladapt.net/espace-emploi.html</a></p>
						<p>Sources : Agefiph, Insee, Dares</p>
					</div>
				</div>

 




				{/*<div className="next-page-btn-container">
					<div className="next-page-btn"
						onClick={() => this.props.goToNextPage(3)}>
						<i className="fa fa-arrow-right" style={{ color: '#8EC3A7' }}></i>
					</div>
				</div>*/}
			</div>
		);
	}
}

export default Conclusion;