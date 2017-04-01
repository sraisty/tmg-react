/* ****************
 *
 *   All the standard, non-changing data about each type of T&F event.
 * NOTE that this needs to be updated to include Indoor events,
 * Esoteric Outdoor events, Combined Events, and rare Relay events.
 *************/

// NOTE: doesn't work: import {findKey} from 'lodash/findeKy'
import {findKey} from 'lodash';

export const MEETEVENT_CONSTANTS = {
  '100M': {
    eventCode: '100M',
    eventName: '100 Meters',
    inLanes: true,
    usaMale: {best: '0:9.69'},
    usaFemale: {best: '0:10.49'},
    hsMale: {best: 11.0, worst: 14.5},
    hsFemale: {best: 12.8, worst: 18.4},
    AllAthCode: {
      outdoor: {male: 10229630, female: 10229509},
    },
  },
  '200M': {
    eventCode: '200M',
    eventName: '200 Meters',
    inLanes: true,
    usaMale: {best: '0:19.32'},
    usaFemale: {best: '0:21.34'},
    hsMale: {best: 22.4, worst: 31.9},
    hsFemale: {best: 27.2, worst: 35.7},
    AllAthCode: {
      outdoor: {male: 10229605, female: 10229510},
      indoor: {male: 10229552, female: 10229575},
    },
  },
  '400M': {
    eventCode: '400M',
    eventName: '400 Meters',
    inLanes: true,
    usaMale: {best: '0:43.18'},
    usaFemale: {best: '0:48.70'},
    hsMale: {best: 54.04, worst: 77.2},
    hsFemale: {best: 61.2, worst: 120},
    AllAthCode: {
      outdoor: {male: 10229631, female: 10229511},
      indoor: {male: 10229554, female: 10229577},
    },
  },
  '800M': {
    eventCode: '800M',
    eventName: '800 Meters',
    inLanes: 'oneTurnAllies',
    usaMale: {best: '1:42.60'},
    usaFemale: {best: '1:56.40'},
    hsMale: {best: '2:01.0', worst: '3:20.0'},
    hsFemale: {best: '2:30.3', worst: '3:29.3'},
    AllAthCode: {
      outdoor: {male: 10229501, female: 10229512},
      indoor: {male: 10229556, female: 10229579},
    },
  },
  '1600M': {
    eventCode: '1600M',
    eventName: '1600 Meters',
    usaMale: {best: '4:00.62'},
    usaFemale: {best: '4:41.39'},
    hsMale: {best: '4:49.3', worst: '6:12.6'},
    hsFemale: {best: '5:40.4', worst: '7:20.3'},
  },
  '3200M': {
    eventCode: '3200M',
    eventName: '3200 Meters',
    usaMale: {best: '8:43.18'},
    usaFemale: {best: '9:52.40'},
    hsMale: {best: '11:00.0', worst: '14:22.62'},
    hsFemale: {best: '11:30.3', worst: '14:56.4'},
  },
  '100H': {
    eventCode: '100H',
    eventName: '100 Meter High Hurdles',
    inLanes: true,
    hurdles: true,
    femaleOnly: true,
    usaFemale: {best: '0:12.20'},
    hsFemale: {best: 16.0, worst: 24.2},
    AllAthCode: {
      outdoor: {female: 10229522},
    },
  },
  '110H': {
    eventCode: '110H',
    eventName: '110 Meter High Hurdles',
    inLanes: true,
    maleOnly: true,
    usaMale: {best: '0:12.80'},
    hsMale: {best: '0:15.4', worst: '0:22.7'},
    hurdles: true,
    AllAthCode: {
      outdoor: {male: 10229611},
    },
  },
  '300H': {
    eventCode: '300H',
    eventName: '300 Meter Intermediate Hudles',
    inLanes: true,
    hurdles: true,
  },
  '4x100': {
    eventCode: '4x100',
    eventName: '4x100 Meter Relay',
    inLanes: true,
    relay: true,
    usaMale: {best: '0:37.38'},
    usaFemale: {best: '0:40.82'},
    AllAthCode: {
      outdoor: {male: 204593, female: 204594},
    },
  },
  '4x400': {
    eventCode: '4x400',
    eventName: '4x400 Meter Relay',
    inLanes: true,
    relay: true,
    usaMale: {best: '2:54:29'},
    usaFemale: {best: '3:15.51'},
    AllAthCode: {
      outdoor: {male: 204595, female: 204596},
      indoor: {male: 204609, female: 204610},
    },
  },
  LJ: {
    eventCode: 'LJ',
    eventName: 'Long Jump',
    horzJump: true,
    fieldEvent: true,
    AllAthCode: {
      outdoor: {male: 10229617, female: 10229528},
      indoor: {male: 10229568, female: 10229592},
    },
  },
  TJ: {
    eventCode: 'TJ',
    eventName: 'Triple Jump',
    horzJump: true,
    fieldEvent: true,
    AllAthCode: {
      outdoor: {male: 10229618, female: 10229529},
      indoor: {male: 10229569, female: 10229593},
    },
  },
  HJ: {
    eventCode: 'HJ',
    eventName: 'High Jump',
    vertJump: true,
    fieldEvent: true,
    AllAthCode: {
      outdoor: {male: 10229615, female: 10229526},
      indoor: {male: 10229566, female: 10229590},
    },
  },
  PV: {
    eventCode: 'PV',
    eventName: 'Pole Vault',
    vertJump: true,
    fieldEvent: true,
    AllAthCode: {
      outdoor: {male: 10229616, female: 10229527},
      indoor: {male: 10229567, female: 10229591},
    },
  },
  DT: {
    eventCode: 'DT',
    eventName: 'Discus Throw',
    throwEvent: true,
    fieldEvent: true,
    AllAthCode: {
      outdoor: {male: 10229620, female: 10229531},
    },
  },
  JT: {
    eventCode: 'JT',
    eventName: 'Javelin Throw',
    throwEvent: true,
    fieldEvent: true,
    AllAthCode: {
      outdoor: {male: 10229636, female: 10229533},
    },
  },
  SP: {
    eventCode: 'SP',
    eventName: 'Shot Put',
    throwEvent: true,
    fieldEvent: true,
    AllAthCode: {
      outdoor: {male: 10229619, female: 10229530},
      indoor: {male: 10229570, female: 10229594},
    },
  },
  HT: {
    eventCode: 'HT',
    eventName: 'Hammer Throw',
    throwEvent: true,
    fieldEvent: true,
    AllAthCode: {
      outdoor: {male: 10229621, female: 10229532},
    },
  },
};

export const VALID_EVENTS = _.keys(MEETEVENT_CONSTANTS);
console.log(VALID_EVENTS);


export const VALID_FIELD_EVENTS = findKey(MEETEVENT_CONSTANTS, 'fieldEvent');
console.log('validFieldEvents ', VALID_FIELD_EVENTS);

export const VALID_TRACK_EVENTS = findKey(MEETEVENT_CONSTANTS, !'fieldEvent');
console.log('VALID_TRACK_EVENTS: ', VALID_TRACK_EVENTS);

// export const VALID_RELAY_EVENTS = _.findKey(MEETEVENT_CONSTANTS, 'relay');
//
//
// export const VALID_INDIV_EVENTS = _.findKey(MEETEVENT_CONSTANTS, !'relay');
//
// export const VALID_FEMALE_EVENTS = _.findKey(MEETEVENT_CONSTANTS, !'maleOnly');
//
// export const VALID_MALE_EVENTS = _.findKey(MEETEVENT_CONSTANTS, !'femaleOnly');
//
// export const VALID_HORZ_JUMPS = _.findKey(MEETEVENT_CONSTANTS, 'horzJump');
//
// export const VALID_VERT_JUMPS = _.findKey(MEETEVENT_CONSTANTS, 'vertJump');
//
// export const VALID_THROWS = _.findKey(MEETEVENT_CONSTANTS, 'throwEvent');
