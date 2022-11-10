import React, { useState, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { Api } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
export const workCreateContext = React.createContext();
export const useWorkCreate = () => useContext(workCreateContext);

const INIT_STATE = {
  pages: 0,
  humans: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_HUMANS":
      return { ...state, humans: action.payload.results };
    case "GET_CATEGORIES":
      return {
        ...state,
        categoryArray: action.payload.results,
      };

    default:
      return state;
  }
}
const API_HUMANS = "http://34.67.85.209/api/v1/service/";
async function func() {
  let res = await axios(API_HUMANS);
  console.log(res);
}
func();
const API = "http://34.67.85.209/api/v1/";
const WorkCreateContextProvider = ({ children }) => {
  // let [counterPages, setCounterPages] = useState(0);
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const location = useLocation();
  let [mainArray, setMainArray] = useState([]);

  const [error1, setError1] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSaveWork(formData, navigate) {
    try {
      const token = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}service/`, formData, config);
      navigate("/login");
    } catch (err) {
      console.log("ERROR", err);
      setError1(Object.values(err.response.data).flat(2));
    } finally {
      setLoading(false);
    }
  }
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(value, "category");
    }

    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  async function getCategories() {
    try {
      const token = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}categories/`, config);
      console.log(res.data);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getMainArray() {
    let res = await axios(`${API_HUMANS}`);
    setMainArray(res.data);
  }
  // ==================================
  // async function counterPage() {
  //   let res = await axios(API_HUMANS);
  //   setCounterPages(Math.ceil(res.data.length / 6));
  // }
  let [category, setCategory] = useState(null);
  useEffect(() => {}, [category]);
  return (
    <workCreateContext.Provider
      value={{
        API_HUMANS,
        API,
        // counterPages,
        handleSaveWork,
        getCategories,
        fetchByParams,
        setCategory,
        getMainArray,
        // counterPage,
        setMainArray,
        mainArray,
        category,
        humans: state.humans,
        pages: state.pages,
        error1,
        loading,
        categoryArray: state.categoryArray,
      }}
    >
      {children}
    </workCreateContext.Provider>
  );
};

export default WorkCreateContextProvider;
