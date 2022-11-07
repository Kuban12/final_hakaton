import React, { useEffect, useState } from "react";
import { useWorkCreate } from "../../contexts/workCreateContext";
import HumanCard from "../../components/Category/HumanCard";
import { useSearchParams } from "react-router-dom";
import FilterCategory from "./FilterCategory";
import { Pagination } from "@mui/material";

const CategoryList = () => {
  const { category, getCategories } = useWorkCreate();
  console.log(category);
  useEffect(() => {
    getCategories();
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getCategories();
  }, [searchParams]);
  //pagination

  const [page, setPage] = useState(1);
  const itemsOnPage = 6;

  const count = Math.ceil(category.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return category.slice(begin, end);
  }
  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />{" "}
        <br /> <br />
        <FilterCategory />
        {category ? (
          currentData().map((item) => <HumanCard key={item.id} item={item} />)
        ) : (
          <h3>loading...</h3>
        )}
        <br />
        <br />
        <Pagination count={count} page={page} onChange={handlePage} />
      </div>
    </>
  );
};

export default CategoryList;
