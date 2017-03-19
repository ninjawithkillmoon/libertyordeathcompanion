import React, { Component } from 'react';
import { Navbar, Button, Row, Col, Grid } from 'react-bootstrap';

class ResourcesComponent extends Component {

  constructor() {
    super();
    this.state = {
      british: 0,
      patriot: 0,
      french: 0,
      indian: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      british: nextProps.game.BritishResources,
      patriot: nextProps.game.PatriotResources,
      french: nextProps.game.FrenchResources,
      indian: nextProps.game.IndianResources
    });
  }

  render() {
    return (
      <Navbar fixedTop className="resources-bar">
        <Grid>
          <Row>
            <Col md={3}>
              <Button block className="resources-button british">British Resources: {this.state.british}</Button>
            </Col>
            <Col md={3}>
              <Button block className="resources-button patriot">Patriot Resources: {this.state.patriot}</Button>
            </Col>
            <Col md={3}>
              <Button block className="resources-button french">French Resources: {this.state.french}</Button>
            </Col>
            <Col md={3}>
              <Button block className="resources-button indian">Indian Resources: {this.state.indian}</Button>
            </Col>
          </Row>
        </Grid>
      </Navbar>
    );
  }
}

export default ResourcesComponent;