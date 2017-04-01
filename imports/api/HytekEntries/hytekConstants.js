/** ******************************************************************
 * From Hy-Tek Track & Field Meet Manager
 * http://www.hy-tekltd.com/User_Guides_HTML/TFMM6/index.html.
*********************************************************************/
import {ValidIndivEvents, ValidHyTekRelays} from '../../../lib/tfconstants';


export const ValidSchoolYears = ['4', '5', '6', '7', '8', '9', '10', '11', '12',
        'FR', 'SO', 'JR', 'SR'];

export const ValidCountryCodes = ['USA', 'AUS', 'CAN'];

/**
 * THE ORDER OF THIS ARRAY MATTERS
 * The fields on an "I" record mean the following:
 */
export const ILineFields = [
  {key: 'lineType',
    len: 1,
    valid: ['I'],
    allcaps: true},
  {key: 'lastName', len: 20},       // Required.
  {key: 'firstName', len: 20},      // Required.
  {key: 'middleInitial', len: 1},
  {key: 'gender',
    len: 1,
    valid: ['M', 'F'],
    allcaps: true},
  {key: 'dob', len: 10},      // MM/DD/YYYY
  {key: 'institutionCode',    // Required. Use UNA if uknown.
    len: 4,
    allcaps: true},
  {key: 'institutionName', len: 30}, // Required. 'Unattached' if unknown.
  {key: 'age', len: 3},
  {key: 'schoolYear',
    len: 2,
    valid: ValidSchoolYears,
    allcaps: true},
  {key: 'address1', len: 30},
  {key: 'address2', len: 30}, // Aline2 or Province.
  {key: 'city', len: 30},
  {key: 'state',
    len: 3,
    allcaps: true},
  {key: 'postalCode', len: 10},     // Zip
  {key: 'countryCode',
    len: 3,
    valid: ValidCountryCodes,
    allcaps: true},
  {key: 'citizenCountryCode',
    len: 3,
    valid: ValidCountryCodes,
    allcaps: true},
  {key: 'homePhone', len: 20},
  {key: 'officePhone', len: 20},
  {key: 'faxPhone', len: 20},
  {key: 'shirtSize', len: 4},       // S,M,L,XL, etc.
  {key: 'registrationNum', len: 15},
  {key: 'competitorNum', len: 5},
  {key: 'email', len: 30},
  {key: 'disabledClassification', len: 20},
];


export const DLineFields = [
  {key: 'lineType',
    len: 1,
    valid: ['D'],
    allcaps: true},
  {key: 'lastName', len: 20},       // Required.
  {key: 'firstName', len: 20},      // Required.
  {key: 'middleInitial', len: 1},
  {key: 'gender',
    len: 1,
    valid: ['M', 'F'],
    allcaps: true},
  {key: 'dob', len: 10},      // MM/DD/YYYY
  {key: 'institutionCode',    // Required. Use UNA if uknown.
    len: 4,
    allcaps: true},
  {key: 'institutionName', len: 30}, // Required. 'Unattached' if unknown.
  {key: 'age', len: 3},
  {key: 'schoolYear',
    len: 2,
    valid: ValidSchoolYears,
    allcaps: true},
  {key: 'eventCode',
    len: 10,
    valid: ValidIndivEvents,
    allcaps: true},
  // Note on entryMark field.  Can be of several formats:
  // Time: hh:mm:ss.tt (1:23.44.55, 1:19.14, 58.83, 13.4h)
  // Field Metric: 12.33, 1233;
  // Field English: 12-10.25", 12', 121025
  // Combined-event: 3020 (points)
  {key: 'mark', len: 11},
  {key: 'measureSys', // Rrequired if entryMark
    len: 1,
    valid: ['M', 'E']},    // M for Metric, E for English
  {key: 'divisionNum', len: 2},
  {key: 'competitorNum', len: 5},
  {key: 'priorRoundFinishPlace', len: 2},  // if an advancer
  {key: 'declarationStatus',
    len: 1,
    // D = Declared, S = Scratched, A = Alive, blank = Undeclared
    valid: ['D', 'S', 'A', ' '],
    allcaps: true},
  {key: 'entryNote', len: 60},
  {key: 'RESERVEDFUTURE', len: 0},
  {key: 'alternate',
    len: 1,
    valid: ['Y', 'N'],
    allcaps: true},
];

// NOTE 2: For meets that are not division meets and where the entries are
// advancers going to the next higher level meet, the division slot in the
// E record can be used for the place finish in the prior round.
export const ELineFields = [
  {key: 'lineType',
    len: 1,
    valid: ['E'],
    allcaps: true},
  {key: 'lastName', len: 20},       // Required.
  {key: 'firstName', len: 20},      // Required.
  {key: 'middleInitial', len: 1},
  {key: 'gender',
    len: 1,
    valid: ['M', 'F'],
    allcaps: true},
  {key: 'dob', len: 10},      // MM/DD/YYYY
  {key: 'institutionCode',    // Required. Use UNA if uknown.
    len: 4,
    allcaps: true},
  {key: 'institutionName', len: 30}, // Reqd. 'Unattached' if unknown.
  {key: 'age', len: 5},  // can also be CompetitorNum
  {key: 'schoolYear',
    len: 2,
    valid: ValidSchoolYears,
    allcaps: true},
  {key: 'eventCode',
    len: 10,
    valid: ValidIndivEvents,
    allcaps: true},
  // Note on entryMark field.  Can be of several formats:
  // Time: hh:mm:ss.tt (1:23.44.55, 1:19.14, 58.83, 13.4h)
  // Field Metric: 12.33, 1233;
  // Field English: 12-10.25", 12', 121025
  // Combined-event: 3020 (points)
  {key: 'mark', len: 11},
  {key: 'measureSys', // Rrequired if entryMark
    len: 1,
    valid: ['M', 'E'], // M for Metric, E for English
    allcaps: true},
  {key: 'divisionNum', len: 2}, // OR place in prior round
  {key: 'alternate',
    len: 1,
    valid: ['Y'],
    allcaps: true},
];

/**
 * @todo - update if we need to handle "field relays".
 * Do these even really exist?
 */
export const QLineFields = [
  {key: 'lineType',
    len: 1,
    valid: ['Q'],
    allcaps: true},
  {key: 'institutionCode',    // Required. Use UNA if uknown.
    len: 4,
    allcaps: true},
  {key: 'institutionName', len: 30}, // Reqd. 'Unattached' if unknown.
  {key: 'relayLetter', len: 1},
  {key: 'relayGender',
    len: 1,
    valid: ['M', 'F', 'X'],
    allcaps: true},      // X = mixed gender
  {key: 'relayAge', len: 3},
  {key: 'eventCode',
    len: 10,
    valid: ValidHyTekRelays,
    allcaps: true},
  // entryTime format: hh:mm:ss.tt (1:23.44.55, 4:19.14, 58.83, 13.4h)
  {key: 'mark', len: 10},
  {key: 'measureSys', // Rrequired if entryMark
    len: 1,
    valid: ['M', 'E'], // M for Metric, E for English
    allcaps: true},
  {key: 'divisionNum', len: 2},
  {key: 'priorRoundFinishPlace', len: 2},  // if an advancer
  {key: 'declarationStatus',
    len: 1,
    // D = Declared, S = Scratched, A = Alive, blank = Undeclared
    valid: ['D', 'S', 'A', ' '],
    allcaps: true},
  {key: 'entryNote', len: 60},
  {key: 'RESERVEDFUTURE', len: 0},
  {key: 'RESERVEDFUTURE_2', len: 0},
];


export const RLineFields = [
  {key: 'lineType',
    len: 1,
    valid: ['R'],
    allcaps: true},
  {key: 'institutionCode',    // Required. Use UNA if uknown.
    len: 4,
    allcaps: true},
  {key: 'institutionName', len: 30}, // Reqd. 'Unattached' if unknown.
  {key: 'relayLetter', len: 1},
  {key: 'relayGender',
    len: 1,
    valid: ['M', 'F', 'X'],
    allcaps: true},      // X = mixed gender
  {key: 'relayAge', len: 3},
  {key: 'eventCode',
    len: 10,
    valid: ValidHyTekRelays,
    allcaps: true},
  // entryTime format: hh:mm:ss.tt (1:23.44.55, 4:19.14, 58.83, 13.4h)
  {key: 'mark', len: 10},
  {key: 'measureSys',  // Required if entryMark
    len: 1,
    valid: ['M', 'E'],    // M for Metric, E for English
    allcaps: true},
  {key: 'divisionNum', len: 2}, // OR place in prior round
];

/**
 * @todo - R and Q type lines have different treatment of the "age" field.
 * for now, just assume it's actually AGE and not competitor #
 */
export const RelayRunnerFieldDefs = [
  {key: 'lastName', len: 20},       // Required.
  {key: 'firstName', len: 20},      // Required.
  {key: 'middleInitial', len: 1},
  {key: 'gender',
    len: 1,
    valid: ['M', 'F'],
    allcaps: true},
  {key: 'dob', len: 10},      // MM/DD/YYYY
  // this MIGHT also have the comp# in it if an 'R' type record
  // If an 'R' type record, this 'age' line might be len=5
  {key: 'age', len: 3},
  {key: 'schoolYear',
    len: 2,
    valid: ValidSchoolYears,
    allcaps: true},
  {key: 'competitorNum', len: 5},  // This field is not in 'R' type records
];
