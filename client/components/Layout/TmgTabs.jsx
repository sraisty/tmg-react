import React from 'react';
import { Tab, Nav, NavItem } from 'react-bootstrap';

import MeetEvents from '../MeetEvents/index';
import Teams from '../Teams/index';
import Athletes from '../Athletes/index';
import Scores from '../Scores/index';
import MeetInfo from '../MeetInfo/index';
import MeetAdmin from '../MeetAdmin/index';
import TmgBreadcrumbs from './TmgBreadcrumbs';


class TmgTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = { key: 2 };
  }
  // getInitialState() {
  //   return {
  //     key: 1
  //   };
  // },

  handleSelect(e) {
    alert(`selected ${e}`);
    this.setState({ key: e });
  }

  render() {
    return (
      <Tab.Container id="meetTabs" defaultActiveKey="meetEvents">
        <div>
          <Nav bsStyle="tabs">
            <NavItem eventKey="meetInfo">MeetInfo</NavItem>
            <NavItem eventKey="meetEvents">Events</NavItem>
            <NavItem eventKey="teams">Teams</NavItem>
            <NavItem eventKey="athletes">Athletes</NavItem>
            <NavItem eventKey="scores">Scores</NavItem>
            <NavItem eventKey="meetadmin">
              <em className="fa fa-cog" />
              &nbsp;Meet Admin
            </NavItem>
          </Nav>

          <Tab.Content animation>
            {this.props.children}
            {/* <Tab.Pane eventKey="meetEvents">
              <TmgBreadcrumbs />
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
            </Tab.Pane> */}
          </Tab.Content>
        </div>
      </Tab.Container>
    );
  }
}

export default TmgTabs;
