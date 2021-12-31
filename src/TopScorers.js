import React from 'react';
import './Standing.css';
import TopScorerItem from './TopScorerItem';
import Loading from './Loading';

const Standing = ({ loading, topScorersDetails, apiMessage }) => {
	if (loading) {
		return <Loading heading="Top Scorers" message="loading..." />;
	} else if (apiMessage) {
		return <Loading heading="Top Scorers" message={apiMessage} />;
	} else {
		const forTopScorerItem = topScorersDetails.map((player, index) => {
			const position = index + 1;
			return (
				<TopScorerItem
					rank={position}
					key={player.player.id}
					photo={player.player.photo}
					name={player.player.name}
					goals={player.statistics[0].goals.total}
					assists={player.statistics[0].goals.assists}
					game={player.statistics[0].games.appearences}
					team={player.statistics[0].team.name}
				/>
			);
		});
		return (
			<div className="card">
				<div className="content">
					<h3>Top Scorers</h3>
					<table className="ui celled table">
						<thead>
							<tr>
								<th>
									<span> Pos.</span>
								</th>
								<th>
									<span />
								</th>
								<th>
									<span> Name</span>
								</th>
								<th>
									<span> Goals</span>
								</th>
								<th>
									<span> Assists</span>
								</th>
								<th>
									<span> Games</span>
								</th>
								<th>
									<span> Team</span>
								</th>
							</tr>
						</thead>
						<tbody>{forTopScorerItem}</tbody>
					</table>
				</div>
			</div>
		);
	}
};

export default Standing;
