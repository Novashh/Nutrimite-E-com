import React from "react";
import "./Home.scss";
import Header from "../Components/Header/Header";
import PopularProduct from "../Components/PopularProduct/PopularProduct";
import WeekSpl from "../Components/WeekSpl/WeekSpl";
import BlogPost from "../Components/BlogPost/BlogPost";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <PopularProduct />
      <WeekSpl />
      <BlogPost />
      <Footer />
    </div>
  );
};

export default Home;
