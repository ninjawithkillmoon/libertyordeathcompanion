import React, { Component } from 'react';

class indianWarPartyPiece extends Component {
	render() {
		let pieceClass = "indianWarPartyPiece";
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

export default indianWarPartyPiece;