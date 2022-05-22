import React from 'react';
import steam from '../assets/steam.png';
import '../styles/navbar.css'

class Navbar extends React.Component {

	render(){
		return(
			<><nav className="navbar navbar-dark navbar-expand-sm  fixed-top">
				<div className="container">
					<a href="/" className="navbar-brand logo">
						CSGO Stats
					</a>
					<a href="/" className="justify-right btn text-white sign-in"><img className="steam-icon" src={steam}/>Steam</a>
				</div>
				<div className="gradient-line"></div>
			</nav></>
		);
	}
}


export default Navbar;