import React from "react";
import "./Header.scss";
import { AiFillPhone } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left_row">
            <AiFillPhone className="icon" />
            <label> Contact Us : 8919993233</label>
            <FcAbout className="icon" />
            <Link to="/about" className="link">
              About Us
            </Link>
          </div>
          <div className="right_row">
            <label>Theme FAQ's</label>
            <label>Need Help</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
