import { useState, useContext } from "react";
import { Button, Input } from "../../components";
import { GlobalContext } from "../../context/GlobalContext";

export const AddNewTeam = () => {
  const [inputValue, setIntputValue] = useState("");

  const { setTeams } = useContext(GlobalContext);
  const handleAdd = (e) => {
    setTeams((prevTeams) => [...prevTeams, inputValue]);
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
      />
      <Button type="submit" text="Add" handleClick={handleAdd} />
    </>
  );
};
