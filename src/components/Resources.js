import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Button, Row, Col, Grid } from 'react-bootstrap';

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

  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }

  render() {
    return (
      <Navbar fixedTop className="resources-bar">
        <Grid>
          <Row>
            <Col md={3}>
              <Button block className="resources-button">British Resources: {this.state.british}</Button>
            </Col>
            <Col md={3}>
              <Button block className="resources-button">Patriot Resources: {this.state.patriot}</Button>
            </Col>
            <Col md={3}>
              <Button block className="resources-button">French Resources: {this.state.french}</Button>
            </Col>
            <Col md={3}>
              <Button block className="resources-button">Indian Resources: {this.state.indian}</Button>
            </Col>
          </Row>
        </Grid>
      </Navbar>
    );
  }
}

export default ResourcesComponent;