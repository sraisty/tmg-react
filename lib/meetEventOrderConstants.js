/** *********************************************************
*                NCAA & NHFS - event orders

* http://www.nfhs.org/activities-sports/track-fieldcross-country/
*
***********************************************************/

const STANDARD_ORDER_OF_EVENTS = {
  outdoorCaCIF_HS_TrackEvents: [
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
    '4x400',
  ],
  outdoorCaCIF_HS_FieldEvents: [
    'HJ',
    'PV',
    'SP',
    'DT',
    'JT',
    'LJ',
    'TJ',
  ],
  outdoorNHFS_Std_TrackEvents: [
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
    '4x400',
  ],
  outdoorNHFS_MultiDay_TrackEvents: [
    {
      event: '4x800',
      round: 'Finals',
    }, {
      event: '110H',
      round: 'Prelims',
    }, {
      event: '100H',
      round: 'Prelims',
    }, {
      event: '100',
      round: 'Prelims',
    }, {
      event: '400',
      round: 'Prelims',
    }, {
      event: '110H',
      round: 'Finals',
    }, {
      event: '100H',
      round: 'Finals',
    }, {
      event: '100',
      round: 'Finals',
    }, {
      event: '4x200',
      round: 'Finals',
    }, {
      event: '1600',
      round: 'Finals',
    }, {
      event: '4x100',
      round: 'Finals',
    }, {
      event: '400',
      round: 'Finals',
    }, {
      event: '300H',
      round: 'Prelims',
    }, {
      event: '200',
      round: 'Prelims',
    }, {
      event: '800',
      round: 'Finals',
    }, {
      event: '300H',
      round: 'Finals',
    }, {
      event: '200',
      round: 'Finals',
    }, {
      event: '3200',
      round: 'Finals',
    }, {
      event: '4x400',
      round: 'Finals',
    },
  ],

  indoorNHFS_TrackEvents: [
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
    '4x400',
  ],

  indoorNHFS_MultiDayTrackEvents: [
    // NOTE: 600m OR 400m (not both)
    // NOTE: 1000m or 800m, NOT both
    {
      event: '55HH',
      round: 'Prelims',
    }, {
      event: '55',
      round: 'Prelims',
    }, {
      event: '4x800',
      round: 'Finals',
    }, {
      event: '55HH',
      round: 'Finals',
    }, {
      event: '55',
      round: 'Finals',
    }, {
      event: '4x200',
      round: 'Finals',
    }, {
      event: '1600',
      round: 'Finals',
    }, {
      event: '600',
      round: 'Finals',
    }, {
      event: '400',
      round: 'Finals',
    }, {
      event: '55LH',
      round: 'Prelims',
    }, {
      event: '1000',
      round: 'Finals',
    }, {
      event: '800',
      round: 'Finals',
    }, {
      event: '55LH',
      round: 'Finals',
    }, {
      event: '300',
      round: 'Finals',
    }, {
      event: '3200',
      round: 'Finals',
    }, {
      event: '4x400',
      round: 'Finals',
    },
  ],
  outdoorNhfsFieldEvents: [
    'HJ',
    'PV',
    'SP',
    'DT',
    'JT',
    'LJ',
    'TJ',
  ],
  indoorNhfsFieldEvents: [
    'HJ',
    'PV',
    'SP',
    'LJ',
    'TJ',
  ],

  indoorNcaaTrackEvents: [
    // Note: 55M and 55H might replace 60H and 60, depending on facility
    // 4x440 (yards) might replace 4x400, depending on facility
    '1MILE',
    '60H',
    '400',
    '60',
    '800',
    '200',
    '3000',
    '4x400',
  ],

  outdoorNCAATrackEvents: [
    // 4x110 (yards) might replace 4x100, depending on facility 4x440
    // (yards) might replace 4x400, depending on facility
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
    '4x400',
  ],
  outdoorNcaaFieldEvents: [
    'HJ',
    'PV',
    'LJ',
    'TJ',
    'SP',
    'DT',
    'HT',
    'JT',
  ],
  outdoorNcaaOutdoorEvents: [
    'DEC', 'HEPT',
  ],
  indoorNcaaFieldEvents: [
    'HJ',
    'PV',
    'LJ',
    'TJ',
    'SP',
    'WT',
  ],
  indoorNcaaCombinedEvents: [
    'PENT', 'HEPT',
  ],
};

export default STANDARD_ORDER_OF_EVENTS;
