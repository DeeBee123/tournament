import {
  matchesPlayed,
  matchesWon,
  matchesDraw,
  matchesLost,
  matchesPoints,
} from "../../utils/calcPoints";

const TableRow = ({ team, place, matches }) => {
  return (
    <tr>
      <td>{place}</td>
      <td>{team.name}</td>
      <td>{matchesPlayed(matches)}</td>
      <td>{matchesWon(matches, team)}</td>
      <td>{matchesDraw(matches, team)}</td>
      <td>{matchesLost(matches, team)}</td>
      <td>{matchesPoints(matches, team)}</td>
    </tr>
  );
};

export default TableRow;
