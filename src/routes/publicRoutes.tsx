import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";

function PublicRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
  )
}

export {PublicRoutes};