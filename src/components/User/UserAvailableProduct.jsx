import React from "react";
import extractCurrency from "../../helper/ExtractCurrency";
import config from "../../../config";
import { Flip, toast } from "react-toastify";
import WishlistServices from "../../services/WishlistServices";
import StorageHelper from "../../helper/StorageHelper";
import { useQuery } from "@tanstack/react-query";

const UserAvailableProduct = () => {
    const user_id = StorageHelper.getUserData()?.id;

    const { data, isLoading } = useQuery(
        ["wishlist-available-gift", user_id],
        () =>
          WishlistServices.UserAvailableGift({id:
             `${user_id}`}
          ),
        {
          refetchOnWindowFocus: false,
          onSuccess: (data) => {


            console.log("User Data",data?.data
                ,"User Data")



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
    <>
    
      <div className="row">
        <div className="col-12 mb-4">
          <div className="comon-title">
            <h3><strong>Available Gifts</strong></h3>
          </div>
        </div>
      </div>
      <div className="row">

        {isLoading ? (
          <div className="container d-flex justify-content-center align-items-center">
            <img
              src="/assets/images/nodatafound.jpg"
              height={300}
              width={300}
            />
          </div>
        ) : data?.data?.availableProducts.length == 0 ? (
          <div className="container d-flex justify-content-center align-items-center">
            <img
              src="/assets/images/nodatafound.jpg"
              height={300}
              width={300}
            />
          </div>
        ) : (
          data?.data?.availableProducts.map((each, ind) => {
            return (
              <>
                <div className="col-12 col-md-6 col-lg-4 mb-4" key={ind}>
                  <div className="add-product-list">
                    <div className="prd-img">
                      <img
                        className="img-fluid"
                        src={
                          each?.productImageUrl.includes("amazon" || "Amazon")
                            ? each?.productImageUrl
                            : each?.productImageUrl.includes("ebay" || "Ebay")
                            ? each?.productImageUrl
                            : each?.productImageUrl.includes(
                                "walmart" || "Walmart"
                              )
                            ? each?.productImageUrl
                            : config.apiUrl + "/" + each?.productImageUrl
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
                              {each?.url.includes("amazon" || "Amazon") ? (
                                <li>
                                  <img
                                    src="/assets/images/amazon_logo.png"
                                    alt
                                  />
                                </li>
                              ) : each.url.includes("ebay" || "Ebay") ? (
                                <li>
                                  <img src="/assets/images/ebaylogo.png" alt />
                                </li>
                              ) : each.url.includes("walmart" || "Walmart") ? (
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
                        <h5>{extractCurrency(each?.priceValue || 0)}</h5>
                        {/* <div className="add-btn-wrap"> */}
                        {/* <a className="btn purple-btn" href="#"><i className="fa-solid fa-plus" /></a> */}

                        {/* </div> */}
                      </div>
                      <p className="text">Needs: {each?.qty}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default UserAvailableProduct;
