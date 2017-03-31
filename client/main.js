import React from 'react';
import ReactDOM from 'react-dom';

import Base from './components/Layout/Base';

import '../imports/styles/font-awesome.min.css';

// import '../imports/styles/bootstrap.scss';
// import '../imports/styles/app.scss';
// import '../imports/styles/themes/theme-g.scss';
import '../imports/styles/default-bootstrap/bootstrap.css';
import '../imports/styles/default-bootstrap/bootstrap-theme.css';
import '../imports/styles/tmg_bootstrap.css';
// import '../imports/styles/app/utils.scss';

const App = () => {
  return(
    <div>
        <Base />
    </div>

  );
}

Meteor.startup( () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
