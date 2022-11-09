import React from "react";
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import WorkCreateContextProvider, {
  useWorkCreate,
} from "./contexts/WorkCreateContext";
import { workCreateContext } from "./contexts/WorkCreateContext";
import Footer from "./components/HomePage/Footer";
import Navbar from "./components/HomePage/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <WorkCreateContextProvider>
          <AuthContext>
            <Navbar />
            <MainRoutes />
            <Footer />
          </AuthContext>
        </WorkCreateContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
