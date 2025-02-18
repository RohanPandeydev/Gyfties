import React, { useState } from "react";
import HelpServices from "../../services/HelpServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import WishlistServices from "../../services/WishlistServices";
import StorageHelper from "../../helper/StorageHelper";
import extractCurrency from "../../helper/ExtractCurrency";
import config from "../../../config";
import { Flip, toast } from "react-toastify";
import moment from "moment/moment";

const UserGiftTracker = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItem(index === openItem ? null : index);
  };

  const user_id = StorageHelper.getUserData()?.id;

  const { data, isLoading } = useQuery(
    ["wishlist-purchased-gifttracker", user_id],
    () => WishlistServices.UserPurchasedGift({ id: `${user_id}` }),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log(
          "User Data Purchased Gift Tracker",
          data?.data,
          "User Data"
        );
      },
      onError: (err) => {
        toast.error(`🦄 ${err?.response?.data?.message || err?.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
      },
    }
  );
  return (
    <section className="faq-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="comon-title mb-4">
              <h3>
                <strong>Gift Tracker</strong>
              </h3>
            </div>
          </div>
          <div className="col-12 col-md-12">
            <div className="faq-wrap gift-tracker-accordion-wrap">
              <div className="accordion" id="FAQaccordion">
                {isLoading ? (
                  <p>Please wait.......</p>
                ) : data?.data?.purchasedProducts.length == 0 ? (
                  <div className="container d-flex justify-content-center align-items-center">
                    <img
                      src="/assets/images/nodatafound.jpg"
                      height={300}
                      width={300}
                    />
                  </div>
                ) : (
                  data?.data?.purchasedProducts.map((each, index) => {
                    return (
                      <div className="accordion-item" key={index}>
                        {
                          console.log(each)
                        }
                        <h2 className="accordion-header" id={`heading${index}`}>
                          <button
                            className="accordion-button"
                            type="button"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={
                              index === openItem ? "true" : "false"
                            }
                            aria-controls={`collapse${index}`}
                          >
                            <div class="gift-tracker-head">
                              <div class="gift-user-name">
                                <h4>{" "}
                              {each?.ispurchased?.giftpurchase?.message_from ?each?.ispurchased?.giftpurchase?.message_from:`${each.ispurchased?.giftpurchase?.user_name || "N/A"} `}




                              </h4>
                              {/* {each.ispurchased?.giftpurchase?.user?.last_name || "N/A"}</h4> */}
                                {/* <p>{each.ispurchased?.giftpurchase?.user?.email || "N/A"}</p> */}
                              </div>
                              <div className="gift-date">
                                <p>{moment(each?.createdAt).format('ll')}</p>
                              </div>
                              <div class="order-count">
                              {each?.gift_count || 1} Gifts
                              </div>
                            </div>                          
                          </button> 
                        </h2>
                        <div
                          id={`collapse${index}`}
                          className={`accordion-collapse collapse ${
                            index === openItem ? "show" : ""
                          }`}
                          aria-labelledby={`heading${index}`}
                          data-bs-parent="#FAQaccordion"
                        >
                          <div className="accordion-body">

                            <div className="gift-tracker-prd-wrap">
                              <div className="row">
                                <div className="col-12 col-lg-8 mb-4">
                                  <div className="tracker-product-wrap">
                                      <div className="row">
                                        <div className="col-12 col-md-7 col-lg-7">
                                          <div className="tracker-product-left">
                                            <div className="row">
                                              <div className="col-12 col-md-3 mb-3 mb-md-0">
                                                <div className="tracker-prd-img">
                                                <img
                                    className="img-fluid"
                                    src={
                                      each?.productImageUrl.includes(
                                        "amazon" || "Amazon"
                                      )
                                        ? each?.productImageUrl
                                        : each?.productImageUrl.includes(
                                            "ebay" || "Ebay"
                                          )
                                        ? each?.productImageUrl
                                        : each?.productImageUrl.includes(
                                            "walmart" || "Walmart"
                                          )
                                        ? each?.productImageUrl
                                        : config.apiUrl +
                                          "/" +
                                          each?.productImageUrl
                                    }
                                    alt
                                  />                                                </div>
                                              </div>
                                              <div className="col-12 col-md-9">
                                                <div className="tracker-prd-title">
                                                  <h4> {each?.productTitle || 'N/A'}</h4>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-5 col-lg-5">
                                          <div className="tracker-product-details">
                                            <ul>
                                              <li>
                                                <div className="name">Purchased</div>
                                                <div className="details"> {moment(each?.createdAt).format('ll')}</div>
                                              </li>
                                              <li>
                                                <div className="name">Qty</div>
                                                <div className="details">{each?.qty ||1}</div>
                                              </li>
                                              {/* <li>
                                                <div className="name">Store</div>
                                                <div className="details">Not yet provided</div>
                                              </li>
                                              <li>
                                                <div className="name">Order #</div>
                                                <div className="details">abcd</div>
                                              </li> */}
                                            </ul>
                                            {/* <button className="btn purple-outline-btn">Return</button> */}
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                  <div className="gift-tracker-message-wrap">
                                    <h4>Gift Message</h4>
                                    <p>{each?.ispurchased?.giftpurchase?.message ||
                                    ""}</p>
                                    <h5>-{each?.ispurchased?.giftpurchase?.message_from ||
                                   each?.ispurchased?.giftpurchase?.user_name}</h5>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="container d-flex justify-content-center align-items-center d-none">
                              <div className="add-product-list">
                                <div className="prd-img">
                                  <img
                                    className="img-fluid"
                                    src={
                                      each?.productImageUrl.includes(
                                        "amazon" || "Amazon"
                                      )
                                        ? each?.productImageUrl
                                        : each?.productImageUrl.includes(
                                            "ebay" || "Ebay"
                                          )
                                        ? each?.productImageUrl
                                        : each?.productImageUrl.includes(
                                            "walmart" || "Walmart"
                                          )
                                        ? each?.productImageUrl
                                        : config.apiUrl +
                                          "/" +
                                          each?.productImageUrl
                                    }
                                    alt
                                  />
                                </div>
                                <div className="product-content">
                                  <h3>
                                    <a href={each?.url} target="_blank">
                                      {each?.productTitle}
                                    </a>
                                  </h3>
                                  <p className="text">Notes: {each?.note}</p>

                                  <div className="prd-buy-from">
                                    <div className="price-buy-from">
                                      <div className="buy-from-list">
                                        <ul>
                                          {each?.url.includes(
                                            "amazon" || "Amazon"
                                          ) ? (
                                            <li>
                                              <img
                                                src="/assets/images/amazon_logo.png"
                                                alt
                                              />
                                            </li>
                                          ) : each.url.includes(
                                              "ebay" || "Ebay"
                                            ) ? (
                                            <li>
                                              <img
                                                src="/assets/images/ebaylogo.png"
                                                alt
                                              />
                                            </li>
                                          ) : each.url.includes(
                                              "walmart" || "Walmart"
                                            ) ? (
                                            <li>
                                              <img
                                                src="/assets/images/walmartlogo.png"
                                                alt
                                              />
                                            </li>
                                          ) : (
                                            <li>
                                              <img
                                                src="/assets/images/target_logo.webp"
                                                alt
                                              />
                                            </li>
                                          )}
                                        </ul>
                                      </div>
                                    </div>
                                    {/* <h5>{ each?.priceValue && each?.priceValue.includes("$") ? each?.priceValue : `$ ${each?.priceValue}`}</h5> */}
                                    <h5>
                                      {extractCurrency(each?.priceValue || 0)}
                                    </h5>
                                    {/* <div className="add-btn-wrap"> */}
                                    {/* <a className="btn purple-btn" href="#"><i className="fa-solid fa-plus" /></a> */}

                                    {/* </div> */}
                                  </div>
                                  <p className="text">Needs: {each?.qty}</p>
                                </div>
                              </div>
                              <div className="add-product-list">
                                Gift Message
                                <p>
                                  {each?.ispurchased?.giftpurchase?.message ||
                                    "N/A"}
                                </p>
                                <p>
                                  -- {each?.ispurchased?.giftpurchase?.message_from ||
                                    "N/A"}
                                </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserGiftTracker;
