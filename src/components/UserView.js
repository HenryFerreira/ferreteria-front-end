import React from "react";

import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link 
} from "react-router-dom";

import DefaultPage from "./pages/DefaultPage"
import ListarProductos from "./pages/ProductoView";

function UserView() {
  return (
    <div>
      Hola, user
      <div>
        <BrowserRouter>
          <nav>
            <div>
              <Link to="/">Inicio</Link>
              {"  "}
              <Link to="/producto">Comprar</Link>
            </div>
          </nav>
          <br/>
          <Routes>
            <Route path="/" element={<DefaultPage />} />
            <Route path="/producto" element={<ListarProductos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default UserView;
