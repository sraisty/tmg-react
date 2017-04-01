import * as tf from '../../lib/tfconstants';

/**
* The Entry Class describes the entry that an Athlete
* has in an event within the meet.  If the athlete is
* entered into 4 events, he/she will have 4 seprarate
* entries.
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
    console.log('DEFAULT_DIVISION is ' + tf.DEFAULT_DIVISION);

    // The following fields are not required, so let them remain undefined
    // if necessary.
    this.schoolYear = params.schoolYear;
    this.markSubmitted = params.mark;
    this.measureSys = params.measureSys;
    this.competitorNum = params.competitorNum;

    if (params.markSubmitted & !params.measureSys) {
      throw new Error('Submitted a mark without measureSys ' +
          '(Metric or English)');
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
      if (this.measureSys == 'M') { // Metric
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

  getAthleteInfo() {

  }


} // end class Entry

/**
 * Parse an event's time string into a time structure:
 * Acceptable times are hh:mm:ss.tt , mm:ss:tt , m:ss:t, ss.tt, ss.t
 * If only up to tenths of seconds, then shoudl include an "h" at end to
 * indicate hand-timed
 * @param {string} tStr
 * @return {object} duration
 * @return {string} duration.timeString
 * @return {number} duration.seconds
 * @return {number} duration.minutes
 * @return {number} duration.hours
 * @return {boolean} duration.handTimed
 */
function parseEventTime(tStr) {
  let duration = {};

  const validTimeRegEx = /^(\d\d?:)?(\d\d?:)?\d\d?\.\d\d?h?$/;
  let isValid = validTimeRegEx.exec(tStr);
  if (!isValid) {
    return false;
  }

  const secRegEx = /\d\d?\.\d\d?/;
  duration.seconds = secRegEx.exec(tStr)[0];

  const handTimedRegEx = /\.\dh$/;
  const handTimed = handTimedRegEx.exec(tStr);
  duration.handTimed = (handTimed) ? true : false;

  const minRegEx = /(\d\d?):\d\d\.\d\d?/;
  const minFound = minRegEx.exec(tStr);
  if (minFound) {
    duration.minutes = minFound[1];
  } else {
    duration.minutes = 0;
  }

  const hoursRegEx = /(\d\d?):\d\d:\d\d\.\d\d?/;
  const hoursFound = hoursRegEx.exec(tStr);
  if (hoursFound) {
    duration.hours = hoursFound[1];
  } else {
    duration.hours = 0;
  }

  return duration;
}

function parseImpDist(dStr) {
  let distance = {};

  const validDistanceRegEx = /^(\d\d?\d?)(?:\')?[-\s]?(\d\d?(\.\d\d?)?)?\"?$/;

  const distanceFound = validDistanceRegEx.exec(dStr);
  if (distanceFound) {
    distance.feet = distanceFound[1];
    distance.inches = distanceFound[2];
    return distance;
  }
  return false;
}

function fieldmarkImpToMetric(feet, inches) {
  // These constants are from Bob Spark's tables (former ATFS president) for
  // converting field marks that were measured in imperial to the 1/4 inch into
  // meters. (note: these tables aren't for the reverse conversion)
  // The original tables are here:
  // http://easyweb.easynet.co.uk/~rsparks/convq.htm
  // These tables were reverse-engineered into a formula that uses the below
  // constants, as detailed here:
  // http://trackandfieldnews.com/discussion/archive/index.php/t-131069.html

  // "Having analyzed Spark's tables them I see though that there is a logical
  // math rule:
  // Constants: 1 foot=0.3048m, 1 inch=0.0254m
  // 1)Multiply the exact number of feet and inches with the constants above.
  // 2) If the following numbers after the whole centimeter (Like 32.13625 or
  //    32.13852 is less then 685 then round down. Else round up.
  // So 32.13684 is rounded to 32.13. 32.13685 is rounded to 32.14

  const CONVERT_ITOM_METER_PER_FOOT = parseFloat('0.3048');
  const CONVERT_ITOM_METER_PER_INCH = parseFloat('0.0254');
  const CONVERT_ITOM_ROUNDUP_CUTOFF = parseFloat('0.00685');

  const meters = (parseFloat(feet) * CONVERT_ITOM_METER_PER_FOOT) +
                (parseFloat(inches) * CONVERT_ITOM_METER_PER_INCH);

  // truncate the number at XX.XX (2 decimal places) to get the nearest lower
  // centimeter
  let adjMeters = Math.trunc(meters*100)/100;

  // ... but if the the truncated portion above the
  const fracCentimenters = meters - adjMeters;
  if (fracCentimenters >= CONVERT_ITOM_ROUNDUP_CUTOFF) {
    adjMeters += 0.01;
  }
  // Now, truncate to turn adjMeters into a 2-decimal number (in centimeters)
  adjMeters = Math.trunc(adjMeters*100) / 100;
  return adjMeters.toFixed(2);
}


export {Entry};
export {parseEventTime, parseImpDist, fieldmarkImpToMetric};
