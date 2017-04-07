import * as tf from '../../lib/tfconstants';
import {parseImpDist, fieldmarkImpToMetric} from './parseConvertDistances';
import {parseEventTime} from './parseConvertTimes';

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
      this.eventCode = params.eventCode;
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

    // The following fields are not required, so let them remain undefined
    // if necessary.
    this.schoolYear = params.schoolYear;
    this.markSubmitted = params.mark;
    this.measureSys = params.measureSys;
    this.competitorNum = params.competitorNum;

    if (params.markSubmitted && !params.measureSys) {
      throw new Error('Submitted a mark without measureSys (Metric or Imperial)');
    }

    this.markSeconds = undefined;
    this.markInches = undefined;
    this.markMeters = undefined;
    this.measureUnit = 'seconds';
    if (this.markSubmitted) {
      this.convertMarkToNumber();
    }
  }

  convertMarkToNumber() {
    if (this.fieldEvent()) {
      if (this.measureSys === 'M') { // Metric
        // Metric field marks are always calc'd to centimeters, which
        // are hundreths of a meter, so make sure it's in proper XX.XX
        // format. (Exception: Javelin might be above 100m (that's a
        // world record), so allow XXX.XX
        // Note USATF and NCAA requires metric. High School allows Imperial.
        // metric marks for field events look like:
        // 12.33
        this.markMeters = this.markSubmitted;
      } else {    // Imperial
        // measure system is Imperial.  Need to parse following formats:
        //  12-10.25", 12', 121025, XX'XX.XX". the precision could be up
        // to 0.25 inch
        const distance = parseImpDist(this.markSubmitted);
        if (!distance) {
          return false;
        }
        this.markInches = parseFloat(distance.feet * 12) +
                          parseFloat(distance.inches);
        this.measureUnit = 'inches';
        this.markMeters = fieldmarkImpToMetric(distance.feet, distance.inches);
      }
    } else if (this.trackEvent()) {
      // Marks are times that look like hh:mm:ss.tt
      // Examples: 1:23:44.55, 1:19.14, 58.83, 13.4h
      // the "h" above stands for hand-timed
      const duration = parseEventTime(this.markSubmitted);
      if (!duration) {
        return false;
      }
      // CONVERT INTO SECONDS
      this.markSeconds = parseFloat(duration.hours * 3600) +
                         parseFloat(duration.minutes * 60) +
                         parseFloat(duration.seconds);
      this.measureUnit = 'seconds';
      if (duration.handTimed) {
        // TODO: find out if I need to add a 0.24 second correction factor?
        // this.markSeconds += 0.24
      }
      return true;
    } else {
      // could be a combined event or just a non-typical track event
      // could be cross country or road races....
    }
    return false;
  }

  // /**
  //  * @return {boolean} - returns true if this.eventCode corresponds
  //  * to a Combined Event, such as the decathlon or pentathlon
  //  */
  // combinedEvent() {
  //
  // }


  /**
   * @return {boolen} - returns true if this Entry's event is a Field Event
   * such as the shot put or high jump.
   */
  fieldEvent() {
    return tf.VALID_FIELD_EVENTS.includes(this.eventCode);
  }

  /**
   * @return {boolen} - returns true if this Entry's event is a Track Event
   * such as the 100, 1500, 10000, or 4x100.
   */
  trackEvent() {
    return tf.VALID_TRACK_EVENTS.includes(this.eventCode);
  }

  /**
   * @return {boolen} - returns true if this Entry's event is a Relay
   * Track Event such as the Distance Medley or  4x100.
   */
  relayEvent() {


  }

  /**
   * @return {boolen} - returns true if the Mark submitted for this entry's
   * event is within a plausible range for the age/gender
   * I.E. no world records, events that take minutes don't have times in
   * hours. Distances are not in inches instead of meters, etc.
   */
  markSanityCheck() {

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

  } // end Entry.isSame()

  updateSubmittedMark(updatedInfo) {

  }


} // end class Entry

export default Entry;
