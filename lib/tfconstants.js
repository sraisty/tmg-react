// FIXME: All these variables are Globals.  Use "Global Abatement" to hold all
// assets of this app:
// export MYAPP = {};
// MYAPP.DEFAULTDIVISION = 'Varsity';
// etc


/**
 * Supported genders
 * @enum {string}
 */
export const Gender = {
  MALE: 'M',
  FEMALE: 'F',
  MIXED: 'X',   // only for relays or team events
};

/**
 * Supported gender descriptions
 * @enum {string}
 */
export const GenderDescription = {
  MEN: 'Men',
  BOYS: 'Boys',
  WOMEN: 'Women',
  GIRLS: 'Girls',
};

/**
 * Supported season types for Track & Field
 * @enum {string}
 */
export const SeasonType = {
  OUTDOOR: 'Outdoor',
  INDOOR: 'Indoor',
};

export const DEFAULT_DIVISION = 'Varsity';

export const DEFAULT_MEET_TYPE = 'HS';

export const DEFAULT_SEASON = 'Outdoors';

export const DEFAULT_COUNTRY = 'USA';

/**
 * Supported season types for current state of the Track and Field meet
 * we are working on
 * @enum {string}
 */
export const MeetStatus = {
  DRAFT: 'draft',
  PLANNING: 'planning',
  UNDERWAY: 'underway',
  FINISHED: 'finished',
  RESULTS_SUBMITTED: 'results submitted',
};

/**
 * @enum {string}
 *
 */
export const MeasurementSystem = {
  METRIC: 'Metric',
  IMPERIAL: 'Imperial',
};

/**
 * @enum {string}
 *
 */
export const AthleteDeclStatusForEvent = {
  UNDECLARED: 'undeclared',
  DECLARED: 'declared',
  SCRATCHED: 'scratched',
  ALIVE: 'alive',
  DISQUALIFIED: 'disqualified',
};

/** ***********************************************************
 *
 */
// export const VALID_VERT_JUMPS;
// export const VALID_HORZ_JUMPS;
// export const VALID_THROWS;
//
// export const VALID_FIELD_EVENTS ;
//
// export const VALID_INDIV_TRACK_EVENTS;
//
// export const VALID_INDIV_EVENTS;


/** Hy-TEK Event Codes for Relays:
 *  Regular Relays: The total distance without commas, such as 400 for 4x100,
 *     1600 for 4x400.
 * Spring Medley Relay: Total distance plus S, such as 1600S
 * Distance Medley Relay: Total distance plus D, such as 3200D
 * Shuttle Hurdle Relay: Total distance plus H, such as 240H (4x60h shuttle)
 **/
// export const VALID_RELAYS;
// export const ValidHyTekRelays;
//
// export const VALID_TRACK_EVENTS =
//     VALID_INDIV_TRACK_EVENTS.concat(VALID_RELAYS);
//
//
// export const VALID_EVENTS =
//     VALID_INDIV_EVENTS.concat(VALID_RELAYS);
