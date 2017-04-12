import React from 'react';
import { Tab, Tabs, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class TmgTabs extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'TmgTabs';
    this.state = {
      selected: 0,
    };
    // this.propTypes = {
    //   selected: React.PropTypes.number,
    //   // children: React.PropTypes.oneOfType([
    //   //   React.PropTypes.array,
    //   //   React.PropTypes.element
    //   // ]).isRequired,
    // };
    // this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }  // constructor

  handleSelect(index) {
    // event.preventDefault();
    console.log(`handleSelect selected ${index}`);
    this.setState({ selected: index });
  }


  render() {
    return (
      // <Tab.Container id="tabs-with-routing-links" defaultActiveKey="meetInfo">
      <Tab.Container
        activeKey={this.state.selected}
        onSelect={this.handleSelect}
        id="tabs-with-routing-links"
      >
        <div className="row clearfix">
          <div className="col-sm-12">
            <Nav bsStyle="tabs">

              {this.props.tabsinfo.map((tab, index) => {
                return (
                  <LinkContainer to={`/${tab.name}`} key={tab.name}>
                    <NavItem eventKey={index} href={`/${tab.name}`}>
                      {tab.title}
                    </NavItem>
                  </LinkContainer>
                );
              })}
            </Nav>
          </div>
          <div className="col-sm-12">
            <Tab.Content animation>
              {this.props.tabsinfo[this.state.selected].comp}
            </Tab.Content>
          </div>
        </div>

      </Tab.Container>
    );
  }
}

export default TmgTabs;
