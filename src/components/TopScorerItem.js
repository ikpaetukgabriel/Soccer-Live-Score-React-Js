import React from 'react';

const TopScorerItem = ({ photo, name, goals, assists, game, team, rank }) => {
	return (
		<tr>
			<td data-label="Name">{rank}</td>
			<td data-label="">
				<div>
					<img className="ui avatar image" src={photo} alt="club icon" />
				</div>
			</td>
			<td data-label="Name">{name}</td>
			<td data-label="Goals">{goals}</td>
			<td data-label="Assists">{assists === null ? '-' : assists}</td>
			<td data-label="Game">{game}</td>
			<td data-label="Team">{team}</td>
		</tr>
	);
};

export default TopScorerItem;
