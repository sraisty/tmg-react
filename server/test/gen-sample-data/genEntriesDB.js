/*
*
* Generate fake meet, athlete, and entry data for testing purposes.
*/

import faker from 'faker';
import { log } from 'meteor/practicalmeteor:loglevel';

const TestDataAthletes = new Mongo.Collection('testAthletes');
const TestDataEventEntries = new Mongo.Collection('testEventEntries');

function generateRoster() {
  if (Meteor.server) {
    let newAthlete;

    for (let i = 0; i < 100; i++) {
      newAthlete = {
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        gender: faker.random.arrayElement(['m', 'f']),
        schoolYear: faker.random.arrayElement(['9', '10', '11', '12']),
        division: '',
        numEvents: faker.random.number.between(0, 5),
      };

      // One out of 7 people don't have middle initials
      newAthlete.middle = (i % 7 !== 0)
        ? faker.random.word().substr(0, 1).toUpperCase()
        : '*'; // TFRRS uses * char if the athlete does't have a middle name

      newAthlete.tfrrsId =
        faker.random.number({ min: 100000, max: 999999 })
        + newAthlete.firstn.substring(0, 3).toUpperCase()
        + newAthlete.middle + newAthlete.lastn.substring(0, 4).toUpperCase();

      TestDataAthletes.insert(newAthlete);
    }

    for (let j = 0; j < faker.random.number.between(0, 5); j++) {
      // let each athlete try to enter between 0 and 5 events
      const newEventEntry = {
        tfrrsId: newAthlete.tfrrsId,
        eventCode: faker.random.arrayElement(validEventCodes),
        gender: newAthlete.gender,
        division: newAthlete.division,
        seedMark: '',
      };

      TestDataEventEntries.insert(newEventEntry);
    }
  }

  console.log(TestDataAthletes.find().fetch());
  const numWomen = TestDataAthletes.find({ gender: 'f' }).count();
  const numMen = TestDataAthletes.find({ gender: 'm' }).count();
  console.log(numWomen, 'women and ', numMen, 'men.');
}

export default generateRoster;
