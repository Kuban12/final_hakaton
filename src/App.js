import React from "react";
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import WorkCreateContextProvider, {
  useWorkCreate,
} from "./contexts/WorkCreateContext";
import { workCreateContext } from "./contexts/WorkCreateContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <WorkCreateContextProvider>
          <AuthContext>
            <MainRoutes />
          </AuthContext>
        </WorkCreateContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
