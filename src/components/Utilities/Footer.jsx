import React, { useContext } from "react";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import CmsServices from "../../services/CmsServices";
import { useQuery } from "@tanstack/react-query";
import config from "../../../config";

const Footer = () => {
  const { userData, token } = useContext(UserContext);
  const nav = useNavigate();
  const { data, isLoading } = useQuery(
    ["socialmedia"],
    () => CmsServices.GetSocialMedia(),
    {
      onSuccess: (data) => {
        console.log("My socialmediaget", data?.data);
      },
      onError: (error) => {
        console.log("ERROR", error);
        toast.error(error?.response?.message || error?.message);
      },
    }
  );

  return (
    <>
      <footer className="footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="footer-inner-wrap">
                <h3>WISHLIST</h3>
                <div className="footer-menu">
                  <ul>
                    <li>
                      {userData && token ? (
                        <a href="/wishlist/search">Find Wishlist </a>
                      ) : (
                        <a href="/login">Find Wishlist </a>
                      )}
                    </li>
                    <li>
                      {userData && token ? (
                        <a href="/bookmark/add">Create Wishlist </a>
                      ) : (
                        <a href="/register">Create Wishlist </a>
                      )}
                    </li>
                    {/* <li>
                      <a href="#">Checklist </a>
                    </li>
                    <li>
                      <a href="#">15% Wishlist Discount </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="footer-inner-wrap">
                <h3>About Us</h3>
                <div className="footer-menu">
                  <ul>
                 
                    <li>
                      <a href="/ourstory">Our Story </a>
                    </li>
                    <li>
                      <a href="/experiances">Experiences </a>
                    </li>
                    <li>
                      <a href="/press">Press </a>
                    </li>
                 
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="footer-inner-wrap">
                <h3>GUIDES</h3>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="/help"> FAQ's </a>
                    </li>
                    {/* <li>
                      <a href="#"> Delivery Info </a>
                    </li>
                    <li>
                      <a href="#"> Refund Policy </a>
                    </li>
                    <li>
                      <a href="#"> Size Guide </a>
                    </li> */}
                    <li>
                      <a href="/termsconditions"> Terms of Use </a>
                    </li>
                    <li>
                      <a href="/privacypolicy"> Privacy Policy </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 border-0">
              <div className="footer-inner-wrap">
                <h3>SUPPORT</h3>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="/help"> Help </a>
                    </li>
                    <li>
                      <a href="/contactus"> Contact Us </a>
                    </li>
                    {/* <li>
                      <a href="#"> Shipping </a>
                    </li>
                    <li>
                      <a href="#"> Returns </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-social-wrap">
                <ul className="social-icon">
                  {!isLoading &&
                    data?.data?.socialMedia?.length > 0 &&
                    data?.data?.socialMedia?.map((each) => {
                      return (
                        <li>
                          <a href={each?.link}>
                            <img
                              className="img-fluid "
                              style={{
                                maxWidth: "100%",
                                height: "30px",
                                width: "30px",
                              }}
                              height={100}
                              width={100}
                              src={config.apiUrl + "/" + each?.icon}
                            />
                          </a>
                        </li>
                      );
                    })}

                  {/* <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="footer-copright">
                <p>
                  Copyright © {new Date().getFullYear()}. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
