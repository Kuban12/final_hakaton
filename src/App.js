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
import FavContex from "./contexts/FavoritesContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <WorkCreateContextProvider>
          <FavContex>
            <AuthContext>
              <Navbar />
              <MainRoutes />
              <Footer />
            </AuthContext>
          </FavContex>
        </WorkCreateContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
