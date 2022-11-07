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

      // localStorage.setItem("user_state", executor);
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

  // const login = async (username, password) => {
  //   let formData = new FormData()
  //   formData.append('username', username)
  //   formData.append('password', password)

  //   try {
  //    const res = await axios.post(`${API}accounts/login/`, formData, config)

  //    localStorage.setItem('token', JSON.stringify(res.data))
  //    navigate('/')
  //    console.log(res.data)

  //    localStorage.setItem('username', JSON.stringify(username))
  //    setUser(username)
  //    navigate('/login')
  //   } catch (err) {
  //    setError('WRONG USERNAME OR PASSWORD', err)
  //   }
  //  }

  function handleLogout(navigate) {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(false);
    navigate("/");
  }

  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        loading,

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