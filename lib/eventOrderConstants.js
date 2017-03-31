/** *********************************************************
*                NCAA
* Constants that govern high school track & field competition within the USA,
* under the NFHS (National Federation of State High School Associations )
* http://www.nfhs.org/activities-sports/track-fieldcross-country/
*
***********************************************************/

export const OUTDOOR_CA_CIF_TRACK_EVENT_ORDER = [
    '4x100',
    '1600',
    '100H',
    '110H',
    '400',
    '100',
    '800',
    '300H',
    '200',
    '3200',
    '4x400'
];

export const OUTDOOR_CA_CIF_FIELD_EVENT_ORDER = [
    'HJ',
    'PV',
    'SP',
    'DT',
    'JT',
    'LJ',
    'TJ'
];

/** ****************************************/
export const NFHS_STANDARD_EVENT_ORDER_OUTDOOR = [
    '4x800',
    '110H',
    '100H',
    '100',
    '4x200',
    '1600',
    '4x100',
    '400',
    '300H',
    '800',
    '200',
    '3200',
    '4x400'
];

export const NFHS_PRELIM_FINAL_EVENT_ORDER_OUTDOOR = [
    {
        event: '4x800',
        round: 'Finals'
    }, {
        event: '110H',
        round: 'Prelims'
    }, {
        event: '100H',
        round: 'Prelims'
    }, {
        event: '100',
        round: 'Prelims'
    }, {
        event: '400',
        round: 'Prelims'
    }, {
        event: '110H',
        round: 'Finals'
    }, {
        event: '100H',
        round: 'Finals'
    }, {
        event: '100',
        round: 'Finals'
    }, {
        event: '4x200',
        round: 'Finals'
    }, {
        event: '1600',
        round: 'Finals'
    }, {
        event: '4x100',
        round: 'Finals'
    }, {
        event: '400',
        round: 'Finals'
    }, {
        event: '300H',
        round: 'Prelims'
    }, {
        event: '200',
        round: 'Prelims'
    }, {
        event: '800',
        round: 'Finals'
    }, {
        event: '300H',
        round: 'Finals'
    }, {
        event: '200',
        round: 'Finals'
    }, {
        event: '3200',
        round: 'Finals'
    }, {
        event: '4x400',
        round: 'Finals'
    }
];

export const NFHS_STANDARD_EVENT_ORDER_INDOOR = [
    // NOTE: 600m OR 400m (not both)
    // NOTE: 1000m or 800m, NOT both
    '4x800',
    '55HH',
    '55',
    '4x200',
    '1600',
    '600',
    '400',
    '55LH',
    '1000',
    '800',
    '300',
    '3200',
    '4x400'
];

export const NFHS_PRELIM_FINAL_EVENT_ORDER_INDOOR = [
    // NOTE: 600m OR 400m (not both)
    // NOTE: 1000m or 800m, NOT both
    {
        event: '55HH',
        round: 'Prelims'
    }, {
        event: '55',
        round: 'Prelims'
    }, {
        event: '4x800',
        round: 'Finals'
    }, {
        event: '55HH',
        round: 'Finals'
    }, {
        event: '55',
        round: 'Finals'
    }, {
        event: '4x200',
        round: 'Finals'
    }, {
        event: '1600',
        round: 'Finals'
    }, {
        event: '600',
        round: 'Finals'
    }, {
        event: '400',
        round: 'Finals'
    }, {
        event: '55LH',
        round: 'Prelims'
    }, {
        event: '1000',
        round: 'Finals'
    }, {
        event: '800',
        round: 'Finals'
    }, {
        event: '55LH',
        round: 'Finals'
    }, {
        event: '300',
        round: 'Finals'
    }, {
        event: '3200',
        round: 'Finals'
    }, {
        event: '4x400',
        round: 'Finals'
    }
];

export const NFHS_FIELD_EVENTS_OUTDOOR = [
    'HJ',
    'PV',
    'SP',
    'DT',
    'JT',
    'LJ',
    'TJ'
];
export const NFHS_FIELD_EVENTS_INDOOR = ['HJ', 'PV', 'SP', 'LJ', 'TJ'];

// Measurement Precision
// All Track:
// DT: nearest lesser inch OR nearest lesser even number centimeter (0-2-4-6-8)
// SP: nearest lesser 1⁄4 inch OR nearest lesser centimeter
// JT: nearest lesser inch OR nearest lesser even number centimeter (0-2-4-6-8)
// LJ: nearest lesser 1⁄4 inch OR nearest lesser centimeter
// TJ: nearest lesser 1⁄4 inch OR nearest lesser centimeter
// PV: nearest lesser 1/4 inch OR nearest lesser centimeter
// HJ: nearest lesser 1/4 inch OR nearest lesser centimeter

/** *********************************************************
                NCAA
***********************************************************/

export const NCAA_STANDARD_EVENT_ORDER_INDOOR = [
    // Note: 55M and 55H might replace 60H and 60, depending on facility
    // 4x440 (yards) might replace 4x400, depending on facility

    '1MILE',
    '60H',
    '400',
    '60',
    '800',
    '200',
    '3000',
    '4x400'
];

export const NCAA_STANDARD_EVENT_ORDER_OUTDOOR = [
    // 4x110 (yards) might replace 4x100, depending on facility
    // 4x440 (yards) might replace 4x400, depending on facility
    '3000S',
    '4x100',
    '1500',
    '110H',
    '400',
    '100',
    '800',
    '400H',
    '200',
    '5000',
    '4x400'
];

export const NCAA_FIELD_EVENTS_OUTDOOR = [
    'HJ',
    'PV',
    'LJ',
    'TJ',
    'SP',
    'DT',
    'HT',
    'JT'
];
export const NCAA_COMBINED_EVENTS_OUTDOOR = ['DEC', 'HEPT'];

export const NCAA_FIELD_EVENTS_INDOOR = [
    'HJ',
    'PV',
    'LJ',
    'TJ',
    'SP',
    'WT'
];
export const NCAA_COMBINED_EVENTS_INDOOR = ['PENT', 'HEPT'];

// Increments for the PV & HJ are not specified, but USATF specifies that
// the raising interval must be constant until there is only one competitor
// left, and the raising interval must be at 2cm+ for HJ and 5cm+ for PV.
// For JH: NCAA recommends raising in 5cm incerments, and never less than 3cm
// For PV: NCAA recommends raising in 15cm increments and never less than 5cm

// For NCAA, all field event measurements are in Metric, to the nearest lesser
// centimeter
