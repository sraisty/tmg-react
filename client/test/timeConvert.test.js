/**
 * The following eslint diable lines (in comments) are need to get Chai
 * tests to work without esLint errors:
***/
/* eslint func-names: 0 */              // Off
/* eslint no-unused-expressions: 0 */   // off
/* eslint no-unused-vars: 0 */          // off
/* eslint prefer-arrow-callback: 0 */   // off

import { expect } from 'meteor/practicalmeteor:chai';

import { convertTimeMarkToSeconds, parseEventTime }
  from '../../imports/api/timeConvert';


const TestTimes = [
  {
    timeString: '01:24:32.45',
    seconds: 32.45,
    minutes: 24,
    hours: 1,
    handTimed: false,
    totSecs: 5072.45,
  }, {
    timeString: '58.34',
    seconds: 58.34,
    minutes: 0,
    hours: 0,
    handTimed: false,
    totSecs: 58.34,
  }, {
    timeString: '89.43',
    seconds: 89.43,
    minutes: 0,
    hours: 0,
    handTimed: false,
    totSecs: 89.43,
  }, {
    timeString: '54.3h',
    seconds: 54.3,
    minutes: 0,
    hours: 0,
    handTimed: true,
    totSecs: 54.3,
  }, {
    timeString: '4:07.5h',
    seconds: 7.5,
    minutes: 4,
    hours: 0,
    handTimed: true,
    totSecs: 247.5,
  }, {
    timeString: '4:55.06',
    seconds: 55.06,
    minutes: 4,
    hours: 0,
    handTimed: false,
    totSecs: 295.06,
  }, {
    timeString: '14:32.00',
    seconds: 32.00,
    minutes: 14,
    hours: 0,
    handTimed: false,
    totSecs: 872.0,
  }, {
    timeString: '11.23',
    seconds: 11.23,
    minutes: 0,
    hours: 0,
    handTimed: false,
    totSecs: 11.23,
  }, {
    timeString: '9.1h',
    seconds: 9.1,
    minutes: 0,
    hours: 0,
    handTimed: true,
    totSecs: 9.1,
  }, {
    timeString: '12:06:02.00',
    seconds: 2.00,
    minutes: 6,
    hours: 12,
    handTimed: false,
    totSecs: 43562,
  }, {
    timeString: '05:05.05',
    seconds: 5.05,
    minutes: 5,
    hours: 0,
    handTimed: false,
    totSecs: 305.05,
  },
];

describe('Test parseEventTime', function () {
  it('Test this test.  Length of testArray is as expected', function () {
    expect(TestTimes.length).to.equal(11);
    expect(TestTimes[0].timeString).to.equal('01:24:32.45');
    const tt = TestTimes[0];
    expect(tt.timeString).to.equal('01:24:32.45');
    const duration = parseEventTime(tt.timeString);
    expect(duration).to.exist;
  });

  describe('Legal time marks for track events', function () {
    for (let i = 0; i < TestTimes.length; i++) {
      const tt = TestTimes[i];
      it(tt.timeString, function () {
        const duration = parseEventTime(tt.timeString);
        expect(duration).to.exist;
        expect(duration.seconds == tt.seconds).to.be.ok;
        expect(duration.minutes == tt.minutes).to.be.ok;
        expect(duration.hours == tt.hours).to.be.ok;
        expect(duration.handTimed).to.equal(tt.handTimed);
      });
    }
  });

  describe('Illegal time marks for track events', function () {
    it('Nonsense', function () {
      const duration = parseEventTime('BLAH BLAH BLAH');
      expect(duration).to.be.false;
    });
    it('Illegal Track (used Field Mark: 12-10.25")', function () {
      const duration = parseEventTime('12-10.25"');
      expect(duration).to.be.false;
    });
    it('Illegal Track (used Field Mark: 12\')', function () {
      const duration = parseEventTime('12\'');
      expect(duration).to.be.false;
    });
    it('Illegal Track (used Combined Event 3050 points)', function () {
      const duration = parseEventTime('3050');
      expect(duration).to.be.false;
    });
  });
});

describe('Test convertTimeMarkToSeconds', function () {
  it('Still Needs Tests to be written', function () {
    expect(1 === 0);
  });
});
