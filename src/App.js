import React from "react";
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthContext>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </AuthContext>
    </>
  );
}

export default App;
