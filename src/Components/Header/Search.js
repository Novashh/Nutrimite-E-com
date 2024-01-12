import React from "react";
import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";

const Search = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      <section className="search">
        <div className="container">
          <div className="logo ">
            <img
              src="https://nuturemite.info/wp-content/uploads/2022/10/nuturmite_logo_tranparent.png"
              alt=""
            />
          </div>

          <div className="search_box">
            <BsSearch className="icon" />
            <input type="text" placeholder="Search and hit enter..." />
            <span>Categories </span>
          </div>

          {isAuthenticated ? (
            <div className="user">
              {/* When Login then Logout button will shows */}
              <div className="logout">
                <CiLogout className="icon" />
                <button
                  className="btn"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="user">
              {/* When do not Login then only Login button will shows */}
              <div className="login">
                <FiLogIn className="icon" />
                <button className="btn" onClick={() => loginWithRedirect()}>
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Search;
