import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ListarClientes from "./ClienteView";
import DefaultPage from "./DefaultPage"

function AdminView() {
  return (
    <div>
      Hola, admin
      <div>
        <BrowserRouter>
          <nav>
            <div>
              <Link to="/">Inicio</Link>
              {"  "}
              <Link to="/cliente">Listar Cliente</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<DefaultPage />} />
            <Route path="/cliente" element={<ListarClientes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );


}

export default AdminView;
