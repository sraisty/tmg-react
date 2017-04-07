import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: {
        mEvents: false,
      },
    };
  }
  render() {
    return (
      // <aside className="aside">
      <aside>
        <div className="aside-inner">
          <nav data-sidebar-anyclick-close="" className="sidebar">
            <ul className="nav">
              <li className="nav-heading">
                MAIN NAV
              </li>
              <li className="active">
                <div className="nav-item">
                  <div className="pull-right label label-danger">3</div>
                  <em className="fa fa-smile-o">NAV-ITEM</em>
                </div>
                {/* <Collapse in={ this.state.collapse.X } timeout= { 100 }> */}
                <ul className="nav sidebar-subnav">
                  <li className="sidebar-subnav-header">SubNavHeader</li>
                  <li className="active">
                    <a href="#" title="EventNameBlah">Active Event Name</a>
                  </li>
                  <li className="">
                    <a href="#" title="EventNameBlah">Event 2 Name</a>
                  </li>
                </ul>
                {/* </Collapse> */}
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
