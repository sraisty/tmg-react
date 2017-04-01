import {chai} from 'meteor/practicalmeteor:chai';

import {HytekEntries} from '../../imports/api/HytekEntries/HytekEntries';

const expect = chai.expect;
const FILEBASE = './test-data/';


describe('Test HyTek Entries Module', function() {
  /** */
  describe('HyTek File Not Found', function() {
    it('Try to open a file that doesn\'t exist and fail', function() {
      const htNewFunc = function() {
        new HytekEntries('/non-existant/file');
      };
      expect(htNewFunc).to.throw(/no such file or directory/);
    });
  });

  describe('Parse \'I\' Records from File', function() {
    it('Parses a file with one fully-filled, correct I record', function() {
      const htE = new HytekEntries( FILEBASE + 'I-Line-Normal.txt');
      expect(htE.athleteRecs).to.have.length(1);
      const ath = htE.athleteRecs[0];
      expect(ath.firstName).to.deep.equal('Tyrion');
      expect(ath.lastName).to.deep.equal('Lannister');
      expect(ath.middleInitial).to.deep.equal('I');
      expect(ath.gender).to.deep.equal('M');
      expect(ath.institutionCode).to.deep.equal('TLS');
      expect(ath.institutionName).to.equal('Team Lannister');
      expect(ath.age).to.deep.equal('36');
      expect(ath.schoolYear).to.deep.equal('11');
      expect(ath.address1).to.deep.equal('Klis Fortress');
      expect(ath.address2).to.deep.equal('Šibenik');
      expect(ath.city).to.deep.equal('Meereen');
      expect(ath.state).to.deep.equal('CA');
      expect(ath.postalCode).to.deep.equal('12345');
      expect(ath.countryCode).to.deep.equal('USA');
      expect(ath.citizenCountryCode).to.deep.equal('AUS');
      expect(ath.homePhone).to.equal('(650) 555-1212');
      expect(ath.officePhone).to.equal('+1(408)555-1212');
      expect(ath.faxPhone).to.equal('1-415-555-1212');
      expect(ath.shirtSize).to.deep.equal('Med');
      expect(ath.registrationNum).to.deep.equal('TYRLANI1010');
      expect(ath.competitorNum).to.equal('101');
      expect(ath.email).to.equal('tyrion@gameofthrones.com');
      expect(ath.disabledClassification).to.deep.equal('');
    });

    it('Parses a very short I line with just minimum info', function() {
      const htE = new HytekEntries(
        FILEBASE + 'I-Line-Short.txt');
      expect(htE.athleteRecs).to.have.length.above(0);
      const ath = htE.athleteRecs[0];
      expect(ath.firstName).to.deep.equal('Tyrion');
      expect(ath.lastName).to.deep.equal('Lannister');
      expect(ath.middleInitial).to.deep.equal('');
      expect(ath.gender).to.deep.equal('M');
      expect(ath.institutionCode).to.deep.equal('TLS');
      expect(ath.institutionName).to.equal('Team Lannister');
      expect(ath.schoolYear).to.deep.equal('12');
    });

    it('First Name too long, so record doesn\'t parse', function() {
      const htE = new HytekEntries(FILEBASE + 'I-Line-TooLong-FirstName.txt');
      expect(htE).to.exist;
      expect(htE.warnings).to.have.length.above(0);
      expect(htE.athleteRecs).to.have.lengthOf(0);
      expect(htE.indivEntries).to.have.lengthOf(0);
      expect(htE.relayEntries).to.have.lengthOf(0);
    });

    it('Bad Gender, so record doesn\'t parse', function() {
      const htE = new HytekEntries(FILEBASE + 'I-Line-Bad-Gender.txt');
      expect(htE).to.exist;
      expect(htE.warnings).to.have.length.above(0);
      expect(htE.athleteRecs).to.have.lengthOf(0);
      expect(htE.indivEntries).to.have.lengthOf(0);
      expect(htE.relayEntries).to.have.lengthOf(0);
    });

    it('OK. Lowercase Gender, but Record Parses Anyway', function() {
      const htE = new HytekEntries(FILEBASE + 'I-Line-Lowercase-Gender.txt');
      expect(htE).to.exist;
      expect(htE.warnings).to.have.lengthOf(0);
      expect(htE.athleteRecs).to.have.lengthOf(1);
      expect(htE.indivEntries).to.have.lengthOf(0);
      expect(htE.relayEntries).to.have.lengthOf(0);
    });

    it('Bad Country Code', function() {
      const htE = new HytekEntries(FILEBASE + 'I-Line-Bad-CountryCode.txt');
      expect(htE).to.exist;
      expect(htE.warnings).to.have.length.above(0);
      expect(htE.athleteRecs).to.have.lengthOf(0);
      expect(htE.indivEntries).to.have.lengthOf(0);
      expect(htE.relayEntries).to.have.lengthOf(0);
    });

    it('Too long gender (\'Male\')', function() {
      const htE = new HytekEntries(FILEBASE + 'I-Line-TooLong-Gender.txt');
      expect(htE).to.exist;
      expect(htE.warnings).to.have.length.above(0);
      expect(htE.athleteRecs).to.have.lengthOf(0);
      expect(htE.indivEntries).to.have.lengthOf(0);
      expect(htE.relayEntries).to.have.lengthOf(0);
    });

    it('Bad School Year (\'HI\')', function() {
      const htE = new HytekEntries(FILEBASE + 'I-Line-Bad-Schoolyear.txt');
      expect(htE).to.exist;
      expect(htE.warnings).to.have.length.above(0);
      expect(htE.athleteRecs).to.have.lengthOf(0);
      expect(htE.indivEntries).to.have.lengthOf(0);
      expect(htE.relayEntries).to.have.lengthOf(0);
    });

    it('Bad School Year (\'14\')', function() {
      const htE = new HytekEntries( FILEBASE + 'I-Line-Bad-Schoolyear2.txt');
      expect(htE).to.exist;
      expect(htE.warnings).to.have.length.above(0);
      expect(htE.athleteRecs).to.have.lengthOf(0);
      expect(htE.indivEntries).to.have.lengthOf(0);
      expect(htE.relayEntries).to.have.lengthOf(0);
    });

    it('Bad School Year (too long: \'junior\')', function() {
      const htE = new HytekEntries(FILEBASE + 'I-Line-Bad-Schoolyear3.txt');
      expect(htE).to.exist;
      expect(htE.warnings).to.have.length.above(0);
      expect(htE.athleteRecs).to.have.lengthOf(0);
      expect(htE.indivEntries).to.have.lengthOf(0);
      expect(htE.relayEntries).to.have.lengthOf(0);
    });

    it('TODO: 2 duplicate I lines for one athlete', function() {
      const htE = new HytekEntries(
        FILEBASE +
        'I-Line-Duplicate-Athlete.txt');
      expect(htE).to.exist;
      expect(htE.warnings).to.have.length.above(0);
      expect(htE.athleteRecs).to.have.lengthOf(1);
      expect(htE.indivEntries).to.have.lengthOf(0);
      expect(htE.relayEntries).to.have.lengthOf(0);
    });

    it('2 non-duplicate but equivalent I lines for one athlete',
      function() {
        const htE = new HytekEntries(FILEBASE +
            'I-Line-Double-Athlete.txt');
        expect(htE).to.exist;
        expect(htE.warnings).to.have.length.above(0);
        expect(htE.athleteRecs).to.have.lengthOf(1);
        expect(htE.indivEntries).to.have.lengthOf(0);
        expect(htE.relayEntries).to.have.lengthOf(0);
      }
    );

    it('TODO: 2 I-line entries for same athlete, but one has too many' +
         'fields missing. Should warn but continue.', function() {
      const htE = new HytekEntries(
        FILEBASE + '/I-Line-Double-Athlete-NotDetected.txt');
      expect(htE).to.exist;
      expect(htE.warnings).to.have.length.above(0);
      expect(htE.athleteRecs).to.have.lengthOf(2);
      expect(htE.indivEntries).to.have.lengthOf(0);
      expect(htE.relayEntries).to.have.lengthOf(0);
    });
  });  // end I-Line

  describe('Parse \'D\' Records from File', function() {
    it('Parses a file with one fully-filled, correct D record', function() {
      const htE = new HytekEntries(FILEBASE + 'D-Line-Normal.txt');
      expect(htE.indivEntries).to.have.length(1);
      const iEnt = htE.indivEntries[0];
      expect(iEnt.firstName).to.deep.equal('Cersei');
      expect(iEnt.lastName).to.deep.equal('Lannister');
      expect(iEnt.middleInitial).to.deep.equal('');
      expect(iEnt.gender).to.deep.equal('F');
      expect(iEnt.institutionCode).to.equal('TLS');
      expect(iEnt.institutionName).to.equal('Team Lannister');
      expect(iEnt.age).to.equal('44');
      expect(iEnt.schoolYear).to.deep.equal('SR');
      expect(iEnt.eventCode).to.deep.equal('100');
      expect(iEnt.mark).to.equal('14.54');
      expect(iEnt.measureSys).to.deep.equal('E');
      expect(iEnt.divisionNum).to.equal('1');
    });

    it('Duplicate D lines', function() {
      const htE = new HytekEntries(FILEBASE + 'D-Line-Duplicate-Entry.txt');
      expect(htE.indivEntries).to.have.length(1);
      expect(htE.warnings).to.have.length.above(0);
      const iEnt = htE.indivEntries[0];
      expect(iEnt.firstName).to.deep.equal('Cersei');
      expect(iEnt.lastName).to.deep.equal('Lannister');
      expect(iEnt.middleInitial).to.deep.equal('');
      expect(iEnt.gender).to.deep.equal('F');
      expect(iEnt.institutionCode).to.deep.equal('TLS');
      expect(iEnt.institutionName).to.equal('Team Lannister');
      expect(iEnt.age).to.equal('44');
      expect(iEnt.schoolYear).to.deep.equal('SR');
      expect(iEnt.eventCode).to.deep.equal('100');
      expect(iEnt.mark).to.equal('14.54');
      expect(iEnt.measureSys).to.deep.equal('E');
      expect(iEnt.divisionNum).to.equal('1');
    });

    it('Bad Event D line', function() {
      const htE = new HytekEntries(FILEBASE + 'D-Line-Bad-Event.txt');
      expect(htE).to.exist;
      expect(htE.warnings).to.have.length.above(0);
      expect(htE.athleteRecs).to.have.lengthOf(0);
      expect(htE.indivEntries).to.have.lengthOf(0);
      expect(htE.relayEntries).to.have.lengthOf(0);
    });
  });  // end D Line

  describe('Parse \'E\' Records from File', function() {
    it('Parses a file with one fully-filled, correct E record', function() {
      const htE = new HytekEntries(FILEBASE + 'E-Line-Normal.txt');
      expect(htE.indivEntries).to.have.length(1);
      const iEnt = htE.indivEntries[0];
      expect(iEnt.firstName).to.deep.equal('Cersei');
      expect(iEnt.lastName).to.deep.equal('Lannister');
      expect(iEnt.middleInitial).to.deep.equal('');
      expect(iEnt.gender).to.deep.equal('F');
      expect(iEnt.institutionCode).to.deep.equal('TLS');
      expect(iEnt.institutionName).to.equal('Team Lannister');
      expect(iEnt.age).to.equal('94');
      expect(iEnt.schoolYear).to.deep.equal('SR');
      expect(iEnt.eventCode).to.deep.equal('100');
      expect(iEnt.mark).to.equal('14.54');
      expect(iEnt.measureSys).to.deep.equal('E');
      expect(iEnt.divisionNum).to.equal('1');
    });

    it('Bad Event E line', function() {
      const htE = new HytekEntries(FILEBASE + 'E-Line-Bad-Event.txt');
      expect(htE).to.exist;
      expect(htE.warnings).to.have.length.above(0);
      expect(htE.athleteRecs).to.have.lengthOf(0);
      expect(htE.indivEntries).to.have.lengthOf(0);
      expect(htE.relayEntries).to.have.lengthOf(0);
    });
  });  // end E line


  describe('Parse \'Q\' Relay Records from File', function() {
    it('Parses a file with one fully-filled, correct Q record,' +
      ' for a relay team entry', function() {
        const htE = new HytekEntries(FILEBASE + 'Q-Line-Normal.txt');
        const qEntry = htE.relayEntries[0];
        expect(htE.relayEntries).to.have.length(1);
        expect(qEntry.institutionCode).to.deep.equal('TSV');
        expect(qEntry.institutionName).to.deep.equal('Team Silicon Valley');
        expect(qEntry.relayLetter).to.deep.equal('A');
        expect(qEntry.relayGender).to.deep.equal('M');
        expect(qEntry.relayAge).to.deep.equal('');
        expect(qEntry.eventCode).to.deep.equal('4x100');
        expect(qEntry.mark).to.equal('52.39');
        expect(qEntry.measureSys).to.deep.equal('M');
        expect(qEntry.divisionNum).to.deep.equal('1');
        expect(qEntry.priorRoundFinishPlace).to.deep.equal('2');
        expect(qEntry.declarationStatus).to.deep.equal('D');
        expect(qEntry.entryNote).to.equal('This is an entry note');

        expect(qEntry.runners).to.have.lengthOf(6);
        expect(qEntry.runners[0].firstName).to.equal('Richard');
        expect(qEntry.runners[0].competitorNum).to.exist;
        expect(qEntry.runners[1].firstName).to.equal('Erlich');
        expect(qEntry.runners[1].competitorNum).to.exist;
        expect(qEntry.runners[2].firstName).to.equal('Jared');
        expect(qEntry.runners[2].competitorNum).to.exist;
        expect(qEntry.runners[3].firstName).to.equal('Dinesh');
        expect(qEntry.runners[3].competitorNum).to.exist;
        expect(qEntry.runners[4].firstName).to.equal('Bertram');
        expect(qEntry.runners[4].competitorNum).to.exist;
        expect(qEntry.runners[5].firstName).to.equal('Big Head');
        expect(qEntry.runners[5].competitorNum).to.exist;
      }
    );

    it('Bad Event Q line', function() {
      const htE = new HytekEntries(FILEBASE + 'Q-Line-Bad-Event.txt');
      expect(htE).to.exist;
      expect(htE.warnings).to.have.length.above(0);
      expect(htE.athleteRecs).to.have.lengthOf(0);
      expect(htE.indivEntries).to.have.lengthOf(0);
      expect(htE.relayEntries).to.have.lengthOf(0);
    });
  });  // end Qline Tests


  describe('Parse \'R\' Relay Records from File', function() {
    it('One fully-filled R (relay) entry parses correctly', function() {
      const htE = new HytekEntries(FILEBASE + 'R-Line-Normal.txt');
      const rEntry = htE.relayEntries[0];
      expect(htE.relayEntries).to.have.length(1);
      expect(rEntry.institutionCode).to.deep.equal('TSV');
      expect(rEntry.institutionName).to.equal('Team Silicon Valley');
      expect(rEntry.relayLetter).to.deep.equal('A');
      expect(rEntry.relayGender).to.deep.equal('M');
      expect(rEntry.relayAge).to.deep.equal('');
      expect(rEntry.eventCode).to.deep.equal('4x100');
      expect(rEntry.mark).to.equal('52.39');
      expect(rEntry.measureSys).to.deep.equal('M');
      expect(rEntry.divisionNum).to.deep.equal('1');
      expect(rEntry.runners).to.have.lengthOf(6);
      expect(rEntry.runners[0].firstName).to.equal('Richard');
      expect(rEntry.runners[1].firstName).to.equal('Erlich');
      expect(rEntry.runners[2].firstName).to.equal('Jared');
      expect(rEntry.runners[3].firstName).to.equal('Dinesh');
      expect(rEntry.runners[4].firstName).to.equal('Bertram');
      expect(rEntry.runners[5].firstName).to.equal('Big Head');
      expect(rEntry.runners[0].competitorNum).to.not.exist;
    });

    it('Bad Event R line', function() {
      const htE = new HytekEntries(FILEBASE + 'R-Line-Bad-Event.txt');
      expect(htE).to.exist;
      expect(htE.warnings).to.have.length.above(0);
      expect(htE.athleteRecs).to.have.lengthOf(0);
      expect(htE.indivEntries).to.have.lengthOf(0);
      expect(htE.relayEntries).to.have.lengthOf(0);
    });
  }); // end R-line Tests
});
