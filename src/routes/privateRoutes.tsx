import { Routes, Route } from "react-router-dom";
import { NewStore } from "../pages/newStore";
import { StoresMap } from "../pages/storesMap";
import { NewProduct } from "../pages/newProduct";
import { ProductList } from "../pages/productList";

function PrivateRoutes() {

  return(
    <Routes>
      <Route path="/" element={<StoresMap/>}/>
      {/* <Route path="/mapa-lojas" element={<StoresMap/>}/> */}
      <Route path="/cadastro-farmacia" element={<NewStore/>}/>
      <Route path="/cadastro-medicamento" element={<NewProduct/>}/>
      <Route path="/medicamentos" element={<ProductList/>}/>
      <Route path="*" element={
      <>
      <h3>404 - Página não existe</h3>
      <a href="/"><h3>Retornar</h3></a>
      </>
      }/>
    </Routes>
  )
}

export {PrivateRoutes};