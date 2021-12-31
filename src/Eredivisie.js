import React from 'react';
import Standing from './Standing';
import TopScorers from './TopScorers';
import YearInput from './YearInput';

export class PremierLeague extends React.Component {
	state = {
		year: '2021',
		standingLoading: true,
		topScorersLoading: true,
		flag: '',
		standing: [],
		topScorers: [],
		apiMessage: null
	};

	onTermSubmit = async (term) => {
		await fetch(`https://api-football-beta.p.rapidapi.com/standings?season=${term}&league=88`, {
			method: 'GET',
			headers: {
				'x-rapidapi-key': 'a30015a5d7msh46aa926867118ffp1a38c5jsn6aa106dccbbc',
				'x-rapidapi-host': 'api-football-beta.p.rapidapi.com'
			}
		})
			.then(async (response) => {
				const data = await response.json();
				if (data.message) {
					this.setState({ apiMessage: data.message, standingLoading: false });
				} else {
					this.setState({
						year: term,
						standingLoading: false,
						standing: data.response[0].league.standings[0],
						flag: data.response[0].league.flag
					});
				}
			})
			.catch(async (err) => {
				console.error(err);
			});

		await fetch(`https://api-football-beta.p.rapidapi.com/players/topscorers?season=${term}&league=88`, {
			method: 'GET',
			headers: {
				'x-rapidapi-key': 'a30015a5d7msh46aa926867118ffp1a38c5jsn6aa106dccbbc',
				'x-rapidapi-host': 'api-football-beta.p.rapidapi.com'
			}
		})
			.then(async (response) => {
				const data = await response.json();
				if (data.message) {
					this.setState({ apiMessage: data.message, topScorersLoading: false });
				} else {
					this.setState({ topScorersLoading: false, topScorers: data.response });
				}
			})
			.catch(async (err) => {
				console.error(err);
			});
	};
	componentDidMount() {
		const year = this.state.year;
		this.onTermSubmit(year);
	}
	render() {
		return (
			<div className="ui container">
				<YearInput leagueLogo={this.state.flag} league="Eredevisie" onFormSubmit={this.onTermSubmit} />

				<div className="ui two cards">
					<Standing
						loading={this.state.standingLoading}
						standingDetails={this.state}
						apiMessage={this.state.apiMessage}
					/>
					<TopScorers
						loading={this.state.topScorersLoading}
						topScorersDetails={this.state.topScorers}
						apiMessage={this.state.apiMessage}
					/>
				</div>
			</div>
		);
	}
}

export default PremierLeague;
