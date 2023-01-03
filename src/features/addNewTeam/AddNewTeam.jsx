import { useState, useContext } from "react";
import { Button, Input } from "../../components";
import { GlobalContext } from "../../context/GlobalContext";
import { v1 as uuidv1 } from "uuid";
import { capitalLetter, cleanValue } from "../../utils/stringFunc";
import {
  validInput,
  teamIsUnique,
  notAllowedSymbols,
  checkLength,
} from "../../utils/validation";
import Alert from "../../components/alert/Alert";

export const AddNewTeam = () => {
  const [inputValue, setIntputValue] = useState("");
  const { setTeams, setMatches, teams } = useContext(GlobalContext);
  const [alertMsg, setAlertMsg] = useState(null);

  const newMatches = teams.map((team) => ({
    id: uuidv1(),
    team1: team.name,
    team2: inputValue && capitalLetter(cleanValue(inputValue)),
    score1: null,
    score2: null,
  }));

  const clearAlert = () => {
    setTimeout(function () {
      setAlertMsg(null);
    }, 1000);
  };

  const handleAdd = () => {
    if (!validInput(inputValue)) {
      setAlertMsg({ msg: "Invalid input", type: "alert--danger" });
      return;
    }
    if (!teamIsUnique(inputValue, teams)) {
      setAlertMsg({
        msg: "This name is already taken.",
        type: "alert--danger",
      });
      return;
    }
    if (notAllowedSymbols(inputValue)) {
      setAlertMsg({
        msg: "Only numbers and letters are allowed.",
        type: "alert--danger",
      });
      return;
    }
    if (!checkLength(cleanValue(inputValue))) {
      setAlertMsg({
        msg: "Maximum three words can be used.",
        type: "alert--danger",
      });
      return;
    }
    setAlertMsg({
      msg: "Your team has been successfully added.",
      type: "alert--success",
    });
    setMatches((prevMatches) => [...prevMatches, ...newMatches]);
    setTeams((prevTeams) => [
      ...prevTeams,
      { id: uuidv1(), name: capitalLetter(cleanValue(inputValue)) },
    ]);
    setIntputValue("");
  };
  const inputChange = (e) => {
    if (notAllowedSymbols(e.target.value)) {
      setAlertMsg({
        msg: "Only numbers and letters are allowed.",
        type: "alert--danger",
      });
    }
    if (!checkLength(cleanValue(e.target.value))) {
      setAlertMsg({
        msg: "Maximum three words can be used.",
        type: "alert--danger",
      });
    }
    setIntputValue(e.target.value);
  };
  const handleReset = () => {
    localStorage.clear();
    setTeams([]);
    setMatches([]);
  };

  return (
    <>
      {alertMsg && (
        <Alert
          msg={alertMsg.msg}
          className={alertMsg.type + " newTeam"}
          handleAlert={clearAlert}
        />
      )}
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
