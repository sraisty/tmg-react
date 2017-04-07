import {field, track, hurdles, relays, indivs, outdoor, indoor, throws,
  vertJumps, horzJumps, female, male, noFemales, noMales,
  indoorTrack, outdoorTrack, indoorField, outdoorField, evCodes, evNames}
  from '/imports/api/meetEventUtils.js';

import MEETEVENT_CONSTANTS from './meetEventConstants';

  /** ***** TEST ********/

const result = function sue() {
  console.log(MEETEVENT_CONSTANTS);

  console.log('FieldObjects: ', evCodes(field()));
  console.log('Field Codes: ', evCodes(evCodes(field())));
  console.log('Field Names: ', evCodes(evNames(field())));

  console.log('Track Codes: ', evCodes(track()));
  console.log('Relay  Codes: ', evCodes(relays()));
  console.log('Hurdle  Codes: ', evCodes(hurdles()));
  console.log('Individual Codes: ', evCodes(indivs()));
  console.log('Outdoor Codes: ', evCodes(outdoor()));
  console.log('Indoor Codes: ', evCodes(indoor()));
  console.log('Throws Codes: ', evCodes(throws()));
  console.log('VertJumps Codes: ', evCodes(vertJumps()));
  console.log('HorzJumps Codes: ', evCodes(horzJumps()));
  console.log('Female Codes: ', evCodes(female()));
  console.log('Male Codes: ', evCodes(male()));
  console.log('Not Female Codes: ', evCodes(noFemales()));
  console.log('Not Male Codes: ', evCodes(noMales()));

  console.log('IndivField Names: ', evNames(indivs(field())));
  console.log('IndivTrack Names: ', evNames(indivs(track())));
  console.log('IndivTrack2 Names: ', evNames(track(indivs())));
  //
  console.log('IndoorTrack: Names', evNames(indoorTrack()));
  console.log('IndoorField Names: ', evNames(indoorField()));
  console.log('OutdoorTrack Names: ', evNames(outdoorTrack()));
  console.log('OutdoorField Names: ', evNames(outdoorField()));
};

result();
