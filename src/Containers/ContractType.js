import React, { Component } from 'react';


const styleContratType = {
	margin: '0px',
	width: '100%',
	height: '100vh',
	paddingTop: '20px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	backgroundColor: '#2C3E50',
	color: 'white'
}


const styleIframe2 = {
	padding:'8px 0',
	fontFamily:'Arial!important',
	fontSize: '13px!important',
	lineHeight: '15px!important',
	textAlign: 'center',
	borderTop: '1px solid #dadada',
	margin: '0 30px'
				
}

const styleIframe3 = {
	color:'#989898 !important',
	textDecoration: 'none!important'
}
const styleIframe4 = {
	color:'#989898 !important',
	textDecoration: 'none !important'
}

const topmarginH3 = {
	marginTop: '10px'
}


class ContratType extends Component {
	render() {
		return (
			<div style={styleContratType} className="screen">
				<h2>Handicap: un emploi pour chacun</h2>
				<h3 style={topmarginH3}>Les types de contrats / part CDD & CDI</h3>
				<iframe allowfullscreen src="//e.infogram.com/part_cddcdi-47106?src=embed" width="550" height="638" scrolling="no" frameborder="0" style={{border: 'none'}}></iframe><div style={styleIframe2}><a href="https://infogram.com/part_cddcdi-47106" style={styleIframe3} target="_blank" rel="nofollow">Part CDD/CDI</a><br /><a href="https://infogr.am" style={styleIframe4} target="_blank" rel="nofollow"></a></div>
	
			</div>
		);
	}
}

export default ContratType;


