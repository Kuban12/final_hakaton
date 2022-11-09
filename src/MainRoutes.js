import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import BecomeAWorkerPage from "./pages/BecomeAworkerPage";
import CatalogPage from "./pages/CatalogPage";
import ForgotPassConfirmPage from "./pages/ForgotPassConfirmPage";
import ForgotPassPage from "./pages/ForgotPassPage";
import PaymentPage from "./pages/PaymentPage";
import FavoritesPage from "./components/HomePage/FavoritesPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 2,
    },
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 3,
    },
    {
      link: "/becomeAWorker",
      element: <BecomeAWorkerPage />,
      id: 4,
    },
    {
      link: "/catalog",
      element: <CatalogPage />,
      id: 5,
    },
    {
      link: "/forgotPass",
      element: <ForgotPassPage />,
      id: 6,
    },
    {
      link: "/forgotPassConfirm",
      element: <ForgotPassConfirmPage />,
      id: 7,
    },
    {
      link: "/payment",
      element: <PaymentPage />,
      id: 8,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 9,
    },
    {
      link: "/favorite",
      element: <FavoritesPage />,
      id: 10,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
