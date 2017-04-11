import React from 'react';

// Someday refactor this to only import from './Header'
// See Meteor issue 7138: https://github.com/meteor/meteor/issues/7138
import Header from './Header/index';
import Footer from './Footer';
import TmgTabs from './TmgTabs';

function Base() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container-fluid">
        <TmgTabs />
        blah
      </div>
      <Footer />
    </div>
  );
}

export default Base;
