import React from "react";
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import WorkCreateContext from "./contexts/WorkCreateContext";

function App() {
  return (
    <>
      <WorkCreateContext>
        <AuthContext>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </AuthContext>
      </WorkCreateContext>
    </>
  );
}

export default App;
