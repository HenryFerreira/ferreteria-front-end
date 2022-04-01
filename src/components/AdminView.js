import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ListarClientes from "./pages/ClienteView";
import DefaultPage from "./pages/DefaultPage"
import ListarFacturas from "./pages/FacturaView"

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
              {"  "}
              <Link to="/factura">Listar Cliente</Link>
            </div>
          </nav>
          <br/>
          <Routes>
            <Route path="/" element={<DefaultPage />} />
            <Route path="/cliente" element={<ListarClientes />} />
            <Route path="/factura" element={<ListarFacturas />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );


}

export default AdminView;
