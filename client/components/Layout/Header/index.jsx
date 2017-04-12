import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

import ChooseMeetMenu from './ChooseMeetMenu';
import SearchMeets from './SearchMeets';
import AlertsMenu from './AlertsMenu';
import ProfileMenu from './ProfileMenu';
import TmgMeetHeader from './TmgMeetHeader';

class Header extends React.Component {

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <header>
        <Navbar
          inverse
          fluid
          collapseOnSelect
          staticTop
          className="tmg-top-nav"
          id="topnavbar"
        >
          <Navbar.Header>
            <Navbar.Brand >
              <Link to="/">TrackMeetGenius</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav onSelect={this.handleSelect} pullRight>
              <AlertsMenu />
              <ProfileMenu />
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <TmgMeetHeader />
      </header>
    );
  }
}

export default Header;
