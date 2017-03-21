import React, { Component } from 'react';
import GameStore from '../stores/GameStore';
import { Grid, Row, Col } from 'react-bootstrap';
import SpaceUtils from '../utils/SpaceUtils';
import PatriotContinentalPiece from './shapes/PatriotContinentalPiece';
import BritishRegularPiece from './shapes/BritishRegularPiece';
import BritishFortPiece from './shapes/BritishFortPiece';
import PatriotFortPiece from './shapes/PatriotFortPiece';
import PatriotMilitiaPiece from './shapes/PatriotMilitiaPiece';
import IndianWarPartyPiece from './shapes/IndianWarPartyPiece';
import IndianVillagePiece from './shapes/IndianVillagePiece';
import BritishToryPiece from './shapes/BritishToryPiece';
import FrenchRegularPiece from './shapes/FrenchRegularPiece';

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
      for (let i = 0; i < this.state.space.patriotContinentals; i++) {
          continentals.push(<PatriotContinentalPiece key={i} />);
      }

      let britishRegulars = [];
      for (let i = 0; i < this.state.space.britishRegulars; i++) {
          britishRegulars.push(<BritishRegularPiece key={i} />);
      }

      let britishForts = [];
      for (let i = 0; i < this.state.space.britishForts; i++) {
          britishForts.push(<BritishFortPiece key={i} />);
      }

      let patriotForts = [];
      for (let i = 0; i < this.state.space.patriotForts; i++) {
          patriotForts.push(<PatriotFortPiece key={i} />);
      }

      let frenchRegulars = [];
      for (let i = 0; i < this.state.space.frenchRegulars; i++) {
          frenchRegulars.push(<FrenchRegularPiece key={i} />);
      }

      let patriotMilitiaActive = [];
      for (let i = 0; i < this.state.space.patriotMilitiaActive; i++) {
          patriotMilitiaActive.push(<PatriotMilitiaPiece key={i} active />);
      }

      let patriotMilitiaUnderground = [];
      for (let i = 0; i < this.state.space.patriotMilitiaUnderground; i++) {
          patriotMilitiaUnderground.push(<PatriotMilitiaPiece key={i} />);
      }

      let indianWarPartiesActive = [];
      for (let i = 0; i < this.state.space.indianWarPartiesActive; i++) {
          indianWarPartiesActive.push(<IndianWarPartyPiece key={i} active />);
      }

      let indianWarPartiesUnderground = [];
      for (let i = 0; i < this.state.space.indianWarPartiesUnderground; i++) {
          indianWarPartiesUnderground.push(<IndianWarPartyPiece key={i} />);
      }

      let indianVillages = [];
      for (let i = 0; i < this.state.space.indianVillages; i++) {
          indianVillages.push(<IndianVillagePiece key={i} />);
      }

      let britishTories = [];
      for (let i = 0; i < this.state.space.britishTories; i++) {
          britishTories.push(<BritishToryPiece key={i} />);
      }

      let supportText = "Neutral";
      let supportClass = "support-neutral";
      if (this.state.space.supportLevel == -2) {
        supportText = "Active Opposition";
        supportClass = "support-opposition";
      }
      else if (this.state.space.supportLevel == -1) {
        supportText = "Passive Opposition";
        supportClass = "support-opposition";
      }
      else if (this.state.space.supportLevel == 1) {
        supportText = "Passive Support";
        supportClass = "support-support";
      }
      else if (this.state.space.supportLevel == 2) {
        supportText = "Active Support";
        supportClass = "support-support";
      }

      return (
        <div>
          <Row>
            <Col md={12}>
              <h2>{this.state.space.name}</h2>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <h4 className={supportClass}>Support Level: {supportText}</h4>
            </Col>
          </Row>

          {SpaceUtils.spaceHasBritish && 
            <Row className="british">
              <Col md={12}>
                {britishForts} {britishRegulars} {britishTories}
              </Col>
            </Row>
          }

          {SpaceUtils.spaceHasPatriot && 
            <Row className="patriot">
              <Col md={12}>
                {patriotForts} {continentals} {patriotMilitiaActive} {patriotMilitiaUnderground}
              </Col>
            </Row>
          }

          {SpaceUtils.spaceHasFrench && 
            <Row className="french">
              <Col md={12}>
                {frenchRegulars}
              </Col>
            </Row>
          }

          {SpaceUtils.spaceHasIndian && 
            <Row className="indian">
              <Col md={12}>
                {indianVillages} {indianWarPartiesActive} {indianWarPartiesUnderground}
              </Col>
            </Row>
          }
        </div>
      );
    }
  }
}

export default Space;