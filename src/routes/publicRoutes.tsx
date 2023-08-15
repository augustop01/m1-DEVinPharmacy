import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Map } from "../pages/storesMap";

function PublicRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/locations" element={<Map/>}/>
    </Routes>
  )
}

export {PublicRoutes};