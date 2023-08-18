import { AppProvider } from "./context";
import { PublicRoutes } from "./routes/publicRoutes";
import {BrowserRouter} from "react-router-dom";
import { GlobalStyle } from "./style";
import { Header } from "./components/header";

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <AppProvider>
        <Header/>
        <PublicRoutes/>
      </AppProvider>
    </BrowserRouter>
    </>
  )
}

export default App
