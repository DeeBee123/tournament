import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Match from "./Match";
import "./matches.scss";

export const Matches = ({ inputChange, inputValue }) => {
  const { matches, setMatches } = useContext(GlobalContext);

  const handleUpdate = (vals) => {
    let index = matches.findIndex((match) => match.id === vals.id);
    const copyMatches = [...matches];
    copyMatches[index] = { ...copyMatches[index], ...vals };
    setMatches(copyMatches);
  };
  return (
    <section className="matches">
      {matches.map((match) => (
        <Match
          key={match.id}
          match={match}
          inputChange={inputChange}
          inputValue={inputValue}
          handleUpdate={handleUpdate}
        />
      ))}
    </section>
  );
};


