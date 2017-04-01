/* **********************
http://www.all-athletics.com/en-us/top-lists?event=10229605&season=2014  (men's world 2013-2014 season, outdoor 200m)

To get national records
&rtype=country&region=USA
&rtype=country&region=can

To get All-time vs This Season vs Specific Year records:
alltime-list - all-time
top-list - this past season
a particular season: season=2017 etc

EVENT CODES
To get men's outdoor records, only param needed is event code.
http://www.all-athletics.com/en-us/all-time-lists?event=10229630  (men's outdoor 100m)


To get the results for WOMEN records, must also provide URL param "&gender=F",
 along with the event=XXXXXXXX param:
 eg: http://www.all-athletics.com/en-us/all-time-lists?event=10229513&gender=F  (women's outdoor 1500)

To get results for INDOOR TRACK records, must also provide URL param "&env=I"
along with the indoor event code
eg: http://www.all-athletics.com/en-us/all-time-lists?event=10229575&env=I&gender=F
(women's 200m indoor)
eg: http://www.all-athletics.com/en-us/all-time-lists?event=10229549&env=I (men's
50m indoor)

The top result is in the returned HTML page, in the first element that's
<td class="f1=result=column">
NOTE that there are 20 elements on each page with this (unfortunately, it didn't use an ID)

****************/

import {HTTP} from 'meteor/http';

const ALL_ATHLETICS_BASE_URL = 'http://www.allathletics.com/en-us/';
const SEASON_RECORD_PART_URL = 'top-lists?';
const ALLTIME_RECORD_PART_URL = 'all-time-lists?';
const SEASON_SELECT_PART_URL = 'season=';
const EVENT_SELECT_PART_URL = 'event=';
const USAREC_SELECT_PART_URL = 'rtype=country&region=USA';
const FEMALE_SELECT_PART_URL = 'gender=F';
const INDOOR_SELECT_PART_URL = 'env=I';

// let meetEventCode = 10229588;/* womens indoor 55m hurdles */

function allAthleticsQueryURL(meetEventCode, female, indoor, yr, country) {
  const todayYear = (new Date()).getFullYear();
  let urlFirstPart = ALL_ATHLETICS_BASE_URL;
  let urlLastPart = '';

  if (yr > 1900 && yr <= todayYear + 1) {
    // we have a valid year
    urlFirstPart += SEASON_RECORD_PART_URL;
    urlLastPart += SEASON_SELECT_PART_URL + yr;
  } else {
    // if we don't ask for a specific year, return all-time record
    urlFirstPart += ALLTIME_RECORD_PART_URL;
  }

  if (female) {
    urlLastPart += '&' + FEMALE_SELECT_PART_URL;
  }
  if (indoor) {
    urlLastPart += '&' + INDOOR_SELECT_PART_URL;
  }

  if (country) {
    if (country === 'USA') {
      urlLastPart += '&' + USAREC_SELECT_PART_URL;
    } else {
      console.log('Illegal country. Only works with USA for now.');
    }
  }

  // getAllAthleticsEventCode(meetEventCode, female, indoor, );

  return urlFirstPart + urlLastPart;
}

function getRecordViaAPI() {
  // let result = HTTP.call("GET");
}

/* ** NOTE: The codes for the common outdoor events were merged into the meetEventConstants.js file.
  TODO - Merge the indoor events into that file too, as well as
  the more esoteric outdoor events.
  *************/

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
    label: 'Men\'s 55m indoor',
    select: 10229550,
  }, {
    label: 'Men\'s 60m indoor',
    select: 10229551,
  }, {
    label: 'Men\'s 300m indoor',
    select: 10229553,
  }, {
    label: 'Men\'s 500m indoor',
    select: 10229555,
  }, {
    label: 'Men\'s 600m indoor',
    select: 10229600,
  }, {
    label: 'Men\'s 1000m indoor',
    select: 10229557,
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
    label: 'Men\'s 55mH indoor',
    select: 10229564,
  }, {
    label: 'Men\'s 60mH indoor',
    select: 10229565,
  }, {
    label: 'Women\'s 50m indoor',
    select: 10229572,
  }, {
    label: 'Women\'s 55m indoor',
    select: 10229573,
  }, {
    label: 'Women\'s 60m indoor',
    select: 10229574,
  }, {
    label: 'Women\'s 300m indoor',
    select: 10229576,
  }, {
    label: 'Women\'s 500m indoor',
    select: 10229578,
  }, {
    label: 'Women\'s 600m indoor',
    select: 10229601,
  }, {
    label: 'Women\'s 1000m indoor',
    select: 10229580,
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
    label: 'Women\'s 55mH indoor',
    select: 10229588,
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
