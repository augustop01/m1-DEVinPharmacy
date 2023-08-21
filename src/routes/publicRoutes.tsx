import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { NewStore } from "../pages/newStore";
import { NewProduct } from "../pages/newProduct";
import { StoresMap } from "../pages/storesMap";

function PublicRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/mapa-lojas" element={<StoresMap/>}/>
      <Route path="/cadastro-farmacia" element={<NewStore/>}/>
      <Route path="/cadastro-medicamento" element={<NewProduct/>}/>
    </Routes>
  )
}

export {PublicRoutes};