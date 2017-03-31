/*
*
*
* Makre sure to meteor npm install faker
*/
import faker from 'faker';


function generateRoster() {
if (Meteor.server) {
    TestDataAthletes = new Mongo.Collection('testAthletes');
    TestDataEventEntries = new Mongo.Collection('testEventEntries');

    for (let i=0; i<100; i++ ) {
      let lastn = faker.name.lastName();
      let firstn = faker.name.firstName();
      let tfrrs_id = '';
      // Test athletes try to enter between 0 & 5 events
      let athleteNumEvents = Math.round(Math.random()*5);
      let gender = faker.random.arrayElement(['m', 'f']);
      let division = '';

      // One out of 7 people don't have middle initials
      let middle = (i % 7 != 0) ?
        faker.random.word().substr(0, 1).toUpperCase():
        '*';

      tfrrs_id = faker.random.number({min: 100000, max: 999999}) +
            firstn.substring(0, 3).toUpperCase() +
            middle + lastn.substring(0, 4).toUpperCase();

      TestDataAthletes.insert( {
        tfrrsID: id,
        firstName: firstn,
        lastName: lastn,
        middleName: middle.toUpperCase(),
        gender: gender,
        year: faker.random.arrayElement(['9', '10', '11', '12']),
        numEvents: athleteNumEvents,
      });

      // let each athlete try to enter between 0 and 5 events
      for (let i=0; i<faker.random.number.between(0, 5); i++) {
        TestDataEventEntries.insert( {
          tfrrsID: id,
          eventCode: faker.random.arrayElement(validEventCodes),
          gender: gender,
          division: division,
          seedMark: '',
        });
      }
    }
  }

  console.log(TestDataAthletes.find().fetch());
  let numWomen = TestDataAthletes.find({gender: 'f'}).count();
  let numMen = TestDataAthletes.find({gender: 'm'}).count();
  console.log( numWomen, 'women and ', numMen, 'men.');

/*
 *
 *   This collection describes the way each event is usually done.
*/
function setupEventDefaults() {
  EventDefaults = new Mongo.Collection('eventDefaults');
  EventDefaults.insert( {
    eventCode: 100,
    eventName: '100 Meters',
    menUSARec: '0:9.69',
    womUSARec: '0:10.49',
    inLanes: true,
  });
  EventDefaults.insert( {
    eventCode: 200,
    eventName: '200 Meters',
    menUSARec: '0:19.32',
    womUSARec: '0:21.34',
    inLanes: true,
  });
  EventDefaults.insert( {
    eventCode: 400,
    eventName: '400 Meters',
    menUSARec: '0:43.18',
    womUSARec: '0:48.70',
    inLanes: true,
  });
  EventDefaults.insert( {
    eventCode: 800,
    eventName: '800 Meters',
    menUSARec: '1:42.60',
    womUSARec: '1:56.40',
    inLanes: 'oneTurnAllies',
  });
  EventDefaults.insert( {
    eventCode: 1600,
    eventName: '1600 Meters',
    menUSARec: '4:00.62',
    womUSARec: '4:41.39',
  });
  EventDefaults.insert( {
    eventCode: 3200,
    eventName: '3200 Meters',
    menUSARec: '8:43.18',
    womUSARec: '9:52.40',
  });
  EventDefaults.insert( {
    eventCode: '110h',
    eventName: '110 Meter High Hurdles',
    menUSARec: '0:12.80',
    womUSARec: '',
    maleOnly: true,
    inLanes: true,
  });
  EventDefaults.insert( {
    eventCode: '100h',
    eventName: '100 Meter High Hurdles',
    menUSARec: '',
    womUSARec: '0:12.20',
    femaleOnly: true,
    inLanes: true,
  });
  EventDefaults.insert( {
    eventCode: '300h',
    eventName: '300 Meter Intermediate Hudles',
    menUSARec: '',
    womUSARec: '',
    inLanes: true,
  });
  EventDefaults.insert( {
    eventCode: '4x100',
    eventName: '4x100 Meter Relay',
    menUSARec: '0:37.38',
    womUSARec: '0:40.82',
    inLanes: true,
  });
  EventDefaults.insert( {
    eventCode: '4x400',
    eventName: '4x400 Meter Relay',
    menUSARec: '2:54:29',
    womUSARec: '3:15.51',
    inLanes: true,
  });
}

function setupSeedMarks() {
  testGenSeedMarks.insert( {
    eventCode: 100,
    testMinHSMale: 11.0,
    testMaxHSMale: 14.5,
    testMinHSFemale: 12.8,
    testMaxHSFemale: 18.4,
  });
  testGenSeedMarks.insert( {
    eventCode: 200,
    testMinHSMale: 22.4,
    testMaxHSMale: 31.9,
    testMinHSFemale: 27.2,
    testMaxHSFemale: 35.7,
  });
  testGenSeedMarks.insert( {
    eventCode: 400,
    testMinHSMale: 54.04,
    testMaxHSMale: 77.2,
    testMinHSFemale: 61.2,
    testMaxHSFemale: 93.8,
  });
  testGenSeedMarks.insert( {
    eventCode: 800,
    testMinHSMale: '2:01.0',
    testMaxHSMale: '3:20.0',
    testMinHSFemale: '2:30.3',
    testMaxHSFemale: '3:29.3',
  });
  testGenSeedMarks.insert( {
    eventCode: 1600,
    testMinHSMale: '4:49.3',
    testMaxHSMale: '6:12.6',
    testMinHSFemale: '5:40.4',
    testMaxHSFemale: '7:20.3',
  });
  testGenSeedMarks.insert( {
    eventCode: 3200,
    testMinHSMale: '11:00.0',
    testMaxHSMale: '14:22.62',
    testMinHSFemale: '11:30.3',
    testMaxHSFemale: '14:56.4',
  });
  testGenSeedMarks.insert( {
    eventCode: '100h',
    testMinHSMale: '',
    testMaxHSMale: '',
    testMinHSFemale: 16.0,
    testMaxHSFemale: 24.2,
  });
  testGenSeedMarks.insert( {
    eventCode: '110h',
    testMinHSMale: '0:15.4',
    testMaxHSMale: '0:22.7',
    testMinHSFemale: '',
    testMaxHSFemale: '',
  });
  testGenSeedMarks.insert( {
    eventCode: '400h',
    testMinHSMale: 62.3,
    testMaxHSMale: 75.2,
    testMinHSFemale: 72.5,
    testMaxHSFemale: 84.8,
  });
}
