import React from 'react';
import Loading from './Loading';
import './Standing.css';
import StandingItem from './StandingItem';

const Standing = ({ loading, standingDetails, apiMessage }) => {
	if (loading) {
		return <Loading heading="Standing" message="loading..." />;
	} else if (apiMessage) {
		return <Loading heading="Standing" message={apiMessage} />;
	} else {
		const forStandingItem = standingDetails.standing.map((club) => {
			return (
				<StandingItem
					rank={club.rank}
					key={club.team.id}
					clubName={club.team.name}
					clubFlag={club.team.logo}
					games={club.all.played}
					win={club.all.win}
					loss={club.all.lose}
					draw={club.all.draw}
					points={club.points}
				/>
			);
		});
		return (
			<div className="card">
				<div className="content">
					<h3>Standing</h3>
					<table className="ui celled table">
						<thead className="heading">
							<tr>
								<th>
									<span>Pos.</span>
								</th>
								<th>
									<span />
								</th>
								<th>
									<span> Club</span>
								</th>
								<th>
									<span> Games</span>
								</th>
								<th>
									<span> Win</span>
								</th>
								<th>
									<span> Draw</span>
								</th>
								<th>
									<span> Loss</span>
								</th>
								<th>
									<span> Point</span>
								</th>
							</tr>
						</thead>
						<tbody>{forStandingItem}</tbody>
					</table>
				</div>
			</div>
		);
	}
};

export default Standing;
