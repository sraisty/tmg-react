import React from 'react';
import {Tab, Nav, NavItem} from 'react-bootstrap';

import MeetEvents from '../../MeetEvents/index.jsx';
import Teams from '../../Teams/index.jsx';
import Athletes from '../../Athletes/index.jsx';
import Scores from '../../Scores/index.jsx';
import MeetInfo from '../../MeetInfo/index.jsx';
import MeetAdmin from '../../MeetAdmin/index.jsx';


class TmgTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {key: 2};
  }
  // getInitialState() {
  //   return {
  //     key: 1
  //   };
  // },

  handleSelect(e) {
    alert(`selected ${e}`);
    this.setState({key: e});
  }

  render() {
    return (
      <Tab.Container id="meetTabs" defaultActiveKey="meetEvents">
        <div>
          <Nav bsStyle="tabs">
            <NavItem eventKey="meetEvents">Events</NavItem>
            <NavItem eventKey="teams">Teams</NavItem>
            <NavItem eventKey="athletes">Athletes</NavItem>
            <NavItem eventKey="scores">Scores</NavItem>
            <NavItem eventKey="meetadmin">
              <em className="fa fa-cog"></em>
              &nbsp;Meet Admin
            </NavItem>
          </Nav>

          <Tab.Content animation>
            <Tab.Pane eventKey="meetEvents">
              <MeetEvents />
            </Tab.Pane>
            <Tab.Pane eventKey="teams">
              <Teams />
            </Tab.Pane>
            <Tab.Pane eventKey="athletes">
              <Athletes />
            </Tab.Pane>
            <Tab.Pane eventKey="scores">
              <Scores />
            </Tab.Pane>
            <Tab.Pane eventKey="meetinfo">
              <MeetInfo />
            </Tab.Pane>
            <Tab.Pane eventKey="meetadmin">
              <MeetAdmin />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    );
  }
}

export default TmgTabs;
