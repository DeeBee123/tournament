const TableRow = ({team, place}) => {

  return (
    <tr>
      <td>{place}</td>
      <td>{team.name}</td>
      <td>The rest</td>
    </tr>
  );
};

export default TableRow;
