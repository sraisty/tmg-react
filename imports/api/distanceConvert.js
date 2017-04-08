// These constants are from Bob Spark's tables (former ATFS president)
// for converting field marks that were measured in imperial to the
// 1/4 inch into meters. (note: these tables aren't for the reverse
// conversion).
//
// The original tables are here:
// http://easyweb.easynet.co.uk/~rsparks/convq.htm These tables were
// reverse-engineered into a formula that uses the below constants, as
// detailed here:
// http://trackandfieldnews.com/discussion/archive/index.php/t-131069.h
// tml
//
// "Having analyzed Spark's tables them I see though that there is
// a logical math rule: Constants: 1 foot=0.3048m, 1 inch=0.0254m
//
// 1) Multiply the exact number of feet and inches with the constants
// above.
// 2) If the following numbers after the whole centimeter (Like
// 32.13625 or 32.13852 is less than 685, then round down. Else
// round up. So 32.13684 is rounded to 32.13. 32.13685 is rounded to
// 32.14

const CONVERT_ITOM_METER_PER_INCH = parseFloat('0.0254');
const CONVERT_ITOM_ROUNDUP_CUTOFF = parseFloat('0.00685');


function fieldMarkImpToMetric(feet, inches) {
  const meters = ((feet * 12) + inches) * CONVERT_ITOM_METER_PER_INCH;

  // truncate the number at XX.XX (2 decimal places) to get the nearest
  // lower centimeter
  let adjMeters = Math.trunc(meters * 100) / 100;

  // ... see if we need to round it up to the larger centimeter
  const fracCentimenters = meters - adjMeters;
  if (fracCentimenters >= CONVERT_ITOM_ROUNDUP_CUTOFF) {
    adjMeters += 0.01;
  }
  return adjMeters;
}


/**
 * Covert meters to the nearest lower 1/4 inch
 * Use the Track & Field standard conversion factors, not the usual Math
 */
function fieldMarkMetricToImp(meters) {
  const inches = meters / CONVERT_ITOM_METER_PER_INCH;
  const fractionalInch = inches - Math.floor(inches);
  const quarterInches = Math.floor(fractionalInch * 4);
  const adjInches = inches + (quarterInches * 0.25);

  return adjInches;
}


/**
 * Takes a variety of strings that represent a distance in imperial
 * (feet & inches) and translates them into feet and inches.
 */
function parseImpDist(distStr) {
  const distance = {};

  const validDistanceRegEx = /^(\d\d?\d?)(?:')?[-\s]?(\d\d?(\.\d\d?)?)?"?$/;

  const distanceFound = validDistanceRegEx.exec(distStr);
  if (distanceFound) {
    distance.feet = parseFloat(distanceFound[1]);
    distance.inches = parseFloat(distanceFound[2]);
    return distance;
  }
  return false;
}


function convertFieldMarkToNumber(measureSys, markSubmitted) {
  const mark = {};
  if (measureSys === 'M') { // Metric
    // Metric marks for field events look like: 12.33 (XX.XX or XXX.XX
    // format) Metric field marks are always calc'd to centimeters, which
    // are hundreths of a meter.  (Exception: Javelin might be above 100m
    // Note USATF and NCAA requires metric. High School allows Imperial.
    mark.meters = Math.trunc(markSubmitted * 100) / 100;
    mark.inches = fieldMarkMetricToImp(mark.meters);
  } else {
    // Imperial, with precision up to 0.25 inch Need to parse following
    // formats:  12-10.25", 12',  121025, XX'XX.XX", 7'2", 7' 2"
    const distance = parseImpDist(markSubmitted);
    if (!distance) {
      return false;
    }
    mark.inches = (distance.feet * 12) + distance.inches;
    mark.meters = fieldMarkImpToMetric(mark.inches);
  }
  return mark;
}


export { convertFieldMarkToNumber, fieldMarkMetricToImp,
  fieldMarkImpToMetric, parseImpDist };
