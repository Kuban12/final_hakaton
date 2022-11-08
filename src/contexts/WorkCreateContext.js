import React, { useState, useContext, useReducer } from "react";
import axios from "axios";
// import { Location, Navigate } from "../components/Category/FilterCategory";
import { Api } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

export const workCreateContext = React.createContext();
export const useWorkCreate = () => useContext(workCreateContext);

const INIT_STATE = {
  categoryArray: [],
  pages: 0,
  humans: [],
};

function reducer(state = INIT_STATE, action) {
  console.log(action);
  switch (action.type) {
    case "GET_HUMANS":
      return { ...state, humans: action.payload.results };
    case "GET_CATEGORIES":
      return {
        ...state,
        categoryArray: action.payload.results,
        // pages: Math.ceil(action.payload.count / 6),
      };

    default:
      return state;
  }
}
const API_HUMANS = "http://34.67.85.209/api/v1/service/";
const API = "http://34.67.85.209/api/v1/";
const WorkCreateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(window.location.pathname);
  // let [categoryArray, setCategoryArray] = useState([]);
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
          // ContentType: "multipart/form-data",
        },
      };
      const res = await axios.post(`${API}service/`, formData, config);
      console.log(formData);
      // console.log(res.data);
      navigate("/login");
    } catch (err) {
      console.log("ERROR", err);
      // console.log("ERROR DATA", err.response.data);
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
      console.log(value, "VLAUE", query, "QUERT");
      search.set(value, "category");
    }

    const url = `${location.pathname}?${search.toString()}`;
    console.log(search.toString());
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
      // setCategoryArray(res.data.results);
    } catch (err) {
      console.log(err);
    }
  }
  async function getHumans() {
    let res = await axios(`${API_HUMANS}${window.location.search}`);
    dispatch({
      type: "GET_HUMANS",
      payload: res.data,
    });
  }

  console.log(state.categoryArray);

  // async function FilterCategory() {
  //   let array = await axios(`${API}/service/`).data.results;
  //   console.log(array);
  // }
  // FilterCategory();

  // async function getOneHuman() {
  //   try {
  //     const token = JSON.parse(localStorage.getItem("tokens"));
  //     const Authorization = `Bearer ${token.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios(`${API}/categories/`, config);
  //     getCategories();
  //     dispatch({
  //       type: "GET_ONE_HUMAN",
  //       payload: res.data.results,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // function filterCategory(filterArray) {
  //   let arr = [];
  //   categoryArray.map((item) => {
  //     if (item.category == filterArray) {
  //       arr.push(item);
  //     }
  //   });
  //   console.log(arr);
  //   return arr;
  // }
  return (
    <workCreateContext.Provider
      value={{
        handleSaveWork,
        getCategories,
        getHumans,
        humans: state.humans,
        // filterCategory,
        // getOneHuman,
        // category: state.category,
        pages: state.pages,
        fetchByParams,
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

///////////////////////////////////////////////////////////////////////////////////////////

// const INIT_STATE = {
//   products: [],
//   pages: 0,
//   categories: [],
//   oneProduct: null,
// };

// function reducer(state = INIT_STATE, action) {
//   switch (action.type) {
//     case "GET_PRODUCTS":
//       return {
//         ...state,
//         products: action.payload.results,
//         pages: Math.ceil(action.payload.count / 5),
//       };
//     case "GET_CATEGORIES":
//       return {
//         ...state,
//         categories: action.payload,
//       };
//     case "GET_ONE_PRODUCT":
//       return { ...state, oneProduct: action.payload };
//     default:
//       return state;
//   }
// }

// const ProductsContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);

//   async function getProducts() {
//     try {
//       const token = JSON.parse(localStorage.getItem("tokens"));
//       const Authorization = `Bearer ${token.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       const res = await axios(
//         `${API}/products/${window.location.search}`,
//         config
//       );
//       dispatch({
//         type: "GET_PRODUCTS",
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async function createProduct(newProduct, navigate) {
//     try {
//       const token = JSON.parse(localStorage.getItem("tokens"));
//       const Authorization = `Bearer ${token.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       const res = axios.post(`${API}/products/`, newProduct, config);
//       console.log(res);
//       navigate("/products");
//       getProducts();
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async function getCategories() {
//     try {
//       const token = JSON.parse(localStorage.getItem("tokens"));
//       const Authorization = `Bearer ${token.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       const res = await axios(`${API}/category/list`, config);
//       dispatch({
//         type: "GET_CATEGORIES",
//         payload: res.data.results,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async function deleteProduct(id) {
//     try {
//       const token = JSON.parse(localStorage.getItem("tokens"));
//       const Authorization = `Bearer ${token.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       await axios.delete(`${API}/products/${id}/`, config);
//       getProducts();
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async function toggleLike(id) {
//     try {
//       const token = JSON.parse(localStorage.getItem("tokens"));
//       const Authorization = `Bearer ${token.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       const res = await axios(`${API}/products/${id}/toggle_like`, config);
//       getProducts();
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <productContext.Provider
//       value={{
//         products: state.products,
//         pages: state.pages,
//         categories: state.categories,
//         oneProduct: state.oneProduct,

//         getProducts,
//         createProduct,
//         getCategories,
//         deleteProduct,
//         toggleLike,
//       }}
//     >
//       {children}
//     </productContext.Provider>
//   );
// };
