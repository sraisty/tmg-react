import React from 'react';

import {MenuItem, NavDropdown} from 'react-bootstrap';

class ProfileMenu extends React.Component {

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return(
      <NavDropdown eventKey={4}
            title="Profile" id="profile-nav-dropdown">
        <MenuItem header>Signed in as xxxx</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={4.1}>Your profile</MenuItem>
        <MenuItem eventKey={4.2}>Settings</MenuItem>
        <MenuItem eventKey={4.3}>Following</MenuItem>
        <MenuItem eventKey={4.4}>Help</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={4.5}>Sign out</MenuItem>
      </NavDropdown>
    );
  }
}

export default ProfileMenu;
