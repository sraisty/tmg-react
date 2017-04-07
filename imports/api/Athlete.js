import {DEFAULT_DIVISION} from '../../lib/tfconstants';

/**
* The Athlete Class describes each athlete (duh) as a person.
*/
class Athlete {
  /**
   * Constructor of Athlete object.
   * @param {object} params - Pass in a struct-style object literal.
   * @param {string} params.firstName of the Athlete. REQUIRED.
   * @param {string} [params.middleInitial] of the Athlete. One character, and
   * optional since some people don't have middle names.
   * @param {string} params.lastName of the Athlete. REQUIRED.
   * @param {string} [params.institutionName] - school or Club name of
   * Athlete team
   * @param {string} params.gender - Athlete's gender. either 'M' for male
   * or 'F' for female. REQUIRED.
   * @param {string} [params.divisionName = 'Open'] - Examples: 'Varsity',
   * 'Junior Varsity', 'Frosh/Soph', '8 & Under', '40-44'. If not provided,
   * default is set to the constant 'DEFAULT_DIVISION'
   * @param {string} [params.schoolYear] - Optional for open/masters/youth.
   * Used for Middle/HS/College. valid: 6, 7, 8, 9, 10, 11, 12, FR, SO, JR, SR
   * @param {number} [params.competitorNum] - athlete id #, just for this
   * meet, that is unique within the athlete's gender-division combo
   */
  constructor(params) {
    if (params.firstName) {
      this.firstName = params.firstName;
    } else {
      throw new Error('ERROR new Athlete(): missing firstName.');
    }

    if (params.lastName) {
      this.lastName = params.lastName;
    } else {
      // throw new Error('ERROR new Athlete(): missing lastName.');
      throw new Error('ERROR new Athlete(): missing lastName');
    }

    if (params.gender) {
      this.gender = params.gender.toUpperCase();
    } else {
      throw new Error('ERROR new Athlete(): missing gender');
    }

    // Not everyone has a middle initial, so if undefined set it to ''
    this.middleInitial = params.middleInitial || '';

    // If the athlete is not on a team, use "unattached"
    this.institutionName = params.institutionName || 'UNATTACHED';

    // If no division is supplied, default to the Varsity Division
    this.divisionName = params.divisionName || DEFAULT_DIVISION;
    console.log(`DEFAULT_DIVISION is ${DEFAULT_DIVISION}`);

    // schoolyear = 1,2,3,4,5,6,7,8,9,10,11,12, FR, SO, JR, SR
    // schoolyear is not required. Let it remain undefined if necessary.
    this.schoolYear = params.schoolYear;


    // If Competitor Number is not provided, we'll generate one.
    if (params.competitorNum) {
      this.competitorNum = params.competitorNum;
    } else {
      // TODO: Generate a unique competitor # for each athlete within a meet
    }
  }

  /**
   * @param {object} p - parameters
   * @return {boolean}
   * Tests if the athlete described by the params is the same as this athlete
   * by comparing firstName, lastName, middleInitial, Gender, InstitutionName
   * @todo - Should we also compare competitorNum?
   */
  isSame(p) {
    let warning = 'Athlete almost matches, but not quite. ';

    // p is just short for "params"
    if (!(p.firstName && p.lastName && p.gender)) {
      // the minimum fields for Athlete are firstName, lastName & gender,
      // so immediately return that the comparison to Athlete is false
      // if those fields are not Provided
      warning = 'Need first name, last name and gender to compare';
      return {ok: false, warning};
    }

    if ((p.firstName.toUpperCase() === this.firstName.toUpperCase()) &&
        (p.lastName.toUpperCase() === this.lastName.toUpperCase())) {
          // OK, first and last name match, but we still have to check
          // the other fields to make sure they are equal, or else Hytek
          // file format considers them seprate athletes.

      if (p.middleInitial.toUpperCase() !== this.middleInitial.toUpperCase()) {
        // TODO - warn that the middle Intitals don't match
        warning += ': middle Initial';
        return {ok: false, warning};
      }
      if (p.gender !== this.gender.toUpperCase()) {
        // TODO - warn that the genders don't match
        warning += ': gender';
        return {ok: false, warning};
      }
      if (p.institutionName.toUpperCase() !==
          this.institutionName.toUpperCase()) {
        // TODO - warn that the institution names don't match
        warning += ': institutionName';
        return {ok: false, warning};
      }

      // schoolYear doesn't always exist, but if it does the two athletes both
      // need it to be defined and have the same schoolYear value.
      // Remember schoolYear can be letters. ex: 'FR', 'SO', ...
      if (!p.schoolYear && !this.schoolYear) {
          // neither athlete had schoolYear defined
        warning = '';
        return {ok: true, warning};
      }
      if (p.schoolYear && this.schoolYear &&
        (p.schoolYear.toUpperCase() === this.schoolYear.toUpperCase())) {
        warning = '';
        return {ok: true, warning};
      }
    }
    warning = 'Athletes do not match';
    return {ok: false, warning};
  } // end isSame

} // end class Athlete

export default Athlete;
