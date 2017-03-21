import React, { Component } from 'react';

class PatriotMilitiaPiece extends Component {
	render() {
		let pieceClass = "patriotMilitiaPiece";
		if (this.props.active) {
			pieceClass += " active";
		}
		else {
			pieceClass += " underground";
		}

		return (
			<div className={pieceClass}>
				<div className="five-point-star"></div>
			</div>
		);
	}
}

export default PatriotMilitiaPiece;