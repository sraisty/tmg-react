/**
 * Parse an event's time string into a time structure:
 * Acceptable times are hh:mm:ss.tt , mm:ss:tt , m:ss:t, ss.tt, ss.t
 * If time is only accurate to tenths of seconds and not 100ths of seconds, or
 * if the time string has an "h" at the end, then it
 * is hand-timed and not FAT timed, so we explicitly set the hand-timed
 * field in the parsed results. If the inputted time was to the 100ths of
 * seconds and had an "h" (hand-timed) flag, we round it up to the slowest
 * 1/10 of second.
 * @param {string} timeStr
 * @return {object} duration
 * @return {string} duration.origTimeStr
 * @return {string} duration.displayTime
 * @return {number} duration.seconds
 * @return {number} duration.minutes
 * @return {number} duration.hours
 * @return {boolean} duration.handTimed
 */

function parseEventTime(timeStr) {
  const duration = {};
  duration.origTimeStr = timeStr;
  duration.hours = 0;
  duration.minutes = 0;
  duration.handTimed = false;

  // Match HH:MM:SS.XX, H:MM:SS.XX, MM:SS.XX, M:SS.XX , SS:XX, S:XX,
  // HH:MM:SS.X, H:MM:SS.X, MM:SS.X, M:SS.X , SS:X, S:X,
  // Plus all the above combinations with a "h" appended at end.
  // WARNING: should not allow HH:M:S.X, MM:S:XX, HH:M:SS.XX, etc.
  const validTimeRegEx = /^(\d\d?:)?(\d\d?:)?\d\d?\.\d\d?h?$/;

  const isValid = validTimeRegEx.exec(timeStr);
  if (!isValid) {
    return false;
  }

  const secRegEx = /\d\d?\.\d\d?/;
  duration.seconds = secRegEx.exec(timeStr)[0];

  const handTimedRegEx = /\.\dh$/;
  const handTimed = handTimedRegEx.exec(timeStr);
  duration.handTimed = handTimed;

  const minRegEx = /(\d\d?):\d\d\.\d\d?/;
  const minFound = minRegEx.exec(timeStr);
  if (minFound) {
    duration.minutes = minFound[1];
  } else {
    duration.minutes = 0;
  }

  const hoursRegEx = /(\d\d?):\d\d:\d\d\.\d\d?/;
  const hoursFound = hoursRegEx.exec(timeStr);
  if (hoursFound) {
    duration.hours = hoursFound[1];
  } else {
    duration.hours = 0;
  }

  return duration;
}

export default parseEventTime;
