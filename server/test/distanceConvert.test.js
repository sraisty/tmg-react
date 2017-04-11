/**
 * The following eslint diable lines (in comments) are need to get Chai
 * tests to work without esLint errors:
***/
/* eslint func-names: 0 */              // Off
/* eslint no-unused-expressions: 0 */   // off
/* eslint no-unused-vars: 0 */          // off
/* eslint prefer-arrow-callback: 0 */   // off

import { expect } from 'meteor/practicalmeteor:chai';

import { parseImpDist, fieldMarkImpToMetric,
  convertFieldMarkToNumber, fieldMarkMetricToImp }
  from '../../imports/api/distanceConvert';

const TestDist = [
  {
    distString: '34\' 5',
    feet: 34,
    inches: 5.0,
    tot: 413,
  }, {
    distString: '28\'10"',
    feet: 28,
    inches: 10.25,
    tot: 346.25,
  }, {
    distString: '23\' 0.50"',
    feet: 23,
    inches: 0.5,
    tot: 276.5,
  }, {
    distString: '31\' 11.75"',
    feet: 31,
    inches: 11.75,
    tot: 383.75,
  }, {
    distString: '4\'8"',
    feet: 4,
    inches: 8.5,
    tot: 56.5,
  }, {
    distString: '4\' 0"',
    feet: 4,
    inches: 0,
    tot: 48,
  }, {
    distString: '12\'8.5"',
    feet: 12,
    inches: 8.5,
    tot: 152.5,
  }, {
    distString: '9\'7',
    feet: 9,
    inches: 7,
    tot: 115,
  }, {
    distString: '15\'-3.75"',
    feet: 15,
    inches: 3.75,
    tot: 183.75,
  }, {
    distString: '16-9"',
    feet: 16,
    inches: 9.25,
    tot: 201.25,
  }, {
    distString: '155-6.5',
    feet: 155,
    inches: 6.5,
    tot: 1866.5,
  }, {
    distString: '12\'',
    feet: 12,
    inches: 0,
    tot: 144,
  },
];

describe('Test parsing and conversion of field distance marks', function () {
  describe('Legal imperial distance marks for field events.', function () {
    for (let i = 0; i < TestDist.length; i++) {
      const td = TestDist[i];
      it(td.distString, function () {
        const distance = parseImpDist(td.distString);
        expect(distance.feet === td.feet).to.be.ok;
        expect(distance.inches === td.inches).to.be.ok;

        const metricDist = fieldMarkImpToMetric(td.feet, td.inches);
        expect(metricDist).to.be.a('number');
      });
    }
  });

  describe('Illegal imperial distance marks for field marks.', function () {
    it('just inches', function () {
      const dist = parseImpDist('3"');
      expect(dist).to.be.false;
    });
    it('Nonsense', function () {
      const dist = parseImpDist('BLAH BLAH BLAH');
      expect(dist).to.be.false;
    });
    it('Too high precision', function () {
      const dist = parseImpDist('345.356');
      expect(dist).to.be.false;
    });
  });


  describe('fieldmarkImpToMetric', function () {
    it('9\'0.25" = 2.75m', function () {
      const metricDist = fieldMarkImpToMetric(9, 0.25);
      expect(metricDist).to.equal('2.75');
    });

    it('240\'6.25" = 73.31m', function () {
      const metricDist = fieldMarkImpToMetric(240, 6.25);
      expect(metricDist).to.equal('73.31');
    });

    it('34\'7.00" = 10.54m', function () {
      const metricDist = fieldMarkImpToMetric(34, 7);
      expect(metricDist).to.equal('10.54');
    });

    it('78\'11.5" = 24.06m', function () {
      const metricDist = fieldMarkImpToMetric(78, 11.5);
      expect(metricDist).to.equal('24.06');
    });
  });
});
