/**
 * This file contains utility functions to help us quickly filter
 * the list of events in the meet to just those that meet our
 * request, and then get an array with the eventCodes and an array of the
 * long-form event Names.
 *
*/

import { pickBy, map } from 'lodash';

import MEETEVENT_CONSTANTS from '../../lib/meetEventConstants';

function filterMeetEvents(selectFunc, oldEv = MEETEVENT_CONSTANTS) {
  return pickBy(oldEv, selectFunc);
}

function field(evObj) {
  return filterMeetEvents(e => e.fieldEvent, evObj);
}

function track(evObj) {
  return filterMeetEvents(e => !(e.fieldEvent), evObj);
}

function hurdles(evObj) {
  return filterMeetEvents(e => (e.hurdles), evObj);
}

function relays(evObj) {
  return filterMeetEvents(e => e.relay, evObj);
}

function indivs(evObj) {
  return filterMeetEvents(e => !(e.relay), evObj);
}

function outdoor(evObj) {
  return filterMeetEvents(e => e.outdoor, evObj);
}

function indoor(evObj) {
  return filterMeetEvents(e => e.indoor, evObj);
}

function throws(evObj) {
  return filterMeetEvents(e => e.throwEvent, evObj);
}

function vertJumps(evObj) {
  return filterMeetEvents(e => e.vertJump, evObj);
}

function horzJumps(evObj) {
  return filterMeetEvents(e => e.horzJump, evObj);
}

function female(evObj) {
  return filterMeetEvents(e => !(e.maleOnly), evObj);
}

function male(evObj) {
  return filterMeetEvents(e => !(e.femaleOnly), evObj);
}

function noFemales(evObj) {
  return filterMeetEvents(e => e.maleOnly, evObj);
}

function noMales(evObj) {
  return filterMeetEvents(e => e.femaleOnly, evObj);
}

/** ******* COMPOSITE ***************/
function indoorTrack(evObj) {
  return indoor(track(evObj));
}

function outdoorTrack(evObj) {
  return outdoor(track(evObj));
}

function indoorField(evObj) {
  return indoor(field(evObj));
}

function outdoorField(evObj) {
  return outdoor(field(evObj));
}

/**
 * @return {boolen} - returns true if this Entry's event is a Field Event
 * such as the shot put or high jump.
 */
function isFieldEvent(eventCode) {
  // return tf.VALID_FIELD_EVENTS.includes(eventCode);
  // TODO
}

/**
 * @return {boolen} - returns true if this Entry's event is a Track Event
 * such as the 100, 1500, 10000, or 4x100.
 */
function isTrackEvent(eventCode) {
  // return tf.VALID_TRACK_EVENTS.includes(eventCode);
  // TODO
}

/**
 * @return {boolen} - returns true if this Entry's event is a Relay
 * Track Event such as the Distance Medley or  4x100.
 */
function isRelayEvent(eventCode) {
  // TODO
}


/** *** UTILITIES ******/

function evCodes(evObj) {
  return Object.keys(evObj);
}

function evNames(evObj) {
  return map(evObj, e => e.eventName);
}


export { field, track, hurdles, relays, indivs, outdoor, indoor, throws,
  vertJumps, horzJumps, female, male, noFemales, noMales,
  indoorTrack, outdoorTrack, indoorField, outdoorField,
  isTrackEvent, isFieldEvent, isRelayEvent, evCodes, evNames };
