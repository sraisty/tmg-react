import React from 'react';

// Someday refactor this to only import from './Header'
// See Meteor issue 7138: https://github.com/meteor/meteor/issues/7138
import Header from './Header/index';
import Footer from './Footer';
import TmgTabs from './TmgTabs';
import MeetEvents from '../MeetEvents/index';
import Teams from '../Teams/index';
import Athletes from '../Athletes/index';
import Scores from '../Scores/index';
import MeetInfo from '../MeetInfo/index';
import MeetAdmin from '../MeetAdmin/index';

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.tabsinfo = [
      { name: 'meetinfo', title: 'Meet Info', comp: <MeetInfo /> },
      { name: 'events', title: 'Events', comp: <MeetEvents /> },
      { name: 'athletes', title: 'Athletes', comp: <Athletes /> },
      { name: 'teams', title: 'Teams', comp: <Teams /> },
      { name: 'scores', title: 'Scores', comp: <Scores /> },
      { name: 'meetadmin',
        title: 'Admin',
        comp: <MeetAdmin />,
      },
    ];
  }


  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container-fluid">
          {/* {this.props.children} */}
          <TmgTabs
            selected={0}
            tabsinfo={this.tabsinfo}
          >
            {/* <TmgTab title="Meet Information" id="meetinfo">
              <div>insideTmgTab singular</div>
            </TmgTab> */}
          </TmgTabs>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Base;
