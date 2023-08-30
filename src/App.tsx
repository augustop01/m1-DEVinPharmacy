import { AppProvider } from "./context";
import {BrowserRouter} from "react-router-dom";
import * as Styled from "./style";
import { Header } from "./components/Header";
import { RoutesApp } from "./routes";
import 'leaflet/dist/leaflet.css';

function App() {

  return (
      <>
    <BrowserRouter>
      <Styled.GlobalStyle/>
      <AppProvider>
        <Header/>
        <RoutesApp/>
      </AppProvider>
    </BrowserRouter>
    </>
  )
}

export default App
