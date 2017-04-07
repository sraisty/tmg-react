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
  let adjMeters = Math.trunc(meters * 100) / 100;

  // ... but if the the truncated portion above the
  const fracCentimenters = meters - adjMeters;
  if (fracCentimenters >= CONVERT_ITOM_ROUNDUP_CUTOFF) {
    adjMeters += 0.01;
  }
  // Now, truncate to turn adjMeters into a 2-decimal number (in centimeters)
  adjMeters = Math.trunc(adjMeters * 100) / 100;
  return adjMeters.toFixed(2);
}

/**
 * Takes a variety of strings that represent a distance in imperial
 * (feet & inches) and translates them into feet and inches.
 *
 */
function parseImpDist(distStr) {
  const distance = {};

  const validDistanceRegEx = /^(\d\d?\d?)(?:')?[-\s]?(\d\d?(\.\d\d?)?)?"?$/;

  const distanceFound = validDistanceRegEx.exec(distStr);
  if (distanceFound) {
    distance.feet = distanceFound[1];
    distance.inches = distanceFound[2];
    return distance;
  }
  return false;
}

export {parseImpDist, fieldmarkImpToMetric};
