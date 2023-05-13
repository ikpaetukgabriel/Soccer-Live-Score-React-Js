import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import NavBar from './components/NavBar';
import SerieA from './leagues/SerieA';
import PremierLeague from './leagues/PremierLeague';
import LaLiga from './leagues/LaLiga';
import Bundesliga from './leagues/Bundesliga';
import LigueOne from './leagues/LigueOne';
import Eredivisie from './leagues/Eredivisie';

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
