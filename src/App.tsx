import { AppProvider } from "./context";
import {BrowserRouter} from "react-router-dom";
import { GlobalStyle } from "./style";
import { Header } from "./components/Header";
import 'leaflet/dist/leaflet.css';
import { RoutesApp } from "./routes";

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <AppProvider>
        <Header/>
        <RoutesApp/>
      </AppProvider>
    </BrowserRouter>
    </>
  )
}

export default App
