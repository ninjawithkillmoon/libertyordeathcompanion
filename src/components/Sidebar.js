import React, { Component } from 'react';
import SidebarSpaceButton from './SidebarSpaceButton'

class SidebarComponent extends Component {

	constructor() {
    super();
    this.state = {
      game: null
    }
  }

	componentWillReceiveProps(nextProps) {
    this.setState({
      game: nextProps.game
    });
  }

  render() {
  	let spaceButtons = "";
  	if (this.state.game) {
  		spaceButtons = this.state.game.spaces.map((space) => 
				<SidebarSpaceButton key={space.id} space={space} />
			);
  	}

    return (
    	<div className="well sidebar sidebar-left">
    		{spaceButtons}
    	</div>
    );
  }
}

export default SidebarComponent;