export const NFHS_MEET_SCORING = {
  // If TWO teams, look in index 2. If SEVEN teams, look in index 7, etc.
  indiv: [
    [], // we never have 0 teams competing
    [], // we never have 1 team competing
    [5, 3, 1],                // 2 teams
    [5, 3, 2, 1],             // 3 teams
    [6, 4, 3, 2, 1],          // 4 teams
    [8, 6, 4, 2, 1],          // 5 teams
    [10, 8, 6, 4, 2, 1],      // 6 teams
    [10, 8, 6, 4, 2, 1],      // 7+ teams (6 scoring)
    [10, 8, 6, 4, 3, 2, 1],   // 7+ teams (7 scoring)
    [10, 8, 6, 5, 4, 3, 2, 1],   // 7+ teams (8 scoring)
  ],
  relay: [
    [], // we never have 0 teams competing
    [], // we never have 1 team competing
    [5],                      // 2 teams
    [5, 3],                   // 3 teams
    [6, 4, 2],                // 4 teams
    [8, 6, 4, 2],             // 5 teams
    [10, 8, 6, 4, 2],         // 6 teams
    [10, 8, 6, 4, 2, 1],      // 7+ teams (6 scoring)
    [10, 8, 6, 4, 3, 2, 1],   // 7+ teams (7 scoring)
    [10, 8, 6, 5, 4, 3, 2, 1],   // 7+ teams (8 scoring)
  ],
};

export const USATF_MEET_SCORING = {
  indiv: [
    [],  // never have 0 teams competing
    [],  // never have 1 team competing
    [5, 3, 2, 1],
  ],
  relay: [
    [],  // never have 0 teams competing
    [],  // never have 1 team competing
    [5, 3, 2, 1], // TODO - this is in accordance with USATF rules,
                  // but doesn't make sense for only 2 teams
  ],
};

export const NCAA_NON_CHAMPIONSHIP_MEET_SCORING = {
  indiv: [
    // NOTE: For four or less teams, only two individual entries per
    // institution shall score.  If above five teams, all individuals can
    // score, including more than 2 from same institution. (Rule 7)
    [], // we never have 0 teams competing
    [], // we never have 1 team competing
    [5, 3, 2, 1],                // 2 teams
    [7, 5, 4, 3, 2, 1],          // 3 teams
    [9, 7, 6, 5, 4, 3, 2, 1],    // 4 teams
    [10, 8, 6, 4, 2, 1],         // 5 teams
    [10, 8, 6, 4, 2, 1],         // 6+ teams (6 scoring)
    [10, 8, 6, 5, 4, 3, 2, 1],   // 6+ teams (8 scoring)
  ],
  relay: [
    // NOTE: Only one relay entry per institution shall score
    [], // we never have 0 teams competing
    [], // we never have 1 team competing
    [5, 3],                      // 2 teams
    [7, 5, 4],                   // 3 teams
    [9, 7, 6, 5],                // 4 teams
    [10, 8, 6, 4, 2],            // 5 teams
    [10, 8, 6, 4, 2, 1],         // 6+ teams (6 scoring)
    [10, 8, 6, 5, 4, 3, 2, 1],   // 6+ teams (8 scoring)
  ],
};

export const NCAA_CHAMPIONSHIP_MEET_SCORING = {
  indiv: [
    // NOTE: No limit on number of competitors per institution that can score
    // (Rule 7)
    [], // we never have 0 teams competing
    [], // we never have 1 team competing
    [10, 8, 6, 4, 2, 1],         // 2 teams
    [10, 8, 6, 4, 2, 1],         // 3 teams
    [10, 8, 6, 4, 2, 1],         // 4 teams
    [10, 8, 6, 4, 2, 1],         // 5 teams
    [10, 8, 6, 4, 2, 1],         // 6+ teams (6 scoring)
    [10, 8, 6, 5, 4, 3, 2, 1],   // 6+ teams (8 scoring)
  ],
  relay: [
    // NOTE: Only one relay entry per institution shall score
    [], // we never have 0 teams competing
    [], // we never have 1 team competing
    [10, 8, 6, 4, 2],            // 2 teams
    [10, 8, 6, 4, 2],            // 3 teams
    [10, 8, 6, 4, 2],            // 4 teams
    [10, 8, 6, 4, 2],            // 5 teams
    [10, 8, 6, 4, 2, 1],         // 6+ teams (6 scoring)
    [10, 8, 6, 5, 4, 3, 2, 1],   // 6+ teams (8 scoring)
  ],
};

export const NCAA_ALTERNATIVE_NONCHAMPIONSHIP_MEET_SCORING = {
  // Only for meets with 4 or fewear teams, with consent of all competing
  // coaches
  indiv: [
    // NOTE: All individual entries have ability to score (even more than 2
    // per institution)
    [],     // we never have 0 teams competing
    [],     // we never have 1 team competing
    [5, 3, 1],         // 2 teams
    [5, 3, 2, 1],      // 3 teams
    [5, 3, 2, 1],      // 4 teams
  ],
  relay: [
    // NOTE: Only one relay entry per institution shall score
    [],       // we never have 0 teams competing
    [],       // we never have 1 team competing
    [5, 0],            // 2 teams
    [5, 3, 0],         // 3 teams
    [5, 3, 2, 0],      // 4 teams
  ],
};
