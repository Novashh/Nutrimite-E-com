import React, { useState } from "react";
import "./PopularProduct.scss";
import PopularImage from "./Popular_img";
import { BsFillEyeFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

const PopularProduct = () => {
  const [PopularProduct, setPopularProduct] = useState(PopularImage);

  // sort products

  const filterSort = (x) => {
    const filterProduct = PopularImage.filter((Elm) => {
      return Elm.type === x;
    });
    setPopularProduct(filterProduct);
  };

  const allProduct = () => {
    return setPopularProduct(PopularImage);
  };

  return (
    <>
      <div className="popular">
        <div className="pop_head">
          <h2>Most Popular Departments</h2>
        </div>
        <div className="container_head">
          <div className="left_box">
            <div className="left_header">
              <h3>Sort By</h3>
            </div>
            <div className="left_cate">
              <ul className="cate_flex">
                <li className="sort">
                  <h5 onClick={() => filterSort("popular")}>popular</h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => filterSort("antioxidant")}>antioxidant</h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => filterSort("ayurvedic")}>ayurvedic</h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => filterSort("digestive health")}>
                    digestive health
                  </h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => filterSort("general health")}>
                    general health
                  </h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => filterSort("herbal")}>
                    herbal speciality,supplement
                  </h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => filterSort("immune health")}>
                    immune health
                  </h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => filterSort("men health")}>men health</h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => filterSort("women health")}>
                    women health
                  </h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => filterSort("organic")}>organic</h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => filterSort("personal care")}>
                    personal care
                  </h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => filterSort("vitamin & minerals")}>
                    vitamin & minerals
                  </h5>
                </li>
              </ul>
            </div>
          </div>

          <div className="right_box">
            <div className="header ">
              <div className="heading">
                <h2 onClick={() => allProduct()}>All Products</h2>
              </div>
            </div>
            <div className="products">
              <div className="container">
                {PopularProduct.map((Elm) => {
                  return (
                    <>
                      <div className="box">
                        <div className="img_box">
                          <img src={Elm.images} alt="" />
                          <div className="icon">
                            <div className="icon_box">
                              <BsFillEyeFill />
                            </div>
                            <div className="icon_box">
                              <AiFillHeart />
                            </div>
                          </div>
                        </div>
                        <div className="info">
                          <h3>{Elm.Name}</h3>
                          <p>&#8377;{Elm.price}</p>
                          <button className="btn">Add To Cart</button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularProduct;
