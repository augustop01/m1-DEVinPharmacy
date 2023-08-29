import { AppProvider } from "./context";
import {BrowserRouter} from "react-router-dom";
import * as Styled from "./style";
import { Header } from "./components/Header";
import { useTheme } from "./hooks/useTheme";
import { RoutesApp } from "./routes";
import 'leaflet/dist/leaflet.css';

function App() {
const {setTheme} = useTheme();

  return (
      <>
    <BrowserRouter>
      <Styled.GlobalStyle/>
      <AppProvider>
        <Header/>
        <Styled.ThemeButton onClick={setTheme}/>
        <RoutesApp/>
      </AppProvider>
    </BrowserRouter>
    </>
  )
}

export default App
