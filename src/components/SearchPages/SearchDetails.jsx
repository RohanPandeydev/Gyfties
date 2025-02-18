import React, { useEffect, useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import config from "../../../config";
import WishlistServices from "../../services/WishlistServices";
import SearchPageHeader from "./SearchPageHeader";
import SearchFilterWrapper from "./SearchFilterWrapper";
import PageNotFound from "../ErrorPage/PageNotFound";
import Loader from "../../helper/Loader/Loader";
import { RequireAuth } from "../Utilities/RouteGaurd";
import extractCurrency from "../../helper/ExtractCurrency";
import IsPurchasedModel from "./IsPurchasedModel";
import StorageHelper from "../../helper/StorageHelper";

const SearchDetails = () => {
  const userId = StorageHelper?.getUserData()?.id;
  const { user_id } = useParams();
  const [id, setId] = useState(null);
  const [isPurchased, setIsPurchased] = useState(null);
  const [wishlistDetails, setWishlistDetails] = useState({});
  const [purchasedItems, setPurchasedItems] = useState({});

  const nav = useNavigate();
  // console.log("user_id.substring(user_id.length,1)", user_id?.length, user_id.slice(0, -1))

  const { data, isLoading } = useQuery(
    ["searchresult", user_id],
    () => WishlistServices.UserWishlist(id),
    {
      enabled: !!id,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log("Data====================>", data);
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

  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItem(index === openItem ? null : index);
  };

  useEffect(() => {
    // console.log("data?.data?.registries[0]", data?.data?.registries[0]);
    // if (
    //   data?.data?.registries.length > 0 &&
    //   data?.data?.registries[0].user.is_private
    // ) {
    //   toast.error(`🦄 User wishlist is private`, {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     transition: Flip,
    //   });
    //   // nav(-1);
    //   return;
    // }
  }, [isLoading]);
  useEffect(() => {
    try {
      const decodedUserId = atob(user_id.slice(0, -1));
      console.log("Decoded user ID:", decodedUserId);
      setId(() => decodedUserId);
    } catch (error) {
      console.error("Error decoding user ID:", error.message);
      // Handle the error gracefully, e.g., display an error message to the user
    }
  }, [user_id, id]);

  const handleIHavePurchased = (e, data) => {
    console.log("data",data)
    setIsPurchased(true)
    const updatedPurchasedItems = { ...purchasedItems };
    // updatedPurchasedItems[data.id] = true;
    // setWishlistDetails(data);
    if (e.target.checked) {
      updatedPurchasedItems[data.id] = true;
      setWishlistDetails(data);
    } else {
      delete updatedPurchasedItems[data.id];
      // setWishlistDetails({});
    }
  
    setPurchasedItems(updatedPurchasedItems);
    return;
  };
  const handleIHavePurchasedUpdate = (e, data) => {
    setIsPurchased(() => true);
    setWishlistDetails(data);
    return;
  };

  // console.log("atob((user_id.slice(0, -1)))",atob((user_id.slice(0, -1))))
  console.log(user_id, "==========");


  const handleError = (event) => {
    event.target.src = '/assets/images/Image_not_available.png';
  };
  return (
    <RequireAuth>
      {!id ? (
        <div className="container d-flex justify-content-center align-items-center">
          <img src="/assets/images/nodatafound.jpg" height={300} width={300} />
        </div>
      ) : (
        <>
          <SearchPageHeader data={!isLoading && data?.data?.user} />
          <section className="find-registry-details-wrapper">
            <div className="container">
              {isLoading ? (
                <Loader />
              ) : data?.data?.registries.length == 0 ? (
                <div className="container d-flex justify-content-center align-items-center">
                  <img
                    src="/assets/images/nodatafound.jpg"
                    height={300}
                    width={300}
                  />
                </div>
              ) : (
                <div className="row">
                  <div className="col-12 mb-4">
                    {/* <SearchFilterWrapper /> */}
                  </div>
                  {data?.data?.registries.map((each, index) => {
                    if (each?.is_private) return;
                    return (
                      <div className="col-12" key={index}>
                        {/* {console.log("===========644897897897", each)} */}
                        <div
                          className="accordion product-accordion"
                          id="accordionProduct"
                        >
                          <div className="accordion-item product-list">
                            <h2
                              className="accordion-header"
                              id={`heading${index}`}
                            >
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={
                                  index === openItem ? "true" : "false"
                                }
                                aria-controls={`collapse${index}`}
                              >
                                {each?.productTitle}
                              </button>
                            </h2>

                            <div
                              id={`collapse${index}`}
                              className={`accordion-collapse collapse ${
                                index === openItem ? "show" : ""
                              }`}
                              aria-labelledby={`heading${index}`}
                              // className="accordion-collapse collapse show"
                              // aria-labelledby="panelsStayOpen-headingOne"
                            >
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-12 col-md-4 mb-3">
                                    <div className="product-img">
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
                                        onError={handleError}
                                        alt
                                      />
                                    </div>
                                  </div>

                                  <div className="col-12 col-md-8 mb-3">
                                    <div className="product-name">
                                      <h4>{each?.productTitle}</h4>
                                      <div className="price-buy-btn mt-4">
                                        <p className="quantity-bx">
                                          Qty: {each?.qty}
                                        </p>
                                        <span>
                                          {extractCurrency(
                                            each?.priceValue || 0
                                          )}
                                        </span>
                                        <a
                                          href={each?.url}
                                          target="_sb"
                                          className="btn purple-btn mx-3"
                                        >
                                          Buy{" "}
                                          <i className="fa-solid fa-up-right-from-square" />
                                        </a>
                                        {each?.ispurchased?.user?.id ==
                                          userId &&
                                        each?.ispurchased?.is_purchased ? (
                                          <button
                                            className="btn purple-btn mx-3"
                                            onClick={(e) =>
                                              handleIHavePurchasedUpdate(
                                                e,
                                                each
                                              )
                                            }
                                          >
                                            Edit Details
                                          </button>
                                        ) : each?.ispurchased?.user?.id !==
                                            userId &&
                                          each?.ispurchased?.is_purchased ? (
                                          <p>Purchased</p>
                                        ) : (
                                          <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            checked={!!purchasedItems[each.id]}  // Use double negation to convert undefined to false
                                            type="checkbox"
                                            onChange={(e) => handleIHavePurchased(e, each)}
                                            value=""
                                            id={`flexCheckDefault${each.id}`}  // Unique ID for each checkbox
                                          />
                                          <label className="form-check-label" htmlFor={`flexCheckDefault${each.id}`}>
                                            I've Purchased This
                                          </label>
                                        </div>
                                        )}

                                        {/* {
                                         each?.ispurchased?.is_purchased
                                         ?<p>Purchased</p>:: <div class="form-check">
                                          <input class="form-check-input" checked={isPurchased} type="checkbox" onChange={(e)=>handleIHavePurchased(e,each)} value="" id="flexCheckDefault" />
                                          <label class="form-check-label" htmlFor="flexCheckDefault">I've Purchased This</label>
                                        </div>
                                        } */}
                                      </div>
                                    </div>

                                    <div className="product-details-wrap mt-3">
                                      <h4>Buy Directly From</h4>
                                      <div className="ptm">
                                        <div className="site-icon">
                                          <div className="icon">
                                            {each?.url.includes(
                                              "amazon" || "Amazon"
                                            ) ? (
                                              <img
                                                src="/assets/images/amazon_logo.png"
                                                alt
                                                className="img-fluid"
                                              />
                                            ) : each?.url.includes(
                                                "ebay" || "Ebay"
                                              ) ? (
                                              <img
                                                src="/assets/images/ebaylogo.png"
                                                alt
                                              />
                                            ) : each?.url.includes(
                                                "walmart" || "Walmart"
                                              ) ? (
                                              <img
                                                src="/assets/images/walmartlogo1.png"
                                                alt
                                              />
                                            ) : (
                                              <img
                                                src="/assets/images/target_logo.webp"
                                                alt
                                                className="img-fluid"
                                              />
                                            )}
                                            {/* <img className="img-fluid" src="images/target_logo.webp" alt /> */}
                                          </div>
                                        </div>

                                        <b>Notes</b>
                                        <p>{each?.note}</p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* <div className="col-12 col-md-4 mb-3">
                                    
                                  </div>
                                  <div className="col-12 col-md-4 mb-3">
                                    
                                  </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingTwo"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          {each?.productTitle}
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div className="accordion-body">{each?.note}</div>
                      </div>
                    </div> */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
          {!isLoading && isPurchased && (
        <IsPurchasedModel
          isPurchased={isPurchased}
          setIsPurchased={setIsPurchased}
          wishlistDetails={wishlistDetails}
          setWishlistDetails={setWishlistDetails}
          purchasedItems={purchasedItems}
        />
      )}
        </>
      )}
    </RequireAuth>
  );
};

export default SearchDetails;
