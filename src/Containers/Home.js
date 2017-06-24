import React, { Component } from 'react';
import Form from './../Components/Form/Form';
import ValidateButton from './../Components/Form/ValidateButton'


const styleHome = {
	margin: '0px',
	width: '100%',
	height: '100vh',
	paddingTop: '30px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	backgroundColor: '#3498DB',
	color: 'white'
}

const styleForm = {
	marginTop: '20px'
}

const styleButton = {
	marginTop: '15px'
}

const paragraphe = {
	marginTop: '30px',
	textAlign: 'center',
	padding: '20px'
}

class Home extends Component {
	render() {
		return (
			<div style={styleHome} className="screen">
				<h2>Tous capables !</h2>
				<h3>Quel type d’entreprise est la plus accueillante ?</h3>
				<h3>Pour le découvrir, dites-nous qui vous êtes…</h3>
				<div style={styleForm}>
					<Form />
				</div>
				<div style={styleButton}
					onClick={() => this.props.goToNextPage(1)}
				>
					<ValidateButton />
				</div>


				<div className="info">
					<p>+ d’infos </p>
					<p> Parmi les 25,5 millions de personnes de 15 à 64 ans en emploi en 2014, 3,4 % (soit près de 871 000 personnes) disposent d’une reconnaissance administrative de leur handicap leur permettant de bénéficier de la loi sur l’obligation d’emploi des travailleurs handicapés.
					</p>
				</div>
			</div>
		);
	}
}

export default Home;
