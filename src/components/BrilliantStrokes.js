import React, { Component } from 'react';
import { Navbar, Button, ButtonGroup, Glyphicon } from 'react-bootstrap';
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
    var britishButtonClass = classNames("brilliant-stroke-button", {
      "brilliant-stroke-available": this.state.british,
      "brilliant-stroke-unavailable": !this.state.british
    });

    var patriotButtonClass = classNames("brilliant-stroke-button", {
      "brilliant-stroke-available": this.state.patriot,
      "brilliant-stroke-unavailable": !this.state.patriot
    });

    var frenchButtonClass = classNames("brilliant-stroke-button", {
      "brilliant-stroke-available": this.state.french,
      "brilliant-stroke-unavailable": !this.state.french
    });

    var indianButtonClass = classNames("brilliant-stroke-button", {
      "brilliant-stroke-available": this.state.indian,
      "brilliant-stroke-unavailable": !this.state.indian
    });

    var toaButtonClass = classNames("brilliant-stroke-button", {
      "brilliant-stroke-available": this.state.toa,
      "brilliant-stroke-unavailable": !this.state.toa
    });

    var glyphiconAvailable = "glyphicon glyphicon-ok-sign";
    var glyphiconUnavailable = "glyphicon glyphicon-remove-sign";

    return (
      <Navbar fixedBottom className="resources-bar">
        <ButtonGroup justified>
          <Button href="#" className={britishButtonClass} onClick={this.toggleBritishAvailable.bind(this)}>
            <Glyphicon glyph={this.state.british ? glyphiconAvailable : glyphiconUnavailable} /> British Brilliant Stroke
          </Button>
          <Button href="#" className={patriotButtonClass} onClick={this.togglePatriotAvailable.bind(this)}>
            <Glyphicon glyph={this.state.patriot ? glyphiconAvailable : glyphiconUnavailable} /> Patriot Brilliant Stroke
          </Button>
          <Button href="#" className={frenchButtonClass} onClick={this.toggleFrenchAvailable.bind(this)}>
            <Glyphicon glyph={this.state.french ? glyphiconAvailable : glyphiconUnavailable} /> French Brilliant Stroke
          </Button>
          <Button href="#" className={indianButtonClass} onClick={this.toggleIndianAvailable.bind(this)}>
            <Glyphicon glyph={this.state.indian ? glyphiconAvailable : glyphiconUnavailable} /> Indian Brilliant Stroke
          </Button>
          <Button href="#" className={toaButtonClass} onClick={this.toggleToAAvailable.bind(this)}>
            <Glyphicon glyph={this.state.toa ? glyphiconAvailable : glyphiconUnavailable} /> French ToA
          </Button>
        </ButtonGroup>
      </Navbar>
    );
  }
}

export default BrilliantStrokesComponent;