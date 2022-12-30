import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { sortByPoints, findMatches } from "../../utils/calcPoints";
import TableRow from "./TableRow";
import "./table.scss";

export const Table = () => {
  const { teams, matches } = useContext(GlobalContext);

  if (!teams.length) {
    return <p> Please create first team for this tournament.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Place</th>
          <th>Team</th>
          <th>Played</th>
          <th>Win</th>
          <th>Draw</th>
          <th>Lost</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {sortByPoints(matches, teams).map((team, index) => (
          <TableRow
            key={team.id}
            team={team}
            place={index + 1}
            matches={findMatches(team.name, matches) ?? null}
          />
        ))}
      </tbody>
    </table>
  );
};
