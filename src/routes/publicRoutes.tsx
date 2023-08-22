import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { NewStore } from "../pages/newStore";
import { StoresMap } from "../pages/storesMap";
import { NewProduct } from "../pages/newProduct";
import { ProductList } from "../pages/productList";

function PublicRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/mapa-lojas" element={<StoresMap/>}/>
      <Route path="/cadastro-farmacia" element={<NewStore/>}/>
      <Route path="/cadastro-medicamento" element={<NewProduct/>}/>
      <Route path="/medicamentos" element={<ProductList/>}/>
    </Routes>
  )
}

export {PublicRoutes};