import React from 'react';
import { Row, Col, Panel, Table } from 'react-bootstrap';
// import ReactTable from 'react-table';

import DummyText from '../DevUtils/DummyText';


function Athletes() {
  return (
    <Row>
      <Col xs={12} sm={6}>
        <Panel header="Athletes In Tables">
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </Panel>
      </Col>
      <Col xs={12} sm={6}>
        <Panel>

          <h4>ATHLETES</h4>
          <DummyText numParagraphs="4" />
        </Panel>
      </Col>
    </Row>
  );
}

export default Athletes;
