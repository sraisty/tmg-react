import React from 'react';
import ReactDOM from 'react-dom';
import log from 'meteor/practicalmeteor:loglevel';

import Base from '/client/components/Layout/Base';


const App = () => {
  return (
    <div>
      <Base />
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );
});
