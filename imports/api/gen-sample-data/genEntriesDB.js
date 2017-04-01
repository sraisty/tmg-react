/*
*
*
* Make sure to meteor npm install faker
*/
import faker from 'faker';

function generateRoster() {
  if (Meteor.server) {
    const TestDataAthletes = new Mongo.Collection('testAthletes');
    const TestDataEventEntries = new Mongo.Collection('testEventEntries');

    for (let i = 0; i < 100; i++) {
      let lastn = faker.name.lastName();
      let firstn = faker.name.firstName();
      let tfrrs_id = '';
      // Test athletes try to enter between 0 & 5 events
      let athleteNumEvents = Math.round(Math.random() * 5);
      let gender = faker.random.arrayElement(['m', 'f',]);
      let division = '';

      // One out of 7 people don't have middle initials
      let middle = (i % 7 != 0)
        ? faker.random.word().substr(0, 1).toUpperCase()
        : '*';

      tfrrs_id = faker.random.number({min: 100000, max: 999999,})
          + firstn.substring(0, 3).toUpperCase()
          + middle
          + lastn.substring(0, 4).toUpperCase();

      TestDataAthletes.insert({
        tfrrsID: tfrrs_id,
        firstName: firstn,
        lastName: lastn,
        middleName: middle.toUpperCase(),
        gender: gender,
        year: faker.random.arrayElement(['9', '10', '11', '12',]),
        numEvents: athleteNumEvents,
      });

      // let each athlete try to enter between 0 and 5 events
      for (let i = 0; i < faker.random.number.between(0, 5); i++) {
        TestDataEventEntries.insert({
          tfrrsID: tfrrs_id,
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
  console.log(numWomen, 'women and ', numMen, 'men.');
