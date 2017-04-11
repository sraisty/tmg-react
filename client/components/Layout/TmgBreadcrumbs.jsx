import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

class TmgBreadcrumbs extends React.Component {

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="meets">
          Stanford Invitational 4/30/17
        </Breadcrumb.Item>
        <Breadcrumb.Item href="college/d3">
          College D3
        </Breadcrumb.Item>
        <Breadcrumb.Item href="women/varsity">
          Varsity Women
        </Breadcrumb.Item>
        <Breadcrumb.Item href="100m">
          200 Meter
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Heat 1
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default TmgBreadcrumbs;
