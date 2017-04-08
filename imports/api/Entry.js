import * as tf from '../../lib/tfconstants';
import { convertFieldMarkToDist } from './parseConvertDistances';
import { convertTimeMarkToSeconds } from './parseConvertTimes';
import { convertHyTekCodes } from './HytekEntries/HytekEntries';
import { isFieldEvent, isTrackEvent, isRelayEvent } from './meetEventUtils';
/**
* The Entry Class describes the entry that an Athlete
* has in a particular event within the meet.  If the athlete is
* entered into 4 events, he/she will have 4 separarate
* entries.
* Note that for "combined events" (pentathlon, decathlon, etc.) that there is
* ONE entry, even though there are multiple "sub-events"
*/
class Entry {
/**
 * Constructor of Entry object.
 * @param {object} params - Pass in a struct-style object literal.
 * @param {string} params.firstName of the Athlete. REQUIRED.
 * @param {string} [params.middleInitial] of the Athlete. One character, and
 * optional since some people don't have middle names.
 * @param {string} params.lastName of the Athlete. REQUIRED.
 * @param {string} [params.institutionName] - school or Club name of
 * Athlete team
 * @param {string} params.gender - Athlete's gender. either 'M' for male
 * or 'F' for female. REQUIRED.
 * @param {string} [params.divisionName = DEFAULT_DIVISION] - Ex: : 'Varsity',
 * 'Junior Varsity', 'Frosh/Soph', '8 & Under', '40-44'. If not provided,
 * default is set to the constant 'DEFAULT_DIVISION'
 * @param {string} [params.schoolYear] - Optional for open/masters/youth.
 * Used for Middle/HS/College. valid: 6, 7, 8, 9, 10, 11, 12, FR, SO, JR, SR
 * @param {string} [params.competitorNum] - athlete id #, just for this
 * meet, that is unique within the athlete's gender-division combo
 * @param {string} param.eventCode -
 * @param {mark} param.mark
 * @param {measureSys} param.measureSys - 'M' for metric, E for English
 * @param {{}}
 */

  constructor(params) {
    if (params.firstName) {
      this.firstName = params.firstName;
    } else {
      throw new Error('ERROR new Entry(): missing firstName.');
    }

    if (params.lastName) {
      this.lastName = params.lastName;
    } else {
      // throw new Error('ERROR new Athlete(): missing lastName.');
      throw new Error('ERROR new Entry(): missing lastName');
    }

    if (params.gender) {
      this.gender = params.gender.toUpperCase();
    } else {
      throw new Error('ERROR new Entry(): missing gender');
    }

    if (params.eventCode) {
      this.eventCode = convertHyTekCodes(params.eventCode);
    } else {
      throw new Error('ERROR new Entry(): missing eventCode');
    }

    // Not everyone has a middle initial, so if undefined set it to ''
    this.middleInitial = params.middleInitial || '';

    // If the athlete is not on a team, use "unattached"
    this.institutionName = params.institutionName || 'UNATTACHED';

    // If no division is supplied, default to the Varsity Division
    this.divisionName = params.divisionName || tf.DEFAULT_DIVISION;
    console.log(`DEFAULT_DIVISION is ${tf.DEFAULT_DIVISION}`);

    // The following fields are not required,
    // so let them remain undefined if necessary.
    this.schoolYear = params.schoolYear;
    this.markSubmitted = params.mark;
    this.measureSys = params.measureSys;
    this.competitorNum = params.competitorNum;

    this.markSeconds = undefined;
    this.Dist = undefined;
    if (this.markSubmitted) {
      this.convertMarkToNumber();
    }
  }


  convertMarkToNumber() {
    if (isFieldEvent(this.eventCode)) {
      const { meters, inches } = convertFieldMarkToDist(this.measureSys, this.markSubmitted);
      this.dist.meters = meters;
      this.dist.inches = inches;
    } else {
      this.markSeconds = convertTimeMarkToSeconds(this.markSubmitted);
    }
  }


  /**
     * @return {boolen} - returns true if the Mark submitted for this entry's
     * event is within a plausible range for the age/gender
     * I.E. no world records, events that take minutes don't have times in
     * hours. Distances are not in inches instead of meters, etc.
     */
  markSanityCheck() {
    // TODO
  }

  /**
     * @param {object} p - the parameters, wrapped up in an object
     * @return {boolean}
     * Tests if the entry described by the params is the same as this Entry
     * by comparing firstName, lastName, middleInitial, Gender,
     * InstitutionName, Event, and MeasureSys
     *  @todo TODO Should we also compare competitorNum?
     */
  isSame(entryInfo) {
    // TODO
  } // end Entry.isSame()

  updateSubmittedMark(updatedInfo) {
    // TODO
  }

} // end class Entry

export default Entry;
