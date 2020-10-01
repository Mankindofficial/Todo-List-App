import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return(
		<header style={styles}>
			<h1>Todo List</h1>
			<Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
		</header>
	)
}
const styles = {
	background: '#40B0B0',
	color:'#fff',
	padding:'10px',
	textAlign:'Center'
}

export default Header;

const linkStyle = {
	color:'#fff',
	textDecoration:'none'
}