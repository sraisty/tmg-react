/**
 * @param {object} eventEntry - an entry of one athlete into a particular
 * track & field event.
 */
class MeetEvent {
  // check if this athlete has already been added to the Meet. If so, get
  // their competitorNum.
  // Set the athlete's division if it hasn't been already.
  // if the athlete's division was already set, make sure the entry division
  // is the same.  Otherwise throw an error.

  // check if this entry's division, institution & gender has been added to
  // the meet

  // check if this MasterEvent has been added to the meet.
  // If not, add it

  // check if this entry's division & gender have been added to this
  // MasterEvent.  If not, add them.

  // check if this athlete is already in this Event-gender-division group
  // if not, add them (with their seed time)
  // if they are already in the meet, see if seed time needs to be updated

  /**
   * Constructor of MeetEvent object.
   * @param {object} params - Pass in a struct-style object literal.
   */
  constructor(params) {
    this.eventCode = params.eventCode;
    //    this.metric =

    // array of {athlete: convertedSeedMark} pairs
    this.entrants = [];
    this.competitionGroups = [];
    debugger;
  }

  /**
   * @param {object} params
   */
  addEventEntry(params) {
    entry = {
      athleteID: params.athleteID,
      convertedSeedMark: params.seedMark,
      division: params.division,
    };
    this.entrants.push(entry);
    debugger;
  }
}

export {MeetEvent};
