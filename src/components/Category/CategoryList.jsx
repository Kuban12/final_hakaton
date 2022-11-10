import React, { useEffect, useState } from "react";
import { useWorkCreate } from "../../contexts/WorkCreateContext";
import HumanCard from "../../components/Category/HumanCard";
import { useSearchParams } from "react-router-dom";
import FilterCategory from "./FilterCategory";
import { Pagination } from "@mui/material";
import "../../styles/category.css";
import PaginationCard from "./Pagination";
import axios from "axios";
import TextField from "@mui/material/TextField";
const CategoryList = () => {
  const {
    mainArray,
    categoryArray,
    humans,
    category,
    getMainArray,
    API,
    API_HUMANS,
    counterPage,
    setMainArray,
  } = useWorkCreate();
  useEffect(() => {
    getMainArray();
  }, []);
  let [counterPages, setCounterPages] = useState(1);
  let items = 6;
  let count = Math.ceil(mainArray.length / items);
  function handlePage(e, p) {
    setCounterPages(p);
  }
  function currentData() {
    const begin = (counterPages - 1) * items;
    const end = begin + items;
    return mainArray.slice(begin, end);
  }
  currentData();
  return (
    <>
      <div>
        <div className="section">
          <br />
          <FilterCategory className="sideBar" />
          <div className="container">
            {mainArray ? (
              category ? (
                currentData().map((item) => {
                  if (item.category == category) {
                    return <HumanCard key={item.id} item={item} />;
                  }
                })
              ) : (
                currentData().map((item) => (
                  <HumanCard key={item.id} item={item} />
                ))
              )
            ) : (
              <h3>loading...</h3>
            )}
          </div>
        </div>
        <br />
        <br />
        <Pagination
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1%",
          }}
          count={count}
          page={counterPages}
          onChange={handlePage}
        />
      </div>
    </>
  );
};

export default CategoryList;
