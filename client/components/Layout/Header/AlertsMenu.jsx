import React from 'react';
import {NavDropdown, MenuItem} from 'react-bootstrap';

class AlertsMenu extends React.Component {

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return(
      <NavDropdown
          eventKey={1}
          title="Alerts"
          id="alerts-nav-dropdown"
          onSelect={this.handleSelect}>
        <MenuItem header><em>No Alerts. You're all caught up!</em></MenuItem>
        <MenuItem eventKey={2.1}>
          Event: See 100 Meter results
        </MenuItem>
        <MenuItem eventKey={2.2}>
          Event: 200 Meter starts in aproximately 10 minutes
        </MenuItem>
        <MenuItem eventKey={2.3}>
          Athlete: Leo Smith is about to start the 1500 meter
        </MenuItem>
      </NavDropdown>
    );
  }
}

export default AlertsMenu;
