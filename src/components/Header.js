import React, { Component } from 'react';
import GameActions from '../actions/GameActions';
import { Navbar, Button } from 'react-bootstrap';

class HeaderComponent extends Component {

  constructor() {
    super();
    this.state = {
      
    }
  }

  newGame() {
    GameActions.newGame();
  }

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <span>Liberty or Death</span>
          </Navbar.Brand>
        </Navbar.Header>
        <Button bsStyle="success" className="nav-button" onClick={this.newGame.bind(this)}>New Game</Button>
      </Navbar>
    );
  }
}

export default HeaderComponent;