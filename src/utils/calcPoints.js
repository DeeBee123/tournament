export const matchesPlayed = (matches, team) => {
  return matches?.filter(
    (match) =>
      (match.score1 !== null && match.team1 === team.name) ||
      (match.score2 !== null && match.team2 === team.name)
  ).length;
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

export const findMatches = (name, matches) => {
  const filteredMatches = matches.filter(
    (match) =>
      (match.team1 === name && match.score1) ||
      (match.team1 && match.score1 === 0) ||
      (match.team2 === name && match.score2) ||
      (match.team2 && match.score2 === 0)
  );
  return filteredMatches;
};

export const sortByPoints = (matches, teams) => {
  return [...teams].sort(
    (team1, team2) =>
      matchesPoints(findMatches(team2.name, matches), team2) -
      matchesPoints(findMatches(team1.name, matches), team1)
  );
};
