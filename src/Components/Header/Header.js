import React from "react";
import Head from "./Head";
import Search from "./Search";
import Nav from "./Nav";
import Slider from "./Slider";

const Header = () => {
  return (
    <>
      <Head />
      <Search />
      <Nav />
      <Slider />
    </>
  );
};

export default Header;
