import React from "react";
import "./BlogPost.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { BiCalendar, BiSolidUser, BiSolidMessageDetail } from "react-icons/bi";
import { FaComments } from "react-icons/fa";

const BlogPost = () => {
  return (
    <>
      <div className="blog_post">
        <div className="container">
          <div className="heading">
            <h1>Blog Latest Posts</h1>
          </div>

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
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="post">
                <div className="content_box">
                  <div className="box_heading">
                    <h3>uncategorized</h3>
                    <h1>
                      Traditional practice made by indian woman for a healthy
                      baby
                    </h1>
                    <div className="content">
                      <p>india is country of beliefs</p>
                    </div>

                    <div className="info">
                      <div className="icon_info">
                        <BiCalendar />
                        <p>November,9,2022</p>
                      </div>
                      <div className="icon_info">
                        <BiSolidUser />
                        <p>By Nuturemite</p>
                      </div>
                      <div className="icon_info">
                        <FaComments />
                        <p>Comments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="post">
                <div className="content_box">
                  <div className="box_heading">
                    <h3>uncategorized</h3>
                    <h1>meltdown the greatest flaw</h1>
                    <div className="content">
                      <p>
                        in 2018 published research announced that nearly every
                        computer chip which was manufactured in the past 20
                        years...
                      </p>
                    </div>

                    <div className="info">
                      <div className="icon_info">
                        <BiCalendar />
                        <p>December,21,2022</p>
                      </div>
                      <div className="icon_info">
                        <BiSolidUser />
                        <p>By Nuturemite</p>
                      </div>
                      <div className="icon_info">
                        <FaComments />
                        <p>Comments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="post">
                <div className="content_box">
                  <div className="box_heading">
                    <h3>uncategorized</h3>
                    <h1>Suffering of innocent infant because of child diet</h1>
                    <div className="content">
                      <p>
                        {" "}
                        Suffering of innocent infant because of child diet.tery
                        once says that...
                      </p>
                    </div>

                    <div className="info">
                      <div className="icon_info">
                        <BiCalendar />
                        <p>October,15,2022</p>
                      </div>
                      <div className="icon_info">
                        <BiSolidUser />
                        <p>By Nuturemite</p>
                      </div>
                      <div className="icon_info">
                        <FaComments />
                        <p>Comments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="subscribe">
            <div className="news_letter">
              <div className="letter_icon">
                <BiSolidMessageDetail />
              </div>
              <div className="sub">
                <h3>subscribe to our newsletter</h3>
                <p>get the all the information to event, sales and offers</p>
              </div>
            </div>

            <div className="sub-input">
              <input
                type="text"
                placeholder="Your Email Address"
                className="text"
              />
              <button className="btn">Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
