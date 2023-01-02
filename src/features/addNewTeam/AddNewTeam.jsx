import { useState, useContext } from "react";
import { Button, Input } from "../../components";
import { GlobalContext } from "../../context/GlobalContext";
import { v1 as uuidv1 } from "uuid";
import { capitalLetter } from "../../utils/useCapitalLetter";

export const AddNewTeam = () => {
  const [inputValue, setIntputValue] = useState("");

  const { setTeams, setMatches, teams } = useContext(GlobalContext);

  const newMatches = teams.map((team) => ({
    id: uuidv1(),
    team1: team.name,
    team2: inputValue,
    score1: null,
    score2: null,
  }));

  const handleAdd = () => {
    if (!inputValue) {
      return;
    }
    setMatches((prevMatches) => [...prevMatches, ...newMatches]);
    setTeams((prevTeams) => [...prevTeams, { id: uuidv1(), name: capitalLetter(inputValue) }]);
    setIntputValue("");
  };
  const inputChange = (e) => {
    setIntputValue(e.target.value);
  };

  return (
    <>
      <Input
        id="newTeam"
        title="Add team"
        handleChange={inputChange}
        value={inputValue}
        placeholder="New team"
        className="input"
        testId="inputTeam"
        handleBlur={inputChange}
      />
      <Button
        type="submit"
        text="Add"
        handleClick={handleAdd}
        testId="addTeam"
      />
    </>
  );
};
