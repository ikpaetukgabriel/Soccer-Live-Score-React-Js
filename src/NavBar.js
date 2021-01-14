import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<div className="ui violet inverted segment">
			<div className="ui inverted secondary menu">
				<Link to="/" className="item">
					Serie A
				</Link>
				<Link to="/premier-league" className="item ">
					Premier League
				</Link>
				<Link to="/la-liga" className="item ">
					La Liga
				</Link>
				<Link to="bundesliga" className="item">
					BundesLiga
				</Link>
				<Link to="/ligue-1" className="item ">
					Ligue 1
				</Link>
				<Link to="/eredivisie" className="item ">
					Eredivisie
				</Link>
				<div className="right menu">
					<Link to="/" className="ui  button">
						<i className="paper plane outline violet icon" />
						<span className="violet">Soccer Live App</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
