import { useState } from "react";
import { Input } from "../input";
import { inputPositiveNumber } from "../../utils/validation";
import Warning from "../warning/Warning";

const Match = ({ match, handleUpdate }) => {
  const [inputsValue, setIntputsValue] = useState({
    id: match.id,
    score1: null,
    score2: null,
  });
  const [warning, setWarning] = useState(null);

  const inputChange = (key, e) => {
    if (e.target.value === "") {
      setIntputsValue({ id: match.id, score1: null, score2: null });
    }
    if (inputPositiveNumber(e.target.value)) {
      const copyState = { ...inputsValue };
      copyState[key] = +e.target.value;
      setIntputsValue(copyState);
      setWarning(null);
    } else {
      setWarning("Invalid input. It has to be a positive integer. ");
    }
  };

  const handleBlur = () => {
    if (
      (inputsValue.score1 && inputsValue.score2) ||
      (inputsValue.score1 && inputsValue.score2 === 0) ||
      (inputsValue.score1 === 0 && inputsValue.score2) ||
      (inputsValue.score1 === 0 && inputsValue.score2 === 0)
    ) {
      handleUpdate(inputsValue);
      setIntputsValue({
        score1: null,
        score2: null,
      });
    }
  };

  return (
    <>
      {warning && <Warning errorMsg={warning} />}
      <div className="matches__row">
        <span className="team">{match.team1}</span>
        {match.score1 === null ? (
          <Input
            className="input--score"
            id="newScore1"
            title="Add score1"
            handleBlur={handleBlur}
            handleChange={(e) => inputChange("score1", e)}
            value={inputsValue.score1 ?? ""}
            type="text"
          />
        ) : (
          <span className="score">{match.score1}</span>
        )}
        :
        {match.score2 === null ? (
          <Input
            className="input--score"
            id="newScore2"
            title="Add score2"
            handleBlur={handleBlur}
            handleChange={(e) => inputChange("score2", e)}
            value={inputsValue.score2 ?? ""}
            type="text"
          />
        ) : (
          <span className="score">{match.score2}</span>
        )}
        <span className="team">{match.team2}</span>
      </div>
    </>
  );
};

export default Match;
