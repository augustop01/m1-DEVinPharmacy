import { AppProvider } from "./context";
import { PublicRoutes } from "./routes/publicRoutes";
import {BrowserRouter} from "react-router-dom";
import { GlobalStyle } from "./style";

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <AppProvider>
        <PublicRoutes/>
      </AppProvider>
    </BrowserRouter>
    </>
  )
}

export default App
