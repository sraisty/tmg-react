import { expect } from 'meteor/practicalmeteor:chai';
import { log } from 'meteor/practicalmeteor:loglevel';

import { isTrackEvent, isFieldEvent } from '../../imports/api/meetEventUtils';

/**
 * The following eslint diable lines (in comments) are need to get Chai
 * tests to work without esLint errors:
***/
/* eslint func-names: 0 */              // Off
/* eslint no-unused-expressions: 0 */   // off
/* eslint no-unused-vars: 0 */          // off
/* eslint prefer-arrow-callback: 0 */   // off

const trackEvents = ['100M', '100H', '110H', '200M', '300H', '400M', '800M', '1600M', '1500M', '1600M', '3200M', '4x400', '4x100'];

const fieldEvents = ['PV', 'HJ', 'DT', 'JT', 'LJ', 'TJ', 'SP', 'HT'];

const notEvents = ['100', '440Y', '1', '100m', '100 meter', '100 M', '100 h', '100 H', 'pv', 'hj', 'shot put', 'hJ', '5000', '300H', '300 h', '4 x 400', '1600Relay', '4x 400', '4X400', '4 X 100'];

describe('Is it Field/Track/Relay Event tests?', function () {
  describe('isTrackEvent() - SHOULD PASS', function () {
    trackEvents.forEach(function (eventCode) {
      it(eventCode, function () {
        expect(isTrackEvent(eventCode)).to.be.true;
      });
    });
  });

  describe('isTrackEvent() - SHOULD FAIL WITH FIELD EVENTS', function () {
    fieldEvents.forEach(function (eventCode) {
      it(eventCode, function () {
        expect(isTrackEvent(eventCode)).to.not.be.true;
      });
    });
  });

  describe('isTrackEvent() - SHOULD FAIL WITH non-Events', function () {
    notEvents.forEach(function (eventCode) {
      it(eventCode, function () {
        expect(isTrackEvent(eventCode)).to.not.be.true;
      });
    });
  });

  describe('isFieldEvent() - SHOULD PASS', function () {
    fieldEvents.forEach(function (eventCode) {
      it(eventCode, function () {
        expect(isTrackEvent(eventCode)).to.be.true;
      });
    });
  });

  describe('isFieldEvent() - SHOULD FAIL WITH Track EVENTS', function () {
    trackEvents.forEach(function (eventCode) {
      it(eventCode, function () {
        expect(isTrackEvent(eventCode)).to.not.be.true;
      });
    });
  });

  describe('isFieldEvent() - SHOULD FAIL WITH non-Events', function () {
    notEvents.forEach(function (eventCode) {
      it(eventCode, function () {
        expect(isTrackEvent(eventCode)).to.not.be.true;
      });
    });
  });
});
