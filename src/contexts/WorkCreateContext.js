import React, { useState, useContext, useReducer } from "react";
import axios from "axios";

export const workCreateContext = React.createContext();
export const useWorkCreate = () => useContext(workCreateContext);

const API = "http://34.125.225.234/api/v1";

const WorkCreateContextProvider = ({ children }) => {
  const [error1, setError1] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleSaveWork(formData, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/uslugi/`, formData);
      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log("ERROR", err);
      // console.log("ERROR DATA", err.response.data);
      setError1(Object.values(err.response.data).flat(2));
    } finally {
      setLoading(false);
    }
  }

  return (
    <workCreateContext.Provider
      value={{
        handleSaveWork,

        error1,
        loading,
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
