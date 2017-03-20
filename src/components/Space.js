import React, { Component } from 'react';
import GameStore from '../stores/GameStore';
import { Grid, Row, Col } from 'react-bootstrap';
import SpaceUtils from '../utils/SpaceUtils';
import PatriotContinentalPiece from './shapes/PatriotContinentalPiece';
import BritishRegularPiece from './shapes/BritishRegularPiece';
import PatriotMilitiaPiece from './shapes/PatriotMilitiaPiece';
import IndianWarPartyPiece from './shapes/IndianWarPartyPiece';

class Space extends Component {

	constructor() {
    super();

    this.state = {
      space: null
    }

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    GameStore.addSpaceChangeListener(this.onChange);
  }

  componentWillUnmount() {
    GameStore.removeSpaceChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      space: GameStore.getSpace()
    });
  }

  render() {
    if (!this.state.space) {
      return (
        <div>No space selected</div>
      );
    }
    else {
      let continentals = [];
      for (var i = 0; i < this.state.space.patriotContinentals + 3; i++) {
          continentals.push(<PatriotContinentalPiece key={i} />);
      }

      let britishRegulars = [];
      for (var i = 0; i < this.state.space.britishRegulars + 16; i++) {
          britishRegulars.push(<BritishRegularPiece key={i} />);
      }

      let patriotMilitiaActive = [];
      for (var i = 0; i < this.state.space.patriotMilitiaActive + 4; i++) {
          patriotMilitiaActive.push(<PatriotMilitiaPiece key={i} active />);
      }

      let patriotMilitiaUnderground = [];
      for (var i = 0; i < this.state.space.patriotMilitiaUnderground + 11; i++) {
          patriotMilitiaUnderground.push(<PatriotMilitiaPiece key={i} />);
      }

      let indianWarPartiesActive = [];
      for (var i = 0; i < this.state.space.indianWarPartiesActive + 2; i++) {
          indianWarPartiesActive.push(<IndianWarPartyPiece key={i} active />);
      }

      let indianWarPartiesUnderground = [];
      for (var i = 0; i < this.state.space.indianWarPartiesUnderground + 5; i++) {
          indianWarPartiesUnderground.push(<IndianWarPartyPiece key={i} />);
      }

      return (
        <div>
          <Row>
            <Col md={12}>
              <h2>{this.state.space.name}</h2>
            </Col>
          </Row>
          <Row className="british">
            <Col md={4}>
              Forts: {this.state.space.britishForts}
            </Col>
            <Col md={4}>
              {britishRegulars} ({this.state.space.britishRegulars})
            </Col>
            <Col md={4}>
              Tories: {this.state.space.britishTories}
            </Col>
          </Row>

          <Row className="patriot">
            <Col md={4}>
              Forts: {this.state.space.patriotForts}
            </Col>
            <Col md={4}>
              {continentals} ({this.state.space.patriotContinentals})
            </Col>
            <Col md={4}>
              {patriotMilitiaActive} {patriotMilitiaUnderground} ({this.state.space.patriotMilitiaActive + this.state.space.patriotMilitiaUnderground})
            </Col>
          </Row>

          <Row className="french">
            <Col md={12}>
              Regulars: {this.state.space.frenchRegulars}
            </Col>
          </Row>

          <Row className="indian">
            <Col md={8}>
              Villages: {this.state.space.indianVillages}
            </Col>
            <Col md={4}>
              {indianWarPartiesActive} {indianWarPartiesUnderground} ({this.state.space.indianWarPartiesActive + this.state.space.indianWarPartiesUnderground})
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default Space;