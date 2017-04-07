import React from 'react';
import {Nav, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';

class Sidebar extends React.Component {

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav onSelect={this.handleSelect}>
            <NavDropdown
              eventKey={1}
              title="Events"
              id="events-nav-dropdown"
              onSelect={this.handleSelect}
            >
              <MenuItem header>TRACK EVENTS</MenuItem>
              <MenuItem eventKey={1.11}>
                4x100m
              </MenuItem>
              <MenuItem eventKey={1.11}>
                4x100m
              </MenuItem>
              <MenuItem divider />
              <MenuItem header>FIELD EVENTS</MenuItem>
              <MenuItem eventKey={1.21}>
                Pole Vault
              </MenuItem>
              <MenuItem eventKey={1.22}>
                High Jump
              </MenuItem>
              <MenuItem eventKey={1.31}>
                Long Jump
              </MenuItem>
              <MenuItem eventKey={1.32}>
                Discus Throw
              </MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Sidebar;
