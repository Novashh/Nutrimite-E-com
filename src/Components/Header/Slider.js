import React from "react";
import "./Header.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiMoneyDollarCircleFill, RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={2}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider">
            <div className="container">
              <div className="content_box">
                <div className="new_arrival">
                  <h3>Exclusive product new arrival</h3>
                </div>
                <div className="heading">
                  <h1>Nuturemite coffee</h1>
                  <h2>Special blend</h2>
                </div>
                <div className="offer">
                  <div className="d_flex">
                    <sup>Fresh!</sup>
                    <h2>Break fast product on sale</h2>
                  </div>
                  <h1>
                    up to <sub>30%</sub>
                  </h1>
                </div>
                <div className="btn">
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            <div className="container">
              <div className="content_box">
                <div className="new_arrival">
                  <h3>Exclusive product new arrival</h3>
                </div>
                <div className="heading sec_head">
                  <h1>Fit low carb</h1>
                  <h2>Candy bar</h2>
                </div>
                <div className="offer sec_offer">
                  <div className="d_flex">
                    <sup>Fresh!</sup>
                    <h2>Break fast product on sale</h2>
                  </div>
                  <h1>
                    up to <sub>40%</sub>
                  </h1>
                </div>
                <div className="btn sec_btn">
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            <div className="container">
              <div className="content_box">
                <div className="new_arrival">
                  <h3>Exclusive product new arrival</h3>
                </div>
                <div className="heading third_head">
                  <h1>Organic coffee</h1>
                  <h2>Special blend</h2>
                </div>
                <div className="offer third_offer">
                  <div className="d_flex">
                    <sup>Fresh!</sup>
                    <h2>Break fast product on sale</h2>
                  </div>
                  <h1>
                    up to <sub>50%</sub>
                  </h1>
                </div>
                <div className="btn third_btn">
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="section">
        <div className="about">
          <div className="about_sec">
            <LiaShippingFastSolid className="icon" />
            <div className="about_info">
              <h4>free shipping</h4>
              <p>free shipping and gift vouchers all over order &#8377;2000</p>
            </div>
          </div>

          <div className="about_sec">
            <RiMoneyDollarCircleFill className="icon" />
            <div className="about_info">
              <h4>money back guarantee</h4>
              <p>free shipping and gift vouchers all over order &#8377;2000</p>
            </div>
          </div>

          <div className="about_sec">
            <MdOutlineSupportAgent className="icon" />
            <div className="about_info">
              <h4>online support</h4>
              <p>free shipping and gift vouchers all over order &#8377;2000</p>
            </div>
          </div>

          <div className="about_sec">
            <RiSecurePaymentFill className="icon" />
            <div className="about_info">
              <h4>secure payment</h4>
              <p>free shipping and gift vouchers all over order &#8377;2000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
