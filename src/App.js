import React from "react";
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import workCreateContext from "./contexts/workCreateContext";
import WorkCreateContextProvider from "./contexts/workCreateContext";

function App() {
  return (
    <>
      <WorkCreateContextProvider>
        <AuthContext>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </AuthContext>
      </WorkCreateContextProvider>
    </>
  );
}

export default App;
