import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import classNames from 'classnames';

class BrilliantStrokeButton extends Component {
	render() {
    let buttonClass = classNames("brilliant-stroke-button", {
      "brilliant-stroke-available": this.props.available,
      "brilliant-stroke-unavailable": !this.props.available
    });

    let glyphiconAvailable = "glyphicon glyphicon-ok-sign";
    let glyphiconUnavailable = "glyphicon glyphicon-remove-sign";

		return (
			<Button block href="#" className={buttonClass} onClick={() => this.props.onToggleAvailable(this.props.label)}>
  	    <Glyphicon glyph={this.props.available ? glyphiconAvailable : glyphiconUnavailable} /> {this.props.label}
    	</Button>
  	)
	}
}

export default BrilliantStrokeButton;