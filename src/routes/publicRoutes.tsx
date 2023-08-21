import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { NewStore } from "../pages/newStore";
import { Map } from "../pages/storesMap";
import { NewProduct } from "../pages/newProduct";

function PublicRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/locations" element={<Map/>}/>
      <Route path="/cadastro-farmacia" element={<NewStore/>}/>
      <Route path="/cadastro-medicamento" element={<NewProduct/>}/>
    </Routes>
  )
}

export {PublicRoutes};