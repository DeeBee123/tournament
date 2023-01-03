import { Table, Matches } from "../../components";
import { AddNewTeam } from "../../features";
import "./main.scss"

export const Main = () => {
  return (
    <main>
      <AddNewTeam />
      <div className="container">
        <Table />
        <Matches />
      </div>
    </main>
  );
};

export default Main;
