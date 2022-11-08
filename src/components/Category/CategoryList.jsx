import React, { useEffect, useState } from "react";
import { useWorkCreate } from "../../contexts/WorkCreateContext";
import HumanCard from "../../components/Category/HumanCard";
import { useSearchParams } from "react-router-dom";
import FilterCategory from "./FilterCategory";
import { Pagination } from "@mui/material";
import "../../styles/category.css";

const CategoryList = () => {
  const {
    category,
    getCategories,
    categoryArray,
    fetchByParams,
    getHumans,
    humans,
  } = useWorkCreate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  // useEffect(() => {
  //   categoryArray(filterCategory);
  // }, [filterCategory]);
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getHumans();
  }, [searchParams]);
  //pagination

  const [page, setPage] = useState(1);
  const itemsOnPage = 6;

  const count = Math.ceil(categoryArray.length / itemsOnPage);
  // const { fetchByParams, categoryArray } = useWorkCreate();
  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return humans.slice(begin, end);
  }

  return (
    <>
      <div>
        <div className="section">
          <FilterCategory />
          <div className="container">
            <FilterCategory />
            {humans ? (
              currentData().map((item) => (
                <HumanCard key={item.id} item={item.category} />
              ))
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
        <Pagination count={count} page={page} onChange={handlePage} />
      </div>
    </>
  );
};

export default CategoryList;
