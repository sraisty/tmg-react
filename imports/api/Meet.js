/**  Class to represent the Track & Field Meet */

// import {Athlete} from './Athlete.js';

import * as tf from '../../lib/tfconstants';

/**
 * @class Meet
 */
class Meet {
  /**
   * Constructor of Meet object.
   * @param {oject} params - all parameters are in an object literal
   * @param {number} [params.meetID] - Optional. We'll return one if it's not
   * provided.
   * @param {string} params.meetName
   * @param {Date} params.startDate - first day of the Meet
   * @param {Date} [params.endDate] - Optional. last day of the Meet. If not
   * provided, assume it's a one day meet and value is same as startDate
   * @param {String} params.venueName - the name of the facility
   * @param {String} params.city - city where the meet is taking place
   * @param {String} [params.state] - Optional. state where the meet is taking
   * place
   * @param {String} [params.country] - Optional. country where the meet is
   * taking place. Defaults to 'USA' if not provided
   * @param {String} [params.seasonType] - 'Outdoor' or 'Indoor' are only valid
   * values. 'Outdoor' is the default if not provided.
   * @param {meetType} [params.meetType] - 'HS', 'NCAA', 'USATF Youth', etc.
   * 'HS' is default
   */
  constructor(params) {
    // The mandatory meet properties.
    if (params.meetID) {
      this.meetID = params.meetID;
    } else {
      /**
       * @todo - return A new, UNIQUE meetID
       */
    }
    this.meetName = params.meetName;
    this.startDate = params.startDate;
    this.venueName = params.venueName;
    this.city = params.city;

    // if end date is not provided, assume it is a one-day meet
    this.endDate = params.endDate || this.startDate;

    // State is optional
    if (params.state) {
      this.state = params.state;
    }

    // If country is not provided, assume it's the USA
    this.country = params.country || tf.DEFAULT_COUNTRY;

    // If season is not provided, assume outdoor track
    this.seasonType = params.seasonType || tf.DEFAULT_SEASON;

    // If meet type is not provided, assume it's High School
    this.meetType = params.meetType || tf.DEFAULT_MEET_TYPE;

    this.institutions = [];
    this.genders = [];
    this.athletes = [];
    this.divisions = [];
    this.meetEvents = [];
    // Competition Groups are a combination of gender and division. Within a
    // competition group, we award places/points for each event.
    this.competitionGroups = [];
    this.meetStatus = 'draft';
  }

  /**
   *
   */
  summarize() {
    console.log(`MEET SUMMARY:  ${this.meetName}`);
    console.log(`Divisions: ${JSON.stringify(this.divisions)}`);
    console.log(`Genders: ${JSON.stringify(this.genders)}`);
    console.log(`Institutions: ${JSON.stringify(this.institutions)}`);

    console.log(this.athletes.length, 'Athletes Entered: ',
      JSON.stringify(this.athletes, null, 4));

    console.log(this.meetEvents.length, 'Events: ',
      JSON.stringify(this.meetEvents, null, 4));
    console.log('Meet Status: ', this.meetStatus);
  }


  /**
   * @param {object} athlete
   */
  addAthleteToMeet(athlete) {
    let alreadyEnteredAthlete;

    for (alreadyEnteredAthlete of this.athletes) {
      if (!alreadyEnteredAthlete.isSame(athlete)) {
        console.log('***ADDING NEW ATHLETE TO MEET: ', JSON.stringify(athlete));
        this.athletes.push(athlete);
        helperAddToMyArray(athlete.divisionName, this.divisions);
        helperAddToMyArray(athlete.gender, this.genders);
        helperAddToMyArray(athlete.institutionName, this.institutions);
      }
    }
  }

} // end Meet class

/**
 * looks to see if "item" is already present in "myarray".  If it isn't
 * already, then it adds item to the end of myarray.
 * @param {string} item
 * @param {string} myarray
 */
function helperAddToMyArray(item, myarray) {
  let found = false;
  for (let i = 0, max = myarray.length; i < max; i++) {
    if (myarray[i] === item) {
      found = true;
    }
  }
  if (found !== true) {
    myarray.push(item);
  }
}

export default Meet;
