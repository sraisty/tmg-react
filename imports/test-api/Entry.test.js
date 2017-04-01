import {chai} from 'meteor/practicalmeteor:chai';
import {Entry, parseEventTime, parseImpDist, fieldmarkImpToMetric} from '../../imports/api/Entry';

const expect = chai.expect;


const TestTimes = [
  {
    timeString: '01:24:32.45',
    seconds: 32.45,
    minutes: 24,
    hours: 1,
    handTimed: false,
    totSecs: 5072.45
  }, {
    timeString: '58.34',
    seconds: 58.34,
    minutes: 0,
    hours: 0,
    handTimed: false,
    totSecs: 58.34
  }, {
    timeString: '89.43',
    seconds: 89.43,
    minutes: 0,
    hours: 0,
    handTimed: false,
    totSecs: 89.43
  }, {
    timeString: '54.3h',
    seconds: 54.3,
    minutes: 0,
    hours: 0,
    handTimed: true,
    totSecs: 54.3
  }, {
    timeString: '4:07.5h',
    seconds: 7.5,
    minutes: 4,
    hours: 0,
    handTimed: true,
    totSecs: 247.5
  }, {
    timeString: '4:55.06',
    seconds: 55.06,
    minutes: 4,
    hours: 0,
    handTimed: false,
    totSecs: 295.06
  }, {
    timeString: '14:32.00',
    seconds: 32.00,
    minutes: 14,
    hours: 0,
    handTimed: false,
    totSecs: 872.0
  }, {
    timeString: '11.23',
    seconds: 11.23,
    minutes: 0,
    hours: 0,
    handTimed: false,
    totSecs: 11.23
  }, {
    timeString: '9.1h',
    seconds: 9.1,
    minutes: 0,
    hours: 0,
    handTimed: true,
    totSecs: 9.1
  }, {
    timeString: '12:06:02.00',
    seconds: 2.00,
    minutes: 6,
    hours: 12,
    handTimed: false,
    totSecs: 43562
  }, {
    timeString: '05:05.05',
    seconds: 5.05,
    minutes: 5,
    hours: 0,
    handTimed: false,
    totSecs: 305.05
  }
];

const TestDist = [
  {
    distString: '34\' 5',
    feet: 34,
    inches: 5.0,
    tot: 413
  }, {
    distString: '28\'10\"',
    feet: 28,
    inches: 10.25,
    tot: 346.25
  }, {
    distString: '23\' 0.50\"',
    feet: 23,
    inches: 0.5,
    tot: 276.5
  }, {
    distString: '31\' 11.75\"',
    feet: 31,
    inches: 11.75,
    tot: 383.75
  }, {
    distString: '4\'8\"',
    feet: 4,
    inches: 8.5,
    tot: 56.5
  }, {
    distString: '4\' 0\"',
    feet: 4,
    inches: 0,
    tot: 48
  }, {
    distString: '12\'8.5\"',
    feet: 12,
    inches: 8.5,
    tot: 152.5
  }, {
    distString: '9\'7',
    feet: 9,
    inches: 7,
    tot: 115
  }, {
    distString: '15\'-3.75\"',
    feet: 15,
    inches: 3.75,
    tot: 183.75
  }, {
    distString: '16-9\"',
    feet: 16,
    inches: 9.25,
    tot: 201.25
  }, {
    distString: '155-6.5',
    feet: 155,
    inches: 6.5,
    tot: 1866.5
  }, {
    distString: '12\'',
    feet: 12,
    inches: 0,
    tot: 144
  }
];

describe('Test parseEventTime (in Entry.js)', function() {
  it('Test this test.  Length of testArray is as expected', function() {
    expect(TestTimes.length).to.equal(11);
    expect(TestTimes[0].timeString).to.equal('01:24:32.45');
    let tt = TestTimes[0];
    expect(tt.timeString).to.equal('01:24:32.45');
    const duration = parseEventTime(tt.timeString);
    expect(duration).to.exist;
  });

  describe('Legal time marks for track events', function() {
    for (let i = 0; i < TestTimes.length; i++) {
      let tt = TestTimes[i];
      it(tt.timeString, function() {
        const duration = parseEventTime(tt.timeString);
        expect(duration).to.exist;
        expect(duration.seconds == tt.seconds).to.be.ok;
        expect(duration.minutes == tt.minutes).to.be.ok;
        expect(duration.hours == tt.hours).to.be.ok;
        expect(duration.handTimed).to.equal(tt.handTimed);
      });
    }
  });

  describe('Illegal time marks for track events', function() {
    it('Nonsense', function() {
      const duration = parseEventTime('BLAH BLAH BLAH');
      expect(duration).to.be.false;
    });
    it('Illegal Track (used Field Mark: 12-10.25\")', function() {
      const duration = parseEventTime('12-10.25\"');
      expect(duration).to.be.false;
    });
    it('Illegal Track (used Field Mark: 12\')', function() {
      const duration = parseEventTime('12\'');
      expect(duration).to.be.false;
    });
    it('Illegal Track (used Combined Event 3050 points)', function() {
      const duration = parseEventTime('3050');
      expect(duration).to.be.false;
    });
  });
});

describe('Test parsing and conversion of field distance marks', function() {
  describe('Legal imperial distance marks for field events.', function() {
    for (let i = 0; i < TestDist.length; i++) {
      let td = TestDist[i];
      it(td.distString, function() {
        const distance = parseImpDist(td.distString);
        expect(distance.feet == td.feet).to.be.ok;
        expect(distance.inches == td.inches).to.be.ok;

        const metricDist = fieldmarkImpToMetric(td.feet, td.inches);
        expect(metricDist).to.be.a('number');
      });
    }
  });

  describe('Illegal imperial distance marks for field marks.', function() {
    it('just inches', function() {
      const dist = parseImpDist('3\"');
      expect(dist).to.be.false;
    });
    it('Nonsense', function() {
      const dist = parseImpDist('BLAH BLAH BLAH');
      expect(dist).to.be.false;
    });
    it('Too high precision', function() {
      const dist = parseImpDist('345.356');
      expect(dist).to.be.false;
    });
  });
});

describe('Entry - is it Field/Track/Relay Event tests?', function() {
  describe('trackEvent()', function() {
    let e = new Entry({firstName: 'Tyrion', lastName: 'Lannister', gender: 'M', eventCode: '100'});
    it('100', function() {
      expect(e.trackEvent()).to.be.true;
    });
    it('400', function() {
      e.eventCode = '400';
      expect(e.trackEvent()).to.be.true;
    });
    it('1600', function() {
      e.eventCode = '1600';
      expect(e.trackEvent()).to.be.true;
    });
    it('1500', function() {
      e.eventCode = '1500';
      expect(e.trackEvent()).to.be.true;
    });
    it('110H', function() {
      e.eventCode = '4x100';
      expect(e.trackEvent()).to.be.true;
    });
    it('300H', function() {
      e.eventCode = '4x100';
      expect(e.trackEvent()).to.be.true;
    });
    it('4x100', function() {
      e.eventCode = '4x100';
      expect(e.trackEvent()).to.be.true;
    });
    it('4x400', function() {
      e.eventCode = '4x400';
      expect(e.trackEvent()).to.be.true;
    });
    it('INVALID: \'PV\'', function() {
      e.eventCode = 'PV';
      expect(e.trackEvent()).to.be.false;
    });
    it('INVALID: \'DT\'', function() {
      e.eventCode = 'DT';
      expect(e.trackEvent()).to.be.false;
    });
    it('INVALID: 830', function() {
      e.eventCode = '830';
      expect(e.trackEvent()).to.be.false;
    });
  });

  describe('fieldEvent()', function() {
    let e = new Entry({firstName: 'Tyrion', lastName: 'Lannister', gender: 'M', eventCode: 'HJ'});
    it('HJ', function() {
      expect(e.fieldEvent()).to.be.true;
    });
    it('PV', function() {
      e.eventCode = 'PV';
      expect(e.fieldEvent()).to.be.true;
    });
    it('DT', function() {
      e.eventCode = 'DT';
      expect(e.fieldEvent()).to.be.true;
    });
    it('INVALID: 100H', function() {
      e.eventCode = '100H';
      expect(e.fieldEvent()).to.be.false;
    });
    it('INVALID: 4x400', function() {
      e.eventCode = '4x400';
      expect(e.fieldEvent()).to.be.false;
    });
    it('INVALID: NONSENSE', function() {
      e.eventCode = 'NONSENSE';
      expect(e.fieldEvent()).to.be.false;
    });
  });
});

describe('convertMarkToNumber', function() {
  describe('Track - timed events', function() {
    let e = new Entry({firstName: 'Tyrion', lastName: 'Lannister', gender: 'M', eventCode: '1600'});
    for (let i = 0; i < TestTimes.length; i++) {
      let tt = TestTimes[i];
      it('Convert ' + tt.timeString + ' to ' + tt.totSecs + ' seconds', function() {
        e.markSubmitted = tt.timeString;
        expect(e.convertMarkToNumber()).to.be.true;
        expect(e.markSeconds).to.equal(tt.totSecs);
        expect(e.measureUnit).to.equal('seconds');
      });
    }
  });
  describe('Field Events - imperial measures', function() {
    // TODO
    let e = new Entry({firstName: 'Cersei', lastName: 'Lannister', gender: 'F', eventCode: 'DT'});
    it('TODO - convertMarktoNumber for Field Events', function() {});
  });

  describe('fieldmarkImpToMetric', function() {
    it('9\'0.25\" = 2.75m', function() {
      let metricDist = fieldmarkImpToMetric(9, 0.25);
      expect(metricDist).to.equal('2.75');
    });

    it('240\'6.25\" = 73.31m', function() {
      let metricDist = fieldmarkImpToMetric(240, 6.25);
      expect(metricDist).to.equal('73.31');
    });

    it('34\'7.00\" = 10.54m', function() {
      let metricDist = fieldmarkImpToMetric(34, 7);
      expect(metricDist).to.equal('10.54');
    });

    it('78\'11.5\" = 24.06m', function() {
      let metricDist = fieldmarkImpToMetric(78, 11.5);
      expect(metricDist).to.equal('24.06');
    });
  });
});
