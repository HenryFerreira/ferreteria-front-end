import React from "react";

import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link 
} from "react-router-dom";

import DefaultPage from "./pages/DefaultPage"
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
            </div>
          </nav>
          <br/>
          <Routes>
            <Route path="/" element={<DefaultPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default UserView;
