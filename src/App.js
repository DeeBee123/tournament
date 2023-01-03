import Main from "./pages/main/Main";
import { GlobalContextProvider } from "./context/GlobalContext";
import "./app.scss"

function App() {
  return (
    <GlobalContextProvider>
      <Main />
    </GlobalContextProvider>
  );
}

export default App;
