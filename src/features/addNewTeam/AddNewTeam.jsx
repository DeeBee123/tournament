import { useState, useContext } from "react";
import { Button, Input } from "../../components";
import { GlobalContext } from "../../context/GlobalContext";
import { v1 as uuidv1 } from "uuid";
import { capitalLetter } from "../../utils/useCapitalLetter";
import { validInput, teamIsUnique } from "../../utils/validation";
import Warning from "../../components/warning/Warning";

export const AddNewTeam = () => {
  const [inputValue, setIntputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const { setTeams, setMatches, teams } = useContext(GlobalContext);

  const newMatches = teams.map((team) => ({
    id: uuidv1(),
    team1: team.name,
    team2: capitalLetter(inputValue),
    score1: null,
    score2: null,
  }));

  const handleAdd = () => {
    if (!validInput(inputValue)) {
      setErrorMsg("Invalid input");
      return;
    }
    if (!teamIsUnique(inputValue, teams)) {
      setErrorMsg("This name is already taken.");
      return;
    }
    setErrorMsg(null);
    setMatches((prevMatches) => [...prevMatches, ...newMatches]);
    setTeams((prevTeams) => [
      ...prevTeams,
      { id: uuidv1(), name: capitalLetter(inputValue) },
    ]);
    setIntputValue("");
  };
  const inputChange = (e) => {
    setIntputValue(e.target.value);
  };
  const handleReset = () => {
    localStorage.clear();
    setTeams([]);
    setMatches([]);
  };

  return (
    <>
      {errorMsg && <Warning errorMsg={errorMsg} className="newTeam" />}
      <Input
        id="newTeam"
        title="Add team"
        handleChange={inputChange}
        value={inputValue}
        placeholder="New team"
        className="input"
        testId="inputTeam"
        handleBlur={inputChange}
        handleKey={(e) => e.key === "Enter" && handleAdd()}
      />
      <Button
        type="submit"
        text="Add"
        handleClick={handleAdd}
        testId="addTeam"
      />
      <Button
        type="submit"
        text="Reset data"
        handleClick={handleReset}
        testId="removeData"
      />
    </>
  );
};
