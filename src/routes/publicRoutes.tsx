import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { NewStore } from "../pages/newStore";
import { StoresMap } from "../pages/storesMap";

function PublicRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/mapa-lojas" element={<StoresMap/>}/>
      <Route path="/cadastro-farmacia" element={<NewStore/>}/>
    </Routes>
  )
}

export {PublicRoutes};