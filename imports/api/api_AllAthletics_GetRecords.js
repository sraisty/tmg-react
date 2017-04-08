/* **********************
Screenscrape to get the world & national records for particular Track &
Field event via the www.all-athletics.com website.

The URL API is as follows:

Example: season record:
http://www.all-athletics.com/en-us/top-lists?event=10229605&season=2014  (men's world 2013-2014 season, outdoor 200m)

Example: all-time record:
http://www.all-athletics.com/en-us/all-time-lists?event=10229630  (men's outdoor 100m)

ALL queries require an event code.

ALL-TIME VS SEASON RECORD
To get All-time vs This Season vs Specific Year records:
1) alltime-lists
2) top-lists - this past season
  2a) top-lists with a param of season=XXXX (eg: season=2013-2014) will get a particular season.


EVENT CODES
To get men's outdoor records, only param needed is event code.
http://www.all-athletics.com/en-us/all-time-lists?event=10229630  (men's outdoor 100m)

WOMEN'S RECORDS
To get the results for WOMEN records, must also provide URL param "&gender=F",
 along with the event=XXXXXXXX param:
 eg:
  http://www.all-athletics.com/en-us/all-time-lists?event=10229513&gender=F
  (women's outdoor 1500)

INDOOR TRACK RECORDS
To get results for INDOOR TRACK records, must also provide URL param "&env=I"
along with the indoor event code
eg: http://www.all-athletics.com/en-us/all-time-lists?event=10229575&env=I&gender=F
(women's 200m indoor)

eg:
http://www.all-athletics.com/en-us/all-time-lists?event=10229549&env=I
(men's 50m indoor)

The top result is in the returned HTML page, in the first element that's
<td class="f1=result=column">
NOTE that there are 20 elements on each page with this (unfortunately, it didn't use an ID)

COUNTRY RECORDS
  To get national records, add the following parameters to an URL:
  &rtype=country&region=USA
  &rtype=country&region=can
****************/

import { HTTP } from 'meteor/http';
import MEETEVENT_CONSTANTS from '../../lib/meetEventConstants';

const ALL_ATHLETICS_BASE_URL = 'http://www.allathletics.com/en-us/all-time-lists?';

/**
 * @params aa: all-athetics query params
 * @params aa.tmgEventCode
 * @params aa.female
 * @params aa.indoor
 * @params aa.country
 ***/
function allAthleticsQueryObj(aa) {
  const meetEventObj = MEETEVENT_CONSTANTS[aa.tmgEventCode];
  let aaCodeSelector;
  const queryParamObj = {};

  if (aa.indoor) {
    queryParamObj.env = 'I';
    aaCodeSelector.env = meetEventObj.indoor;
  } else {
    aaCodeSelector = meetEventObj.outdoor;
  }

  if (aa.female) {
    queryParamObj.gender = 'F';
    aaCodeSelector = aaCodeSelector.female;
  } else {
    aaCodeSelector = aaCodeSelector.male;
  }
  queryParamObj.event = aaCodeSelector;

  if (aa.country) {
    queryParamObj.rType = 'country';
    queryParamObj.region = aa.country; // USA
  }

  console.log('queryParamObj is: ', queryParamObj);
  return queryParamObj;
}

function procHttpCallback(error, response) {
  console.log('procHttpCallback.');
  console.log('error: ', error);
  console.log('response: ', response);
}

function getTfRecordViaAPI(aa) {
  const queryOptionObj = allAthleticsQueryObj(aa);

  console.log('http call to ', ALL_ATHLETICS_BASE_URL);

  HTTP.call(
    'GET',
    ALL_ATHLETICS_BASE_URL,
    { params: queryOptionObj },
    procHttpCallback,
  );
}
