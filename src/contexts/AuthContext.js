import React, { useState, useContext } from "react";
import axios from "axios";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "http://34.67.85.209/api/v1";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleRegister(formData, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/accounts/register/`, formData);
      console.log(res);
      alert("Мы отправили уведомление на почту. Подтвердите аккунт");
      navigate("/login");
    } catch (err) {
      console.log("ERROR", err);
      console.log("ERROR DATA", err.response.data);
      setError(Object.values(err.response.data).flat(2));
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData, email, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/accounts/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/");
      console.log(res);
    } catch (err) {
      console.log(err.response.data.detail);
      setError([err.response.data.detail]);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(false);
  }

  async function forgotPassword(formData, navigate) {
    try {
      console.log("jessica");
      const res = await axios.post(`${API}/accounts/forgot/`, formData);
      navigate("/forgotPassConfirm");

      console.log(res);
    } catch (err) {
      console.log(err.response.data.detail);
      setError([err.response.data.detail]);
    } finally {
      setLoading(false);
    }
  }

  async function forgotPassConfirm(formData, navigate) {
    try {
      const res = await axios.post(`${API}/accounts/restore/`, formData);
      navigate("/login");
      console.log(res);
    } catch (err) {
      console.log(err.response.data.detail);
      setError([err.response.data.detail]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        loading,
        forgotPassConfirm,
        forgotPassword,
        setError,
        handleRegister,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
