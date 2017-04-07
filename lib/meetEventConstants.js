/* ****************
 *
 *   All the standard, non-changing data about each type of T&F event.
 * NOTE that this needs to be updated to include Indoor events,
 * Esoteric Outdoor events, Combined Events, and rare Relay events.
 *************/


const MEETEVENT_CONSTANTS = {
  '55M': {
    eventCode: '55M',
    eventName: '55 Meters',
    inLanes: true,
    outdoor: false,
    indoor: true,
    AllAthCode: {
      indoor: {male: 10229550, female: 10229573},
    },
  },
  '100M': {
    eventCode: '100M',
    eventName: '100 Meters',
    inLanes: true,
    outdoor: true,
    indoor: false,
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
    outdoor: true,
    indoor: true,
    usaMale: {best: '0:19.32'},
    usaFemale: {best: '0:21.34'},
    hsMale: {best: 22.4, worst: 31.9},
    hsFemale: {best: 27.2, worst: 35.7},
    AllAthCode: {
      outdoor: {male: 10229605, female: 10229510},
      indoor: {male: 10229552, female: 10229575},
    },
  },
  '300M': {
    eventCode: '300M',
    eventName: '300 Meters',
    inLanes: true,
    outdoor: false,
    indoor: true,
    AllAthCode: {
      indoor: {male: 10229553, female: 10229576},
    },
  },
  '400M': {
    eventCode: '400M',
    eventName: '400 Meters',
    inLanes: true,
    outdoor: true,
    indoor: true,
    usaMale: {best: '0:43.18'},
    usaFemale: {best: '0:48.70'},
    hsMale: {best: 54.04, worst: 77.2},
    hsFemale: {best: 61.2, worst: 120},
    AllAthCode: {
      outdoor: {male: 10229631, female: 10229511},
      indoor: {male: 10229554, female: 10229577},
    },
  },
  '600M': {
    eventCode: '600M',
    eventName: '600 Meters',
    inLanes: 'oneTurnAllies',
    outdoor: false,
    indoor: true,
    AllAthCode: {
      indoor: {male: 10229600, female: 10229601},
    },
  },
  '800M': {
    eventCode: '800M',
    eventName: '800 Meters',
    inLanes: 'oneTurnAllies',  // or oneTurnStagger
    outdoor: true,
    indoor: true,
    usaMale: {best: '1:42.60'},
    usaFemale: {best: '1:56.40'},
    hsMale: {best: '2:01.0', worst: '3:20.0'},
    hsFemale: {best: '2:30.3', worst: '3:29.3'},
    AllAthCode: {
      outdoor: {male: 10229501, female: 10229512},
      indoor: {male: 10229556, female: 10229579},
    },
  },
  '1000M': {
    eventCode: '1000M',
    eventName: '1000 Meters',
    inLanes: 'oneTurnAllies',  // or oneTurnStagger
    outdoor: false,
    indoor: true,
    AllAthCode: {
      indoor: {male: 10229557, female: 10229580},
    },
  },
  '1600M': {
    eventCode: '1600M',
    eventName: '1600 Meters',
    outdoor: true,
    indoor: true,
    usaMale: {best: '4:00.62'},
    usaFemale: {best: '4:41.39'},
    hsMale: {best: '4:49.3', worst: '6:12.6'},
    hsFemale: {best: '5:40.4', worst: '7:20.3'},
  },
  '3200M': {
    eventCode: '3200M',
    eventName: '3200 Meters',
    outdoor: true,
    indoor: true,
    usaMale: {best: '8:43.18'},
    usaFemale: {best: '9:52.40'},
    hsMale: {best: '11:00.0', worst: '14:22.62'},
    hsFemale: {best: '11:30.3', worst: '14:56.4'},
  },
  '55H': {
    eventCode: '55H',
    eventName: '55 Meter Hurdles',
    inLanes: true,
    hurdles: true,
    outdoor: false,
    indoor: true,
    AllAthCode: {
      indoor: {male: 10229564, female: 10229588},
    },
  },
  '100H': {
    eventCode: '100H',
    eventName: '100 Meter High Hurdles',
    inLanes: true,
    hurdles: true,
    femaleOnly: true,
    outdoor: true,
    indoor: false,
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
    hurdles: true,
    indoor: false,
    outdoor: true,
    usaMale: {best: '0:12.80'},
    hsMale: {best: '0:15.4', worst: '0:22.7'},
    AllAthCode: {
      outdoor: {male: 10229611},
    },
  },
  '300H': {
    eventCode: '300H',
    eventName: '300 Meter Intermediate Hudles',
    inLanes: true,
    hurdles: true,
    outdoor: true,
  },
  '4x100': {
    eventCode: '4x100',
    eventName: '4x100 Meter Relay',
    inLanes: true,
    relay: true,
    outdoor: true,
    indoor: false,
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
    outdoor: true,
    indoor: true,
    usaMale: {best: '2:54:29'},
    usaFemale: {best: '3:15.51'},
    AllAthCode: {
      outdoor: {male: 204595, female: 204596},
      indoor: {male: 204609, female: 204610},
    },
  },
  '4x200': {
    eventCode: '4x200',
    eventName: '4x200 Meter Relay',
    relay: true,
    outdoor: true,
    indoor: true,
  },
  '4x800': {
    eventCode: '4x800',
    eventName: '4x800 Meter Relay',
    relay: true,
    outdoor: true,
    indoor: true,
  },
  LJ: {
    eventCode: 'LJ',
    eventName: 'Long Jump',
    horzJump: true,
    fieldEvent: true,
    outdoor: true,
    indoor: true,
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
    outdoor: true,
    indoor: true,
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
    outdoor: true,
    indoor: true,
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
    outdoor: true,
    indoor: true,
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
    outdoor: true,
    indoor: false,
    AllAthCode: {
      outdoor: {male: 10229620, female: 10229531},
    },
  },
  JT: {
    eventCode: 'JT',
    eventName: 'Javelin Throw',
    throwEvent: true,
    fieldEvent: true,
    outdoor: true,
    indoor: false,
    AllAthCode: {
      outdoor: {male: 10229636, female: 10229533},
    },
  },
  SP: {
    eventCode: 'SP',
    eventName: 'Shot Put',
    throwEvent: true,
    fieldEvent: true,
    outdoor: true,
    indoor: true,
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
    outdoor: true,
    indoor: false,
    AllAthCode: {
      outdoor: {male: 10229621, female: 10229532},
    },
  },
};

export default MEETEVENT_CONSTANTS;


/** ************
 * NOTE: These are All-Athletics' event codes for the more esoteric events.
 * The main All-Athleteics event codes were merged into the entries within
 * MEETEVENT_CONSTANTS.
*************
const UNUSED_FOR_NOW_PUT_IN_MEETEVENT_CONSTANTS_FILE = [
  {
    label: 'Men\'s 300m',
    select: 10229500,
  }, {
    label: 'Men\'s 600m',
    select: 10229604,
  }, {
    label: 'Men\'s 1000m',
    select: 10229606,
  }, {
    label: 'Men\'s 1500m',
    select: 10229502,
  }, {
    label: 'Men\'s Mile',
    select: 10229503,
  }, {
    label: 'Men\'s 2000m',
    select: 10229632,
  }, {
    label: 'Men\'s 3000m',
    select: 10229607,
  }, {
    label: 'Men\'s 2 Miles',
    select: 10229608,
  }, {
    label: 'Men\'s 5000m',
    select: 10229609,
  }, {
    label: 'Men\'s 10,000m',
    select: 10229610,
  }, {
    label: 'Men\'s 400mH',
    select: 10229612,
  }, {
    label: 'Men\'s 2000mSC',
    select: 10229613,
  }, {
    label: 'Men\'s 3000mSC',
    select: 10229614,
  }, {
    label: 'Men\'s 10km Road Race',
    select: 10229507,
  }, {
    label: 'Men\'s 15km Road Race',
    select: 10229504,
  }, {
    label: 'Men\'s 10Miles Road Race',
    select: 10229505,
  }, {
    label: 'Men\'s 20km Road Race',
    select: 10229506,
  }, {
    label: 'Men\'s Half Marathon',
    select: 10229633,
  }, {
    label: 'Men\'s Marathon',
    select: 10229634,
  }, {
    label: 'Men\'s 10km Race Walk',
    select: 10229625,
  }, {
    label: 'Men\'s 20km Race Walk',
    select: 10229508,
  }, {
    label: 'Men\'s 50km Race Walk',
    select: 10229628,
  }, {
    label: 'Men\'s Decathlon',
    select: 10229629,
  }, {
    label: 'Men\'s 50m indoor',
    select: 10229549,
  }, {
    label: 'Men\'s 60m indoor',
    select: 10229551,
  }, {
    label: 'Men\'s 500m indoor',
    select: 10229555,
  }, {
    label: 'Men\'s 1500m indoor',
    select: 10229558,
  }, {
    label: 'Men\'s Mile indoor',
    select: 10229559,
  }, {
    label: 'Men\'s 2000m indoor',
    select: 10229561,
  }, {
    label: 'Men\'s 3000m indoor',
    select: 10229560,
  }, {
    label: 'Men\'s 2 Miles indoor',
    select: 10229599,
  }, {
    label: 'Men\'s 5000m indoor',
    select: 10229562,
  }, {
    label: 'Men\'s 50mH indoor',
    select: 10229563,
  }, {
    label: 'Men\'s 60mH indoor',
    select: 10229565,
  }, {
    label: 'Women\'s 50m indoor',
    select: 10229572,
  }, {
    label: 'Women\'s 60m indoor',
    select: 10229574,
  }, {
    label: 'Women\'s 500m indoor',
    select: 10229578,
  }, {
    label: 'Women\'s 1500m indoor',
    select: 10229581,
  }, {
    label: 'Women\'s Mile indoor',
    select: 10229582,
  }, {
    label: 'Women\'s 2000m indoor',
    select: 10229583,
  }, {
    label: 'Women\'s 3000m indoor',
    select: 10229584,
  }, {
    label: 'Women\'s 2 Miles indoor',
    select: 10229585,
  }, {
    label: 'Women\'s 5000m indoor',
    select: 10229586,
  }, {
    label: 'Women\'s 50mH indoor',
    select: 10229587,
  }, {
    label: 'Women\'s 60mH indoor',
    select: 10229589,
  }, {
    label: 'Women\'s 300m',
    select: 10229515,
  }, {
    label: 'Women\'s 600m',
    select: 10229602,
  }, {
    label: 'Women\'s 1000m',
    select: 10229516,
  }, {
    label: 'Women\'s 1500m',
    select: 10229513,
  }, {
    label: 'Women\'s Mile',
    select: 10229517,
  }, {
    label: 'Women\'s 2000m',
    select: 10229518,
  }, {
    label: 'Women\'s 3000m',
    select: 10229519,
  }, {
    label: 'Women\'s 2 Miles',
    select: 10229520,
  }, {
    label: 'Women\'s 5000m',
    select: 10229514,
  }, {
    label: 'Women\'s 10,000m',
    select: 10229521,
  }, {
    label: 'Women\'s 400mH',
    select: 10229523,
  }, {
    label: 'Women\'s 2000mSC',
    select: 10229525,
  }, {
    label: 'Women\'s 3000mSC',
    select: 10229524,
  }, {
    label: 'Women\'s 10km Road Race',
    select: 10229537,
  }, {
    label: 'Women\'s 15km Road Race',
    select: 10229538,
  }, {
    label: 'Women\'s 10 Miles Road Race',
    select: 10229539,
  }, {
    label: 'Women\'s 20km Road Race',
    select: 10229540,
  }, {
    label: 'Women\'s Half Marathon',
    select: 10229541,
  }, {
    label: 'Women\'s Marathon',
    select: 10229534,
  }, {
    label: 'Women\'s 5km Race Walk',
    select: 10229546,
  }, {
    label: 'Women\'s 10km Race Walk',
    select: 10229547,
  }, {
    label: 'Women\'s 20km Race Walk',
    select: 10229535,
  }, {
    label: 'Women\'s Heptathlon',
    select: 10229536,
  },
];
************/
