import React, { Component } from 'react';

class ActivitySector extends Component {
	render() {
		return (
			<div className="ActivitySector screen" style={{ backgroundColor: "#8EC3A7", color: "#fff"}}>
				<h2 className="centered">Tous capables !</h2>
				<h3 className="centered" style={{ marginTop: '10px' }}>Les secteurs d'activité</h3>

				<div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
				<p style={{width: '20em', fontSize: '1.2rem', padding: '2em', lineHeight: '1.7rem'}}>Comme l’ensemble des employés, les travailleurs handicapés travaillent majoritairement dans le secteur tertiaire (67,5%), avec neuf points de moins cependant que la population générale, dans l’industrie (18,2%), le bâtiment (8,5%) puis l’agriculture (5,8%).</p>
				<iframe allowfullscreen src="//e.infogram.com/secteur_dactivite?src=embed" title="Secteur d&#39;activité" width="550" height="514" scrolling="no" frameborder="0" style={{border:'none'}}></iframe>
				</div>

				<div className="next-page-btn-container">
					<div className="next-page-btn"
						onClick={() => this.props.goToNextPage(5)}>
						<i className="fa fa-arrow-right" style={{ color: '#8EC3A7' }}></i>
					</div>
				</div>
			</div>
		);
	}
}

export default ActivitySector;
