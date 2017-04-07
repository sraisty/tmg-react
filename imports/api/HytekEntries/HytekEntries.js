import fs from 'fs';
import parse from 'csv-parse/lib/sync';
import * as hytek from './hytekConstants';


/**
 * Class to represent the object-ified information on athletes and their
 *  entries into a meet's events, imported from a Hytek semicolon delimited file
 */
class HytekEntries {
  /**
   * Parses the HyTek entries file, adds the athletes (without duplication),
   * events, divisions, nd genders to the Meet
   * @param {string} filename - the full pathname, with slashes, from root to
   * HyTek semicolon delimited file with meet entries
   * @todo - at some point, this should be changed to an async callback instead
   * of sync, for reading the file.
   */
  constructor(filename) {
    this.athleteRecs = [];
    this.indivEntries = [];
    this.relayEntries = [];
    this.warnings = [];

    // TODO - Consider using the async version of reading File later.
    const text = fs.readFileSync(filename, 'utf8');

    // parse returns a 2D array, where the 1st dimension is a "record" that
    // corresponds to an entire line in the source file.
    // The 2nd dimension specifies which semicolon-separated field within that
    // line.
    const records = parse(text, {
      rowDelimiter: '\r\n',
      delimiter: ';',
      skip_empty_records: true,
      trim: true,
      // In HyTek's format, the different types of lines have different
      // numbers of fields
      relax_column_count: true,
    });

    for (let i = 0; i < records.length; i++) {
      // record is one line within the source file
      const record = records[i];

      const {line, recordType} = this.parseHtLine(record);
      if (!line) {
        console.log('Skipping bad line');
        this.warnings.push(
          `htConstructor: Skipping bad line # ${i} | Record Type: ${recordType}`);
      } else {
        console.log(`Line: ${line}`);
        console.log(`recordType: ${recordType}`);
        switch (recordType) {
          case 'athleteInfo': {
            this.athleteRecs.push(line);
            break;
          }
          case 'indivEntry': {
            this.indivEntries.push(line);
            break;
          }
          case 'relayEntry': {
            this.relayEntries.push(line);
            break;
          }
          case 'emptyLine': {
            break;
          }
          default: {
            throw new Error(`Unknown line type: ${recordType}`);
          }
        } // switch
      }
    }
  }  // constructor


  /**
   * Parses one line in the HyTek semicolon delimited file for track meet
   * entries
   * @param {Array} record - an ordered array of the fields on a single line in
   * the HyTek file, which were each separated by semicolons.
   * @return {Object} line - a structure for each line in the file, which might
   * contain data on athlete (I type), an entry of an individual athlete into
   * a meet event (D or E type), or an entry of a relay team into a relay event
   * (Q or R event type).
   */
  parseHtLine(record) {
    console.log(record);
    const lineType = record[0];
    let lineFieldDefs;
    let numFieldsToParse;
    let recordType; // a summarized lineType

    // skip the first record. It's just the letter 'I'
    switch (lineType) {
      case 'I': {
        lineFieldDefs = hytek.ILineFields;
        recordType = 'athleteInfo';
        numFieldsToParse = record.length;
        break;
      }
      case 'D': {
        lineFieldDefs = hytek.DLineFields;
        recordType = 'indivEntry';
        numFieldsToParse = record.length;
        break;
      }
      case 'E': {
        lineFieldDefs = hytek.ELineFields;
        recordType = 'indivEntry';
        numFieldsToParse = record.length;
        break;
      }
      // For relays, we can't parse every field in the line yet because
      // manyof them correspond to a variable length list of athletes.
      // We'll add the relay athletes to
      // the line object a little later.
      case 'Q': {
        lineFieldDefs = hytek.QLineFields;
        recordType = 'relayEntry';
        numFieldsToParse = lineFieldDefs.length;
        break;
      }
      case 'R': {
        lineFieldDefs = hytek.RLineFields;
        recordType = 'relayEntry';
        numFieldsToParse = lineFieldDefs.length;
        break;
      }
      case '': {
        // empty line. Just return
        this.warnings.push('Skipping empty line.');
        recordType = 'emptyLine';
        return {ok: false, recordType};
      }
      default: {
        throw new Error(`FILE FORMAT ERROR: Bad Line Type: ${recordType}`);
      }
    }

    let line = {};
    // i=1 because data starts in second field of line
    for (let i = 1; i < numFieldsToParse; i++) {
      const fieldDef = lineFieldDefs[i];
      let fieldValue = record[i];
      const ok = this.fieldOK(fieldValue, fieldDef);
      if (!ok) {
        // if the field is okay, don't throw an error.
        // just return false so that we can skip the line
        this.warnings.push(`Skipping bad line because of bad field.
          Field: ${fieldDef.key}.
          Value: ${fieldValue}.
          RecordType: ${recordType}`);
        return {ok: false, recordType};
      }
      if (fieldDef.allcaps) {
        fieldValue = fieldValue.toUpperCase();
      }
      line[fieldDef.key] = fieldValue;
    }

    // If a Relay type of record, we now have to add the runners:
    if (recordType === 'relayEntry') {
      const ok = this.parseRelayRunners(line, record, lineType);
      if (!ok) {
        throw new Error(`PARSE ERROR on a Relay Line: ${ok}`);
      }
    }
    return {line, recordType};
  }  // parseHtFile

  /**
   *
   */
  verifyHtFile() {
    // Note 1: The I record is optional and not required.
    // Note 2: For each athlete, there can be only one I record

    // CHECK IF ATHLETE IS ALREADY IN ARRAY

    // if (line)
    // Check if this athlete was already added to the Meet
    //   let found = false;
    //   for (let j=0, max=this.athletes.length; j<max; j++) {
    //     let athlete = this.athletes[j];
    //     if (athlete.isSameAthlete(line)) {
    //       found = true;
    //       break;
    //     }
    //   }
    //   if (found) {
    //     console.log('Athlete already entered: ' +
    //       line.firstName + ' ' + line.lastName);
    //   } else {
    //     //
    //   }
    // }
  }

  /**
  * This function checks that the fieldValue meets the constraints
  * of its fieldDefinition, in terms of length, allowed values, etc.
  * @param {string} fieldValue
  * @param {object} fieldDef
  * @return {Boolean} pOK - returns true if the field is OK & has no errors
  */
  fieldOK(fieldValue, fieldDef) {
    // Check if  field is too many characters long
    // according to HyTek file format.
    if (fieldValue.length > fieldDef.len) {
      this.warnings.push(`FILE PARSE ERROR: field value is too long.
        field: ${fieldDef.key}
        value: ${fieldValue}`,
      );
      return false;
    }

    // Check to make sure field values are legal
    if ((fieldDef.valid) && (fieldValue) &&
       !(fieldDef.valid.includes(fieldValue.toUpperCase()))) {
      this.warnings.push(`FILE PARSE ERROR: illegal values.
        field ${fieldDef.key} value ${fieldValue}`
      );
      return false;
    }
    return true;
  }

  /**
   * @param {object} line
   * @param {array} record
   * @param {string} lineType
   * @return {Boolean} - line parsed ok without errors
   */
  parseRelayRunners(line, record, lineType) {
    let runnerIndexInRecord;
    let fieldsPerRunner;
    line.runners = [];
    if (lineType === 'Q') {
      runnerIndexInRecord = 15;
      fieldsPerRunner = 8;
    } else { // lineType should 'R'
      runnerIndexInRecord = 10;
      fieldsPerRunner = 7;
    }

    let runnerNumber = 0;
    while (runnerIndexInRecord < record.length) {
      // object containing the fields outlined in RelayRunnerFieldDefs
      let runner = {};

      for (let i = 0; i < fieldsPerRunner; i++) {
        const fieldDef = hytek.RelayRunnerFieldDefs[i];
        let fieldValue = record[runnerIndexInRecord + i];
        if (!this.fieldOK(fieldValue, fieldDef)) {
          this.warnings.push(`ERROR - Skipping Line due to
              Bad field: ${fieldDef.key}; Value: ${fieldValue}; Line: ${line}`);
          return false;
        }
        if (fieldDef.allcaps) {
          fieldValue = fieldValue.toUpperCase();
        }
        runner[fieldDef.key] = fieldValue;
      } // end for
      line.runners[runnerNumber] = runner;
      runnerNumber += 1;
      runnerIndexInRecord += fieldsPerRunner;
    }
    if (!this.convertHytekRelayCodes(line)) {
      this.warnings.push(
        `ERROR - Skipping Line due to unknown Hytek relay eventCode
          ${line.eventCode}, Line: ${line}`
      );
      return false;
    }
    console.log(`RELAY ${runnerNumber} Runners`);
    console.log(`RELAY: ${JSON.stringify(line, null, 4)}`);
    return true;
  }

  /**
   * Convert HyTek's Relay Event Codes to Ours
   * @todo This is a Hack. Do it right with a lookup table in
   * tfconstants.js
   * @param {object} line
   * @return {Boolean} - returns true if no errors.
   */
  convertHytekRelayCodes(line) {
    // TODO - this whole function is a HACK. Need to change this
    // to pulling valid hyTek event conversions from a constant
    // instead of hard-coding it.
    const hytekEventCode = line.eventCode;
    switch (hytekEventCode) {
      case '400': {
        line.eventCode = '4x100';
        break;
      }
      case '800': {
        line.eventCode = '4x200';
        break;
      }
      case '1600': {
        line.eventCode = '4x400';
        break;
      }
      case '3200': {
        line.eventCode = '4x800';
        break;
      }
      default: {
        this.warnings.push(`ERROR: Unknown HyTek Relay Code: ${hytekEventCode}`);
      }
    }
    return true;
  }
}

export default HytekEntries;
