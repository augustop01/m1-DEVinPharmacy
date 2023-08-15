import { AppProvider } from "./context";
import { PublicRoutes } from "./routes/publicRoutes";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <PublicRoutes/>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
