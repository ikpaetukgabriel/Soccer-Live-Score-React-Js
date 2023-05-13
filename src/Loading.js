import React from 'react';
import './Loading.css';

const Loading = ({ heading, message }) => {
	return (
		<div className="card">
			<div className="loading content">
				<h3>{heading}</h3>
				<div className="ui active inverted dimmer">
					<div className="ui large text loader">
						<span>{message}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

Loading.defaultProps = {
	heading: 'Heading',
	message: 'loading...'
};

export default Loading;
