import React from "react";
import Head from "../Components/Header/Head";
import Search from "../Components/Header/Search";
import Nav from "../Components/Header/Nav";
import Footer from "../Components/Footer/Footer";
import Category from "./Category";

const ProductPage = () => {
  return (
    <>
      <Head />
      <Search />
      <Nav />
      <Category />
      <Footer />
    </>
  );
};

export default ProductPage;
