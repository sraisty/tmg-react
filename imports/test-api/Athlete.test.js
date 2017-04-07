import {Meteor} from 'meteor/meteor';
import {chai} from 'meteor/practicalmeteor:chai';
import {log} from 'meteor/practicalmeteor:loglevel';

import {Athlete} from '../api/Athlete';

const expect = chai.expect;

/**
 * The following eslint diable lines (in comments) are need to get Mocha/Chai
 * tests to work without esLint errors:
***/
/* eslint func-names: 0 */  // Off
/* eslint no-unused-expressions: 0 */   // off
/* eslint prefer-arrow-callback: 0 */  // off


describe('Test Athletes Class', function () {
  describe('Test: new Athlete(params)', function () {
    it('New Athlete with hyphen, space, accent & apostrophe in name',
      function () {
        const testAthlete = new Athlete({
          competitorNum: 1,
          firstName: 'Laura Lynn',   // space in name
          middleInitial: 'X',
          lastName: 'Baška-O\'Neal', // hyphenation
          gender: 'F',
          institutionName: 'Pacific Collegiate',
          divisionName: 'Varsity',
          schoolYear: '10',
        });
        expect(testAthlete.competitorNum).to.deep.equal(1);
        expect(testAthlete.firstName).to.deep.equal('Laura Lynn');
        expect(testAthlete.middleInitial).to.deep.equal('X');
        expect(testAthlete.lastName).to.deep.equal('Baška-O\'Neal');
        expect(testAthlete.gender).to.deep.equal('F');
        expect(testAthlete.institutionName).to.deep.equal('Pacific Collegiate');
        expect(testAthlete.divisionName).to.deep.equal('Varsity');
        expect(testAthlete.schoolYear).to.equal('10');
      },
    );

    it('Lowercase letter for gender gets converted to uppercase', function () {
      const testAthlete = new Athlete({
        firstName: 'John',   // space in name
        lastName: 'Snow', // hyphenation
        gender: 'm',
      });
      expect(testAthlete.firstName).to.deep.equal('John');
      expect(testAthlete.lastName).to.deep.equal('Snow');
      expect(testAthlete.gender).to.deep.equal('M');
      expect(Object.getOwnPropertyNames(testAthlete).length).to.equal(7);
    });

    it('New, unattached athlete with only required fields.',
      function () {
        const testAthlete = new Athlete({
          firstName: 'Arya',   // space in name
          lastName: 'Stark', // hyphenation
          gender: 'F',
        });
        expect(Object.getOwnPropertyNames(testAthlete).length).to.equal(7);
        expect(testAthlete.competitorNum).to.be.undefined;
        expect(testAthlete.firstName).to.deep.equal('Arya');
        expect(testAthlete.lastName).to.deep.equal('Stark');
        expect(testAthlete.middleInitial).to.deep.equal('');
        expect(testAthlete.institutionName).to.deep.equal('UNATTACHED');
        expect(testAthlete.schoolYear).to.be.undefined;
        expect(testAthlete.divisionName).to.deep.equal('Varsity');

        expect(testAthlete.institutionCode).to.be.undefined;
        expect(testAthlete.state).to.be.undefined;
      },
    );

    it('New unattached athlete with minimal fields + school year provided',
      function () {
        const testAthlete = new Athlete({
          firstName: 'Sansa',   // space in name
          lastName: 'Stark', // hyphenation
          gender: 'F',
          schoolYear: 'SR',
        });
        expect(Object.getOwnPropertyNames(testAthlete).length).to.equal(7);
        expect(testAthlete.competitorNum).to.be.undefined;
        expect(testAthlete.firstName).to.deep.equal('Sansa');
        expect(testAthlete.lastName).to.deep.equal('Stark');
        expect(testAthlete.middleInitial).to.deep.equal('');
        expect(testAthlete.institutionName).to.deep.equal('UNATTACHED');
        expect(testAthlete.schoolYear).to.deep.equal('SR');
        expect(testAthlete.divisionName).to.deep.equal('Varsity');
      },
    );

    it('All Fields Are Provided', function () {
      const testAthlete = new Athlete({
        firstName: 'Sansa',   // space in name
        lastName: 'Stark', // hyphenation
        gender: 'F',
        schoolYear: 'SR',
      });
      expect(Object.getOwnPropertyNames(testAthlete).length).to.equal(7);
      expect(testAthlete.competitorNum).to.be.undefined;
      expect(testAthlete.firstName).to.deep.equal('Sansa');
      expect(testAthlete.lastName).to.deep.equal('Stark');
      expect(testAthlete.middleInitial).to.deep.equal('');
      expect(testAthlete.institutionName).to.deep.equal('UNATTACHED');
      expect(testAthlete.schoolYear).to.deep.equal('SR');
      expect(testAthlete.divisionName).to.deep.equal('Varsity');
    });

    it('CompetitorNumber is incrementing', function () {
      const testAthlete = new Athlete({
        firstName: 'Sansa',   // space in name
        lastName: 'Stark', // hyphenation
        gender: 'F',
        schoolYear: 'SR',
      });
      const testAthlete2 = new Athlete({
        firstName: 'Theon',
        lastName: 'Greyjoy',
        gender: 'M',
        schoolYear: '11',
      });
      const compNum1 = testAthlete.competitorNum;
      const compNum2 = testAthlete2.competitorNum;
      expect(compNum2).to.be.deep.equal(compNum1 + 1);
    });

    it('Throws an error when lastname is not provided.', function () {
      const fn = function () {
        const a = new Athlete({firstName: 'Sansa', gender: 'F'});
      };
      expect(fn).to.throw('ERROR new Athlete(): missing lastName');
    });

    it('Throws an error when firstname is not provided.', function () {
      const fn = function () {
        const a = new Athlete({lastName: 'Stark', gender: 'F'});
      };
      expect(fn).to.throw('ERROR new Athlete(): missing firstName');
    });

    it('Throws an error when gender is not provided.', function () {
      const fn = function () {
        const a = new Athlete({lastName: 'Stark', firstName: 'Sansa'});
      };
      expect(fn).to.throw('ERROR new Athlete(): missing gender');
    });
  });

  describe('Test: Athlete.isSame(params)', function () {
    it('Normal Case: Tests whether the athlete described in params ' +
        'is the same as this one',
      function () {
        const testAthlete = new Athlete({
          competitorNum: '1',
          firstName: 'Laura Lynn',   // space in name
          middleInitial: 'X',
          lastName: 'Baška-O\'Neal', // hyphenation
          gender: 'F',
          institutionName: 'Pacific Collegiate',
          divisionName: 'Varsity',
          schoolYear: '10',
        });
        const {same, warning} = testAthlete.isSame({
          firstName: 'Laura Lynn',
          lastName: 'Baška-O\'Neal',
          middleInitial: 'X',
          gender: 'F',
          institutionName: 'Pacific Collegiate',
          schoolYear: '10',
          // Note that the athlete's division & competitor num are not compared
        });
        expect(same).is.true;
      },
    );

    it('Athlete with more set fields compared to less parameters',
      function () {
        const testAthlete = new Athlete({
          competitorNum: 1,
          firstName: 'Laura Lynn',   // space in name
          middleInitial: 'X',
          lastName: 'Baška-O\'Neal', // hyphenation
          gender: 'F',
          institutionName: 'Pacific Collegiate',
          divisionName: 'Varsity',
          schoolYear: '10',
          email: 'laura@wow.com',
          countryCode: 'USA',
        });

        const {same, warning} = testAthlete.isSame({
          firstName: 'Laura Lynn',
          lastName: 'Baška-O\'Neal',
          middleInitial: 'X',
          gender: 'F',
          institutionName: 'Pacific Collegiate',
          schoolYear: '10',
          // Note that the athlete's division is not compared
        });
        expect(same).is.true;
      },
    );

    it('Comparing fields that are equal but with different lower/upper case',
      function () {
        const testAthlete = new Athlete({
          competitorNum: 1,
          firstName: 'Laura Lynn',
          lastName: 'Baška-O\'Neal',
          middleInitial: 'X',
          gender: 'F',
          institutionName: 'Pacific Collegiate',
          schoolYear: '10',
          division: 'Varsity',
        });
        const {same, warning} = testAthlete.isSame({
          firstName: 'LAURA LYNN',   // space in name
          middleInitial: 'X',
          lastName: 'BAšKA-O\'NEAL', // hyphenation
          gender: 'F',
          institutionName: 'PACIFIC COLLEGIATE',
          divisionName: 'VARSITY',
          schoolYear: '10',
          // Note that the athlete's division is not compared
        });
        expect(same).is.true;
      },
    );

    it('Athlete has school year & comparison does not, so isSame() is false',
      function () {
        const testAthlete = new Athlete({
          competitorNum: 1,
          firstName: 'Laura Lynn',
          lastName: 'Baška-O\'Neal',
          middleInitial: 'X',
          gender: 'F',
          institutionName: 'Pacific Collegiate',
          schoolYear: '10',
          division: 'Varsity',
        });
        const {same, warning} = testAthlete.isSame({
          firstName: 'LAURA LYNN',   // space in name
          middleInitial: 'X',
          lastName: 'BAšKA-O\'NEAL', // hyphenation
          gender: 'f',
          institutionName: 'PACIFIC COLLEGIATE',
          divisionName: 'VARSITY',
          // Note that the athlete's division is not compared
        });
        expect(same).is.false;
      },
    );

    it('Comparing just first/lastnames to the Athlete isn\'t sufficient',
      function () {
        const testAthlete = new Athlete({
          competitorNum: 1,
          firstName: 'Laura Lynn',   // space in name
          middleInitial: 'X',
          lastName: 'Baška-O\'Neal', // hyphenation
          gender: 'F',
          institutionName: 'Pacific Collegiate',
          divisionName: 'Varsity',
          schoolYear: '10',
          email: 'laura@wow.com',
          countryCode: 'USA',
        });
        const {same, warning} = testAthlete.isSame({
          firstName: 'Laura Lynn',
          lastName: 'Baška-O\'Neal',
        });
        expect(same).is.false;
      },
    );

    it('Only differ by the middle initial, but still should be false',
      function () {
        const testAthlete = new Athlete({
          competitorNum: 1,
          firstName: 'Laura Lynn',
          lastName: 'Baška-O\'Neal',
          middleInitial: 'X',
          gender: 'F',
          institutionName: 'Pacific Collegiate',
          division: 'Varsity',
        });
        const {same, warning} = testAthlete.isSame({
          competitorNum: 1,
          firstName: 'Laura Lynn',
          lastName: 'Baška-O\'Neal',
          middleInitial: '',
          gender: 'F',
          institutionName: 'Pacific Collegiate',
          // Note that the athlete's division is not compared
        });
        expect(same).is.false;
      },
    );
  });
});
