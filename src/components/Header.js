import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class HeaderComponent extends Component {

  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <span>Liberty or Death</span>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          
        </Nav>
      </Navbar>
    );
  }
}

export default HeaderComponent;