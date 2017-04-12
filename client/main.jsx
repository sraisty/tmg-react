import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
// import log from 'meteor/practicalmeteor:loglevel';

import Base from './components/Layout/Base';
import TmgTabs from './components/Layout/TmgTabs';

import MeetEvents from './components/MeetEvents/index';
import Athletes from './components/Athletes/index';
import Teams from './components/Teams/index';
import Scores from './components/Scores/index';
import MeetInfo from './components/MeetInfo/index';
import MeetAdmin from './components/MeetAdmin/index';
import NotFound from './components/NotFound';


Meteor.startup(() => {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Base}>
        <Route component={TmgTabs}>
          <IndexRedirect to="info" />
          {/* <IndexRoute component={MeetEvents} /> */}
          <Route path="events" component={MeetEvents} />
          <Route path="athletes" component={Athletes} />
          <Route path="teams" component={Teams} />
          <Route path="scores" component={Scores} />
          <Route path="info" component={MeetInfo} />
          <Route path="meetadmin" component={MeetAdmin} />
          <Route path="*" component={NotFound} />
        </Route>
      </Route>
    </Router>,
    document.getElementById('app'),
  );
});
