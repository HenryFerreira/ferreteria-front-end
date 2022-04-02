import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ListarClientes from "./pages/ClienteView";
import DefaultPage from "./pages/DefaultPage"
import ListarFacturas from "./pages/FacturaView"
import ListarProductos from "./pages/ProductoView";
import ClienteInsert from "./pages/creation/ClienteInsert";
import FacturaInsert from "./pages/creation/FacturaInsert";
import ProductoInsert from "./pages/creation/ProductoInsert";

function AdminView() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <nav>
            <div>
              <Link to="/" className="link-dark">Inicio</Link>
              <div>
                <Link to="/cliente">Listar Cliente</Link>
                {"  "}
                <Link to="/factura">Listar Facturas</Link>
                {"  "}
                <Link to="/producto">Listar Productos</Link>
              </div>


              <div>
                <Link to="/cliente/insert" className="link-success">Agregar Cliente</Link>
                {"  "}
                <Link to="/factura/insert" className="link-success">Agregar Facturas</Link>
                {"  "}
                <Link to="/producto/insert" className="link-success">Agregar Productos</Link>
              </div>

            </div>
          </nav>
          <br />
          <Routes>
            <Route path="/" element={<DefaultPage />} />
            <Route path="/cliente" element={<ListarClientes />} />
            <Route path="/factura" element={<ListarFacturas />} />
            <Route path="/producto" element={<ListarProductos />} />
            <Route path="/cliente/insert" element={<ClienteInsert />} />
            <Route path="/factura/insert" element={<FacturaInsert />} />
            <Route path="/producto/insert" element={<ProductoInsert />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );


}

export default AdminView;
