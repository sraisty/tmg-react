import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import ChooseMeetMenu from './ChooseMeetMenu';
import SearchMeets from './SearchMeets';


class TmgMeetHeader extends React.Component {
  render() {
    return(
      <Navbar fluid className="tmg-meet-header">
        <Navbar.Header>
          <Navbar.Brand>
          <div className="tmg-meet-header-title">
            Stanford Invitational
          </div>
          </Navbar.Brand>
          {/* <Navbar.Toggle /> */}
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav onSelect={this.handleSelect} pullRight>
            <ChooseMeetMenu />
            <SearchMeets />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TmgMeetHeader;
