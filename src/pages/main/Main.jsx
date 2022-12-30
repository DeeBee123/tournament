import { Table, Matches } from "../../components";
import { AddNewTeam } from "../../features";
import "./main.scss"

export const Main = () => {
  return (
    <>
      <AddNewTeam />
      <div className="main">
        <Table />
        <Matches />
      </div>
    </>
  );
};

export default Main;
