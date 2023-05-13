import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import SerieA from './SerieA';
import PremierLeague from './PremierLeague';
import LaLiga from './LaLiga';
import Bundesliga from './Bundesliga';
import LigueOne from './LigueOne';
import Eredivisie from './Eredivisie';

export class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="main container">
					<NavBar />
					<Switch>
						<Route path="/" exact component={SerieA} />
						<Route path="/premier-league" exact component={PremierLeague} />
						<Route path="/la-liga" exact component={LaLiga} />
						<Route path="/bundesliga" exact component={Bundesliga} />
						<Route path="/ligue-1" exact component={LigueOne} />
						<Route path="/eredivisie" exact component={Eredivisie} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
