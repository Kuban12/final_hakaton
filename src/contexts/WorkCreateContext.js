import React, { useState, useContext } from "react";
import axios from "axios";

export const workCreateContext = React.createContext();
export const useWorkCreate = () => useContext(workCreateContext);

const API = "";

const workCreateContextProvider = ({ children }) => {
  return (
    <workCreateContext.Provider value={{}}>
      {children}
    </workCreateContext.Provider>
  );
};

export default workCreateContextProvider;
