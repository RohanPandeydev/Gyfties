import React, { useContext, useState, useEffect } from "react";
import StorageHelper from "../../helper/StorageHelper";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import config from "../../../config";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const token = StorageHelper.getToken();
  const nav = useNavigate();
  const [text, setText] = useState("");
  const { setToken, setUserData, userData } = useContext(UserContext);
  const handleLogout = () => {
    StorageHelper.removeStorageData();
    localStorage.clear();
    setUserData({});
    setToken("");
    toast.success("Logout Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Flip,
    });

    // window.location.assign("/login");
    return true
    // return setTimeout(() => {
    //   window.location.assign("/");
    //   return;
    // }, 700);
  };

  const searchValue = (e) => {
    e.preventDefault();
    console.log("text");
    nav("/wishlist/search/");
    return;
  };
  return (
    <>

      <header className="header-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="logo-wrap">
                  <NavLink className="navbar-brand" to="/">
                    <img
                      className="img-fluid"
                      src="/assets/images/logo.png"
                      alt=""
                    />
                  </NavLink>
                </div>

                <div className="collapse navbar-collapse justify-content-center"
                  id="navbarNav"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#FF7BAC" : "",
                        })}
                        className="nav-link"
                        to={"/user/wishlist"}
                      >
                        Wishlist
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#FF7BAC" : "",
                        })}
                        className="nav-link"
                        to={"/"}
                      >
                        Guides
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#FF7BAC" : "",
                        })}
                        className="nav-link"
                        to={"/help"}
                      >
                        Help
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="my-ac-wrap">
                  <ul>
                    <li className="hed-search-wrap">
                      <div className="hed-search">
                        {/* <form>
                          <input
                            type="search"
                            placeholder="Search:"
                            onChange={(e) => setText(e?.target?.value)}
                          />
                          <button
                            className="search-btn"
                            type="submit"
                            onClick={searchValue}
                          >
                            <i className="las la-search" />
                          </button>
                        </form> */}
                      </div>
                    </li>
                    {token && (
                      <>
                        <li>
                          <div className="head-user">
                            <div className="dropdown">
                              <button
                                className="dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="user-icon">
                                  <img
                                    className="img-profile"

                                    src={userData && !!userData?.profile_img && config.apiUrl + "/" + userData?.profile_img ||
                                      "/assets/images/auth-img1.jpg"}
                                    alt
                                  />
                                </span>
                                <div className="profile-name">
                                  <h4>
                                    {userData?.first_name +
                                      " " +
                                      userData?.last_name}
                                  </h4>
                                </div>
                              </button>
                              <ul
                                className="dropdown-menu dropdown-menu-end shadow animated--grow-in "
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <li>
                                  {/* <a
                                    className="dropdown-item"
                                    href="/user/registry"
                                  >
                                    Your Wishlist
                                  </a> */}

                                  <NavLink
                                    className="nav-link"
                                    to={"/user/wishlist"}
                                  >
                                    Your Wishlist
                                  </NavLink>
                                </li>
                                <li>
                                  {/* <a
                                    className="dropdown-item"
                                    href="/user/profile"
                                  >
                                    Settings
                                  </a> */}
                                  <NavLink
                                    className="nav-link"
                                    to={"/user/profile"}
                                  >
                                    Settings
                                  </NavLink>
                                </li>
                                <li>
                                  {/* <a className="dropdown-item" href="#">
                                    Your Orders
                                  </a> */}
                                  {/* <NavLink className="nav-link" to={"/"}>
                                    Your Orders
                                  </NavLink> */}
                                </li>
                                <li onClick={handleLogout}>
                                  <NavLink className="nav-link">
                                    Log Out
                                  </NavLink>
                                  {/* <a className="dropdown-item" href="#" >
                                    Log Out
                                  </a> */}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </>
                    )}
                    {!token && (
                      <>
                        <li>
                          <div className="login">
                            <a className="login-btn" href="/login">
                              Log In
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="sign-up">
                            <a className="sign-up-btn" href="/register">
                              Sign Up
                            </a>
                          </div>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="fa fa-bars" />
                </button>

              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
