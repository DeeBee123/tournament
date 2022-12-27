import { createContext} from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [teams, setTeams] = useLocalStorage("teams", []);
  const [matches, setMatches] = useLocalStorage("matches", null);

  return (
    <GlobalContext.Provider value={{ teams, matches, setTeams, setMatches }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
