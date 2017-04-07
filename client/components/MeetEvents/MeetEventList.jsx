import React from 'react';
import {Panel, Tabs, Tab, Nav, NavItem} from 'react-bootstrap';
import {mapValues} from 'lodash';

import * as tf from '/imports/api/meetEventUtils.js';


class MeetEventList extends React.Component {
  constructor(props) {
    super(props);
    // this.props.trackEvents;
    // this.props.fieldEvents;
    this.state = {};
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
    this.setState({meetEventListType: true});
    this.setState({selectedMeetEvent: '100M'});
  }

  handleSelect(eventKey) {
    event.preventDefault();
    this.setState({selectedMeetEvent: eventKey.eventKey});
    alert(`selected ${eventKey}`);
  }

  render() {
    const trackEvs = tf.track();
    return (
      <Panel>
        <Tabs
          activeKey={this.event}
          bsStyle="tabs"
          id="meetevent-list-type"
          defaultActiveKey="track"
        >
          <Tab eventKey={'track'} title="Track">

            {/* <div className="employee-list">
              {this.props.employees.map(employee =>
                <EmployeeDetail key={employee._id} emp={employee}/>
              )}
            </div> */}

            {/* var users = {
                  'fred':    { 'user': 'fred',    'age': 40 },
                  'pebbles': { 'user': 'pebbles', 'age': 1 }
                };

                _.mapValues(users, function(o) { return o.age; });
                // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
            */}
            {/* mapValues(trackEv, (evObj) => { return evObj.eventName } ); */}

            <Nav bsStyle="pills" stacked onSelect={this.handleSelect}>
              {/* {mapValues(trackEvs, evObj =>
                <NavItem key={evObj.eventCode} href="/event/{evObj.eventCode}">
                  {evObj.eventName}
                </NavItem>
              )} */}
              <NavItem eventKey={'4x100'} href="/event/4x100">4x100 Relay</NavItem>
              <NavItem eventKey={'800M'} href="/event/800">800 Meter</NavItem>
              <NavItem eventKey={'200M'} href="/event/200">200 Meter</NavItem>
              <NavItem eventKey={'1600M'} href="/event/1600">1600 Meter</NavItem>
              <NavItem eventKey={'100M'} href="/event/100">100 Meter</NavItem>
              <NavItem eventKey={'100H'} href="/event/100H">100 Meter Hurdles</NavItem>
              <NavItem eventKey={'110H'} href="/event/110H">110 Meter Hurdles</NavItem>
              <NavItem eventKey={'400M'} href="/event/400">400 Meter</NavItem>
              <NavItem eventKey={'300H'} href="/event/300H">300 Meter Hurdles</NavItem>
              <NavItem eventKey={'3200M'} href="/event/300H">3200 Meters</NavItem>
              <NavItem eventKey={'4x400'} href="/event/4x400">4x400 Relay</NavItem>
            </Nav>
          </Tab>
          <Tab eventKey={'field'} title="Field">
            <Nav bsStyle="pills" stacked onSelect={this.handleSelect}>
              <NavItem eventKey={'PV'} href="/event/PV">Pole Vault</NavItem>
              <NavItem eventKey={'HJ'} href="/event/HJ">High Jump</NavItem>
              <NavItem eventKey={'LJ'} href="/event/LJ">Long Jump</NavItem>
              <NavItem eventKey={'TJ'} href="/event/TJ">Triple Jump</NavItem>
              <NavItem eventKey={'DT'} href="/event/DT">Discus</NavItem>
              <NavItem eventKey={'SP'} href="/event/SP">Shot Put</NavItem>
            </Nav>
          </Tab>
        </Tabs>
      </Panel>
    );
  }
}

export default MeetEventList;
