import React, { Component } from 'react';
import { Navbar, Button, ButtonGroup, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

class BrilliantStrokesComponent extends Component {

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

  toggleBritishAvailable() {
    this.setState(prevState => ({
      british: !prevState.british
    }));
  }

  togglePatriotAvailable() {
    this.setState(prevState => ({
      patriot: !prevState.patriot
    }));
  }

  toggleFrenchAvailable() {
    this.setState(prevState => ({
      french: !prevState.french
    }));
  }

  toggleIndianAvailable() {
    this.setState(prevState => ({
      indian: !prevState.indian
    }));
  }

  toggleToAAvailable() {
    this.setState(prevState => ({
      toa: !prevState.toa
    }));
  }

  render() {
    var baseClassName = "brilliant-stroke-button";
    var classNameAvailable = "brilliant-stroke-available";
    var classNameUnavailable = "brilliant-stroke-unavailable";

    var britishButtonClass = classNames(baseClassName, {
      classNameAvailable: this.state.british,
      classNameUnavailable: !this.state.british
    });

    var patriotButtonClass = classNames(baseClassName, {
      classNameAvailable: this.state.patriot,
      classNameUnavailable: !this.state.patriot
    });

    var frenchButtonClass = classNames(baseClassName, {
      classNameAvailable: this.state.french,
      classNameUnavailable: !this.state.french
    });

    var indianButtonClass = classNames(baseClassName, {
      classNameAvailable: this.state.indian,
      classNameUnavailable: !this.state.indian
    });

    var toaButtonClass = classNames(baseClassName, {
      classNameAvailable: this.state.toa,
      classNameUnavailable: !this.state.toa
    });

    var glyphiconAvailable = "glyphicon glyphicon-ok-sign";
    var glyphiconUnavailable = "glyphicon glyphicon-remove-sign";

    return (
      <Navbar fixedBottom className="resources-bar">
        <Grid>
          <Row>
            <Col md={2} mdOffset={1}>
              <Button block href="#" className={britishButtonClass} onClick={this.toggleBritishAvailable.bind(this)}>
                <Glyphicon glyph={this.state.british ? glyphiconAvailable : glyphiconUnavailable} /> British BS
              </Button>
            </Col>
            <Col md={2}>
              <Button block href="#" className={patriotButtonClass} onClick={this.togglePatriotAvailable.bind(this)}>
                <Glyphicon glyph={this.state.patriot ? glyphiconAvailable : glyphiconUnavailable} /> Patriot BS
              </Button>
            </Col>
            <Col md={2}>
              <Button block href="#" className={frenchButtonClass} onClick={this.toggleFrenchAvailable.bind(this)}>
                <Glyphicon glyph={this.state.french ? glyphiconAvailable : glyphiconUnavailable} /> French BS
              </Button>
            </Col>
            <Col md={2}>
              <Button block href="#" className={indianButtonClass} onClick={this.toggleIndianAvailable.bind(this)}>
                <Glyphicon glyph={this.state.indian ? glyphiconAvailable : glyphiconUnavailable} /> Indian BS
              </Button>
            </Col>
            <Col md={2}>
              <Button block href="#" className={toaButtonClass} onClick={this.toggleToAAvailable.bind(this)}>
                <Glyphicon glyph={this.state.toa ? glyphiconAvailable : glyphiconUnavailable} /> French ToA
              </Button>
            </Col>
          </Row>
        </Grid>
      </Navbar>

      /*<Navbar fixedBottom className="resources-bar">
        <ButtonGroup justified>
          <Button href="#" className={britishButtonClass} onClick={this.toggleBritishAvailable.bind(this)}>
            <Glyphicon glyph={this.state.british ? glyphiconAvailable : glyphiconUnavailable} /> British BS
          </Button>
          <Button href="#" className={patriotButtonClass} onClick={this.togglePatriotAvailable.bind(this)}>
            <Glyphicon glyph={this.state.patriot ? glyphiconAvailable : glyphiconUnavailable} /> Patriot BS
          </Button>
          <Button href="#" className={frenchButtonClass} onClick={this.toggleFrenchAvailable.bind(this)}>
            <Glyphicon glyph={this.state.french ? glyphiconAvailable : glyphiconUnavailable} /> French BS
          </Button>
          <Button href="#" className={indianButtonClass} onClick={this.toggleIndianAvailable.bind(this)}>
            <Glyphicon glyph={this.state.indian ? glyphiconAvailable : glyphiconUnavailable} /> Indian BS
          </Button>
          <Button href="#" className={toaButtonClass} onClick={this.toggleToAAvailable.bind(this)}>
            <Glyphicon glyph={this.state.toa ? glyphiconAvailable : glyphiconUnavailable} /> French ToA
          </Button>
        </ButtonGroup>
      </Navbar>*/
    );
  }
}

export default BrilliantStrokesComponent;