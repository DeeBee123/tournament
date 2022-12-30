export const matchesPlayed = (matches) => {
  return matches?.filter((match) => match.score1 !== null).length;
};

export const matchesWon = (matches, team) => {
  return matches?.filter(
    (match) =>
      (match.team1 === team.name && match.score1 > match.score2) ||
      (match.team2 === team.name && match.score1 < match.score2)
  ).length;
};

export const matchesDraw = (matches, team) => {
  return matches?.filter(
    (match) =>
      (match.team1 === team.name && match.score1 === match.score2) ||
      (match.team2 === team.name && match.score1 === match.score2)
  ).length;
};

export const matchesLost = (matches, team) => {
  return matches?.filter(
    (match) =>
      (match.team1 === team.name && match.score1 < match.score2) ||
      (match.team2 === team.name && match.score1 > match.score2)
  ).length;
};

export const matchesPoints = (matches, team) => {
  return matchesWon(matches, team) * 3 + matchesDraw(matches, team);
};

export const sortByPoints = (matches, teams) => {
  return [...teams].sort(
    (team1, team2) =>
       matchesPoints(matches, team2) - matchesPoints(matches, team1) 
  );
};
