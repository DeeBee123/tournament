import Main from "./pages/main/Main";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Main />
    </GlobalContextProvider>
  );
}

export default App;
