import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Pagination from "../pagination/Pagination";
import Match from "./Match";
import "./matches.scss";

export const Matches = ({ inputChange, inputValue }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [matchesPerPage] = useState(10);
  const { matches, setMatches } = useContext(GlobalContext);

  const indexOfLastRecord = currentPage * matchesPerPage;
  const indexOfFirstRecord = indexOfLastRecord - matchesPerPage;
  const currentMatches = matches.slice(indexOfFirstRecord, indexOfLastRecord);
  const pagenumbers = Math.ceil(matches.length / matchesPerPage);
  const handleUpdate = (vals) => {
    let index = matches.findIndex((match) => match.id === vals.id);
    const copyMatches = [...matches];
    copyMatches[index] = { ...copyMatches[index], ...vals };
    setMatches(copyMatches);
  };
  return (
    <section className="matches">
      {currentMatches.map((match) => (
        <Match
          key={match.id}
          match={match}
          inputChange={inputChange}
          inputValue={inputValue}
          handleUpdate={handleUpdate}
        />
      ))}
      <Pagination
        nPages={pagenumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};
