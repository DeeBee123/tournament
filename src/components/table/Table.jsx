import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { sortByPoints, findMatches } from "../../utils/calcPoints";
import TableRow from "./TableRow";
import Pagination from "../pagination/Pagination";
import "./table.scss";

export const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [teamsPerPage] = useState(5);
  const { teams, matches } = useContext(GlobalContext);

  const indexOfLastRecord = currentPage * teamsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - teamsPerPage;
  const currentTeams = sortByPoints(matches, teams).slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const pagenumbers = Math.ceil(teams.length / teamsPerPage);
  if (!teams.length) {
    return <p> Please create first team for this tournament.</p>;
  }

  return (
    <section className="table">
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
          {currentTeams.map((team, index) => (
            <TableRow
              key={team.id}
              team={team}
              place={++index + indexOfFirstRecord}
              matches={findMatches(team.name, matches) ?? null}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        nPages={pagenumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};
