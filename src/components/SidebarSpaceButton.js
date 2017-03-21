import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import GameActions from '../actions/GameActions';

class SidebarSpaceButton extends Component {
	constructor() {
    super();
    this.state = {
      
    }
  }

	changeSpace() {
		GameActions.changeSpace(this.props.space);

		window.scrollTo(0, 0);
	}

	render() {
		return (
			<Button block onClick={this.changeSpace.bind(this)}>
				{this.props.space.name}
			</Button>
		);
	}
}

export default SidebarSpaceButton;