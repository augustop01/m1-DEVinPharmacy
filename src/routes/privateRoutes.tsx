import { Routes, Route } from "react-router-dom";
import { NewStore } from "../pages/newStore";
import { StoresMap } from "../pages/storesMap";
import { NewProduct } from "../pages/newProduct";
import { ProductList } from "../pages/productList";

function PrivateRoutes() {

  return(
    <Routes>
      <Route path="/" element={<StoresMap/>}/>
      <Route path="/cadastro-farmacia" element={<NewStore/>}/>
      <Route path="/cadastro-medicamento" element={<NewProduct/>}/>
      <Route path="/medicamentos" element={<ProductList/>}/>
    </Routes>
  )
}

export {PrivateRoutes};