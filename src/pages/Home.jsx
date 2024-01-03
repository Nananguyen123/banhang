import React, { useState } from "react";
import ListProduct from "../components/ListProduct";
import Products from "../components/Products";
import { ProductsByFilter } from "../components/ProductsByFilter";

const Home = () => {
  return (
    <div>
      {/* <ProductsByFilter></ProductsByFilter> */}
      <h1>All</h1>
      <Products></Products>
      <h1>LAPTOP-GAMING</h1>
      <Products query="filters[idCategories][slug]=laptop-gaming"></Products>
      <h1>LAPTOP-XỊN</h1>
      <Products query="filters[idCategories][slug]=laptop-xin"></Products>
      <h1>PHỤ KIỆN</h1>
      <Products query="filters[idCategories][slug]=phu-kien"></Products>
      <h1>PHẦN MỀM MẠNG</h1>
      <Products query="filters[idCategories][slug]=phan-mem-and-mang"></Products>
      <h1>TAI NGHE-LOA</h1>
      <Products query="filters[idCategories][slug]=tai-nghe-loa"></Products>
    </div>
  );
};

export default Home;
