import React from 'react';

const footStyle = {
	position:'fixed',
	bottom:'0px',
	left:'0px',
	right:'0px',
	display: 'flex',
	padding: '5px',
	margin: '5px',
	border:'1px solid #40B0B0'
}
const detailStyle = {
	listStyle: 'none',
	padding:'0px',
	display:'flex',
	justifyContent: 'center',
}
const liStyle = {
	color:'#40B0B0',
	fontSize: '.9em',
	margin:'0px 5px',
}
const pStyle = {
	marginLeft:'auto',
	fontSize: '.8em',
}

const Footer = () => {
	return(
		<footer style={footStyle}>
			<ul style={detailStyle}>
				<a href='#0'><li style={liStyle}>Terms and Conditions</li></a>
				<a href='#0'><li style={liStyle}>Privacy Policy</li></a>
				<a href='https://www.instagram.com/mankind_of_africa/' rel="noopener noreferrer" target='_blank'><li style={liStyle}>Contact</li></a>
			</ul>
			<p style={pStyle}>Copyright &copy; 2020 Mankind Project. All Rights Reserved</p>
		</footer>
	);
}


export default Footer;