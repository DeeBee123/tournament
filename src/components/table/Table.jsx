import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import TableRow from "./TableRow";

export const Table = () => {
  const { teams } = useContext(GlobalContext);

  if (!teams.length) {
    return <p> Please create first team for this tournament.</p>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Place</th>
          <th>Team</th>
          <th>Win</th>
          <th>Draw</th>
          <th>Lost</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <TableRow key={team.id} team={team} place={index + 1}/>
        ))}
      </tbody>
    </table>
  );
};
