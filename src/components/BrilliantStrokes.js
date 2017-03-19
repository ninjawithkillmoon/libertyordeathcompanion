import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import BrilliantStrokeButton from './BrilliantStrokeButton'

const britishLabel = "British BS";
const patriotLabel = "Patriot BS";
const frenchLabel = "French BS";
const indianLabel = "Indian BS";
const toaLabel = "French ToA";

class BrilliantStrokes extends Component {

  constructor() {
    super();
    this.state = {
      british: true,
      patriot: false,
      french: true,
      indian: false,
      toa: true
    }
  }

  toggleAvailable(label) {
    switch(label) {
      case britishLabel:
        this.setState(prevState => ({
          british: !prevState.british
        }));
        break;
      case patriotLabel:
        this.setState(prevState => ({
          patriot: !prevState.patriot
        }));
        break;
      case frenchLabel:
        this.setState(prevState => ({
          french: !prevState.french
        }));
        break;
      case indianLabel:
        this.setState(prevState => ({
          indian: !prevState.indian
        }));
        break;
      case toaLabel:
        this.setState(prevState => ({
          toa: !prevState.toa
        }));
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <Navbar fixedBottom className="resources-bar">
        <Grid>
          <Row>
            <Col md={2} mdOffset={1}>
              <BrilliantStrokeButton label={britishLabel} available={this.state.british} onToggleAvailable={this.toggleAvailable.bind(this)} />
            </Col>
            <Col md={2}>
              <BrilliantStrokeButton label={patriotLabel} available={this.state.patriot} onToggleAvailable={this.toggleAvailable.bind(this)} />
            </Col>
            <Col md={2}>
              <BrilliantStrokeButton label={frenchLabel} available={this.state.french} onToggleAvailable={this.toggleAvailable.bind(this)} />
            </Col>
            <Col md={2}>
              <BrilliantStrokeButton label={indianLabel} available={this.state.indian} onToggleAvailable={this.toggleAvailable.bind(this)} />
            </Col>
            <Col md={2}>
              <BrilliantStrokeButton label={toaLabel} available={this.state.toa} onToggleAvailable={this.toggleAvailable.bind(this)} />
            </Col>
          </Row>
        </Grid>
      </Navbar>
    );
  }
}

export default BrilliantStrokes;