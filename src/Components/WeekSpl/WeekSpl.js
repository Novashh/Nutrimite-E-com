import React from "react";
import "./WeekSpl.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { BsFillEyeFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

const WeekSpl = () => {
  return (
    <>
      <div className="week_spl">
        <div className="week_head">
          <div className="heading">
            <h2>Week Special</h2>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          freeMode={true}
          pagination={false}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="slide">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p1.webp" alt="" />
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
                  <h3>product 1</h3>
                  <p>
                    <span>
                      <del> &#8377;700</del>
                    </span>
                    &#8377;550
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p2.webp" alt="" />
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
                  <h3>product 2</h3>
                  <p>
                    <span>
                      <del> &#8377;800</del>
                    </span>
                    &#8377;650
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p3.webp" alt="" />
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
                  <h3>product 3</h3>
                  <p>
                    {" "}
                    <span>
                      <del> &#8377;750</del>
                    </span>
                    &#8377;520
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p2.webp" alt="" />
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
                  <h3>product 4</h3>
                  <p>
                    {" "}
                    <span>
                      <del> &#8377;800</del>
                    </span>
                    &#8377;600
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p1.webp" alt="" />
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
                  <h3>product 5</h3>
                  <p>
                    {" "}
                    <span>
                      <del> &#8377;700</del>
                    </span>
                    &#8377;500
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p3.webp" alt="" />
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
                  <h3>product 6</h3>
                  <p>
                    {" "}
                    <span>
                      <del> &#8377;600</del>
                    </span>
                    &#8377;500
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p2.webp" alt="" />
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
                  <h3>product 1</h3>
                  <p>
                    <span>
                      <ins>&#8377;800</ins>
                    </span>
                    &#8377;600
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p1.webp" alt="" />
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
                  <h3>product 1</h3>
                  <p>
                    <span>
                      <ins>&#8377;700</ins>
                    </span>{" "}
                    &#8377;600
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p3.webp" alt="" />
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
                  <h3>product 1</h3>
                  <p>
                    <span>
                      <ins>&#8377;650</ins>
                    </span>
                    &#8377;400
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default WeekSpl;
