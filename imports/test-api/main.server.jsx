/**
 *
 *Serverside only
 **/
import {Meteor} from 'meteor/meteor';
import Meet from '../api/Meet';
import HytekEntries from '../api/HytekEntries/HytekEntries';
import Athlete from '../api/Athlete';
import Entry from '../api/Entry';

const TESTFILEBASE = './test-data/';


Meteor.startup(() => {
  // tests.allTestsNewAthlete();
  // tests.testAddToMyArray();
  const meetInfo = promptNewMeetInfo();
  const myMeet = new Meet(meetInfo);

  const htFilename = promptHtFilename();
  try {
    importHytekEntries(myMeet, htFilename);
  } catch(e) {
    console.log(`ERROR: HyTek Import Error ' ${e.message}`);
  }

  myMeet.summarize();
});

/**
 * @param {object} myMeet
 * @param {string} filename
 */
function importHytekEntries(myMeet, filename) {
  let htE;

  try {
    htE = new HytekEntries(filename);
  } catch (e) {
    console.log('FILE ERROR OPENING HYTEK ENTRY FILE ', e.message);
  }

  let athleteInfo;
  console.log('PRINTING htE: ', htE);
  for (athleteInfo of htE.athleteRecs) {
    const athlete = new Athlete(athleteInfo);
    try {
      myMeet.addAthleteToMeet(athlete);
    } catch(e) {
      console.log('ERROR adding athlete to Meet: ', e.message);
    }
  }

  let indivEntryInfo;
  for (indivEntryInfo of htE.indivEntries) {
    const entry = new Entry(indivEntryInfo);
    try {
      // TODO make sure this athlete is already added to meet
      myMeet.addEntryToMeet(entry);
    } catch(e) {
      console.log(`ERROR adding individual entry to Meet: ${e.message}`);
    }
  }

  let relayEntryInfo;
  for (relayEntryInfo of htE.relayEntries) {
    const entry = new Entry(relayEntryInfo);
    try {
      myMeet.addEntryToMeet(entry);
    } catch(e) {
      console.log('ERROR adding relay entry to Meet: ', e.message);
    }
  }
} // end importHytekEntries

/**
 * @return {string} filename
 */
function promptHtFilename() {
  // TODO - This is a STUB for now
  // return TESTFILEBASE + 'HtMeetEntries.txt';
  return(`${TESTFILEBASE} R-Line-Normal.txt`);
}

/**
 * @return {object} - info about the current meet. STUB.
 */
function promptNewMeetInfo() {
  // TODO - this is just a stub for now.
  return {
    meetName: 'Sue & Jamey\'s Wicked Awesome Invitational',
    startDate: '02/01/2017',
    venueName: 'Los Gatos High School',
    city: 'Los Gatos',
  };
}
