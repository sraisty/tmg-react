import React from 'react';
import ReactDOM from 'react-dom';
// import log from 'meteor/practicalmeteor:loglevel';

import Base from './components/Layout/Base';


function App() {
  return (
    <div>
      <Base />
    </div>
  );
}

Meteor.startup(() => {
  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );
});
