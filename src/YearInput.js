import React from 'react';
import './YearInput.css';

class YearInput extends React.Component {
	state = {
		term: '2021'
	};

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<form className="ui left input" onSubmit={this.onFormSubmit}>
				<div className="ui labeled icon button">
					<i className="futbol outline icon" />
					{this.props.league}
				</div>
				<input type="text" placeholder="Enter Season" value={this.state.term} onChange={this.onInputChange} />
			</form>
		);
	}
}

export default YearInput;
