import React, { useEffect, useState } from "react";
import { useWorkCreate } from "../../contexts/WorkCreateContext";
import HumanCard from "../../components/Category/HumanCard";
import { useSearchParams } from "react-router-dom";
import FilterCategory from "./FilterCategory";
import { Pagination } from "@mui/material";
import "../../styles/category.css";
import PaginationCard from "./Pagination";
import axios from "axios";

const CategoryList = () => {
  const { mainArray, categoryArray, humans, category, getMainArray, API } =
    useWorkCreate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    getMainArray();
  }, []);
  const [page, setPage] = useState(1);
  const itemsOnPage = 6;
  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return humans.slice(begin, end);
  }
  async function counterPage() {
    let res = await axios(API);
    console.log(res.data.results.length / 6);
    console.log(res.data.results);
    return Math.ceil(res.data.results.length / 6);
  }
  counterPage();
  return (
    <>
      <div>
        <div className="section">
          <FilterCategory className="sideBar" />
          <div className="container">
            {mainArray ? (
              category ? (
                mainArray.map((item) => {
                  if (item.category == category) {
                    return <HumanCard key={item.id} item={item} />;
                  }
                })
              ) : (
                mainArray.map((item) => <HumanCard key={item.id} item={item} />)
              )
            ) : (
              <h3>loading...</h3>
            )}
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />{" "}
          <br />
        </div>
        <br />
        <br />
        <PaginationCard />
      </div>
    </>
  );
};

export default CategoryList;
