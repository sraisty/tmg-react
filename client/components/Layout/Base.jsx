import React from 'react';

// Someday refactor this to only import from './Header'
// See Meteor issue 7138: https://github.com/meteor/meteor/issues/7138
import Header from './Header/index.jsx';
import ContentWrapper from './ContentWrapper/index.jsx';
import Footer from './Footer.jsx';

const Base = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container-fluid">
        <ContentWrapper />
      </div>
      <Footer />
    </div>
  );
}

export default Base;
