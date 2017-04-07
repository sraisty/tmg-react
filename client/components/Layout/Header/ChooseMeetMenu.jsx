import React from 'react';
import {MenuItem, NavDropdown} from 'react-bootstrap';

class ChooseMeetMenu extends React.Component {

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <NavDropdown
        eventKey={1}
        title="Choose a meet"
        id="meets-nav-dropdown"
        onSelect={this.handleSelect}
      >
        <MenuItem header>IN-PROGRESS MEETS</MenuItem>
        <MenuItem eventKey={1.11}>
          Los Gatos vs Palo Alto, 4/16/17
        </MenuItem>
        <MenuItem divider />
        <MenuItem header>UPCOMING MEETS</MenuItem>
        <MenuItem eventKey={1.21}>
          Stanford Invitational, 4/30/17
        </MenuItem>
        <MenuItem eventKey={1.22}>
          De Anza League Championships, 5/30/17
        </MenuItem>
        <MenuItem divider />
        <MenuItem header>ALREADY COMPLETED MEETS</MenuItem>
        <MenuItem eventKey={1.31}>Los Gatos vs. Saratoga, 3/3/17</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={1.32}>
          Create New Meet
        </MenuItem>
      </NavDropdown>
    );
  }
}

export default ChooseMeetMenu;
