import React from 'react';
import logo from "./img/pelago x sia logo.png";
import "./navbar.css";

const navbar = () => {
  return (
	<>
	<nav>
		<div className="container">
			<a href="/" className="brand">
				<img src={logo} alt="Pelao Airlines Logo" />
			</a>
			<div className="list">
				<ul>
					<li>INR</li>
					<li>English</li>
					<li>Support</li>
					<li>Login</li>
				</ul>
			</div>
		</div>
	</nav>
	</>
  )
}

export default navbar