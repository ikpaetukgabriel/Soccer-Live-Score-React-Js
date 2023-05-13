import React from 'react';

const StandingItem = ({ rank, clubFlag, clubName, loss, win, draw, games, points }) => {
	return (
		<tr>
			<td data-label="Club">{rank}</td>
			<td data-label="">
				<div>
					<img className="ui avatar image" src={clubFlag} alt="club icon" />
				</div>
			</td>
			<td data-label="Club">{clubName}</td>
			<td data-label="Games">{games}</td>
			<td data-label="Win">{win}</td>
			<td data-label="Draw">{draw}</td>
			<td data-label="Loss">{loss}</td>
			<td data-label="Point">{points}</td>
		</tr>
	);
};

export default StandingItem;
