import React, { Component } from 'react';

class Region extends Component {
	render() {
		return (
			<div className="Region screen" style={{ backgroundColor: "#FFAA42", color: '#fff'}}>
				<h2 className="centered">Tous capables !</h2>
				<h3 className="centered">Représentation des personnes handicapées en entreprise selon les départements</h3>

			<div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
			<iframe width="450" height="450" scrolling="no" frameborder="no" src="https://fusiontables.google.com/embedviz?q=select+col11%3E%3E1+from+1Ts12PGBhAjmpSSKl9ZdJEnbW2GgWQA88QKgjRBqz&amp;viz=MAP&amp;h=false&amp;lat=46.90577592265814&amp;lng=2.270827854687485&amp;t=1&amp;z=5&amp;l=col11%3E%3E1&amp;y=2&amp;tmplt=2&amp;hml=KML"></iframe>

					<p style={{width: '15em', fontSize: '1.2rem', padding: '2em', lineHeight: '1.7rem'}}>Alors que Paris emploie le plus de personnes, ce sont les départements ruraux qui mobilisent le plus les dispositifs de l’Agefiph. La Corse, la Lozère, le Gers sont ainsi bien représentées sur la carte avec des ratios de personnes handicapées aidées supérieur à 5 pour 1000 actifs. 
					</p>
			</div>


				<div className="next-page-btn-container">
					<div className="next-page-btn"
						onClick={() => this.props.goToNextPage(4)}>
						<i className="fa fa-arrow-right" style={{ color: '#FFAA42' }}></i>
					</div>
				</div>
			</div>
		);
	}
}

export default Region;
