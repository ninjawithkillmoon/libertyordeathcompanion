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
      british: false,
      patriot: false,
      french: false,
      indian: false,
      toa: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      british: nextProps.game.BritishBrilliantStrokeAvailable,
      patriot: nextProps.game.PatriotBrilliantStrokeAvailable,
      french: nextProps.game.FrenchBrilliantStrokeAvailable,
      indian: nextProps.game.IndianBrilliantStrokeAvailable,
      toa: nextProps.game.FrenchTreatyOfAllianceAvailable
    });
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
      <Navbar fixedBottom className="brilliant-strokes-bar">
        <Grid>
          <Row>
            <Col md={2} mdOffset={1} className="british">
              <BrilliantStrokeButton label={britishLabel} available={this.state.british} onToggleAvailable={this.toggleAvailable.bind(this)} />
            </Col>
            <Col md={2} className="patriot">
              <BrilliantStrokeButton label={patriotLabel} available={this.state.patriot} onToggleAvailable={this.toggleAvailable.bind(this)} />
            </Col>
            <Col md={2} className="french">
              <BrilliantStrokeButton label={frenchLabel} available={this.state.french} onToggleAvailable={this.toggleAvailable.bind(this)} />
            </Col>
            <Col md={2} className="indian">
              <BrilliantStrokeButton label={indianLabel} available={this.state.indian} onToggleAvailable={this.toggleAvailable.bind(this)} />
            </Col>
            <Col md={2} className="french">
              <BrilliantStrokeButton label={toaLabel} available={this.state.toa} onToggleAvailable={this.toggleAvailable.bind(this)} />
            </Col>
          </Row>
        </Grid>
      </Navbar>
    );
  }
}

export default BrilliantStrokes;