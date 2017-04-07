import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';

import MeetEventList from './MeetEventList';
import DummyText from '../DevUtils/DummyText';

class MeetEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col xs={3}>
          <MeetEventList />
        </Col>
        <Col xs={9} sm={5}>
          <Panel>
          STUFF ABOUT THE SPECIFIC EVENT I SELECTED
          </Panel>
        </Col>
        <Col xs={9} sm={4}>
          <Panel>
            <h4>EVENTS</h4>
            <DummyText numParagraphs="3" />
          </Panel>
        </Col>
      </Row>
    );
  }
}

export default MeetEvents;
