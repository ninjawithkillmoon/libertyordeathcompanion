import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Resources from './components/Resources';
import Sidebar from './components/Sidebar';
import BrilliantStrokes from './components/BrilliantStrokes';
import './App.css';
import GameStore from './stores/GameStore';
import PatriotRegularPiece from './components/shapes/PatriotRegularPiece';

class App extends Component {
  constructor() {
    super();

    this.state = {
      game: GameStore.getGame()
    }

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    GameStore.addGameChangeListener(this.onChange);
  }

  componentWillUnmount() {
    GameStore.removeGameChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      game: GameStore.getGame()
    });
  }

  render() {
    return (
      <div className="content">
        <Header></Header>
        <Resources game={this.state.game}></Resources>
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <Sidebar game={this.state.game}></Sidebar>
            </Col>
            <Col xs={12} md={9}>
              
            </Col>
          </Row>
        </Grid>
        <BrilliantStrokes game={this.state.game}></BrilliantStrokes>
      </div>
    );
  }
}

export default App;
