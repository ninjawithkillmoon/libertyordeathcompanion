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

  loadGame() {

  }

  saveGame() {

  }

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <span>Liberty or Death</span>
          </Navbar.Brand>
        </Navbar.Header>
        <div className="header-buttons">
          <Button bsStyle="primary" className="nav-button" onClick={this.newGame.bind(this)}>New Game</Button>
          <Button bsStyle="info" className="nav-button" onClick={this.loadGame.bind(this)}>Load Game</Button>
          <Button bsStyle="success" className="nav-button" onClick={this.saveGame.bind(this)}>Save Game</Button>
        </div>
        
      </Navbar>
    );
  }
}

export default HeaderComponent;