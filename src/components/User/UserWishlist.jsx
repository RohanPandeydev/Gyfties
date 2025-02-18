import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import StorageHelper from "../../helper/StorageHelper";
import { Flip, ToastContainer, toast } from "react-toastify";
import WishlistServices from "../../services/WishlistServices";
import PriceFilter from "./PriceFilter";
import config from "../../../config";
import UserWishlistPrivacyDetails from "./UserWishlistPrivacy";
import UserWishlistPrivacy from "./UserWishlistPrivacy";
import { UserContext } from "../Context/UserContext";
import CopyText from "../../helper/CopyText";
import UserWishlistDetails from "./UserWishlistDetails";
import extractCurrency from "../../helper/ExtractCurrency";
import calculateDaysUntilNextBirthday from "../../helper/CalculateDob";
import UserAvailableProduct from "./UserAvailableProduct";
import UserPurchasedProduct from "./UserPurchasedProduct";
import UserGiftTracker from "./UserGiftTracker";

const UserWishlist = () => {
  const [isModal, setIsModal] = useState(false);
  const [toggleComponent, setToggleComponent] = useState({});
  const [isModalPrivacy, setIsModalPrivacy] = useState(false);
  const [editData, setEditData] = useState(null);
  const user_id = StorageHelper.getUserData()?.id;
  const refetchData = useQueryClient();
  const { userData, setUserData, setWishlistlink,giftCount } = useContext(UserContext);
  const webURL = window.location.host;
  const [filter, setFilter] = useState("");

  const handleChangeFilter = (e, data) => {
    console.log(data);
    setToggleComponent({});
    setFilter(data);
  };
  const { data, isLoading } = useQuery(
    ["wishlist", user_id, filter],
    () =>
      WishlistServices.UserWishlist(
        filter ? `${user_id}?priceValue=${filter}` : `${user_id}`
      ),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {

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

  const handleToggleComponent = (data) => {
    setToggleComponent(data);
  };
  const EditDetails = (data) => {
    console.log("Data===>", data);
    setEditData(data);
    setIsModal(true);
  };
  const submitHandler = (data) => {
    console.log("Data====>", data);
    const formdata = new FormData();
    formdata.append("productimg", data?.productImageUrl);
    formdata.append("title", data?.title);
    formdata.append("priceValue", data?.priceValue);
    formdata.append("productTitle", data?.productTitle);
    formdata.append("qty", data?.qty);
    formdata.append("note", data?.note);
    formdata.append("url", data?.url);
    formdata.append("user_id", user_id);
    formdata.append("id", editData?.id);
    formdata.append("is_purchased", data?.is_purchased);
    updatemutation.mutate(formdata);
  };
  const DeleteDetails = (id) => {
    console.log(id, "===>");
    setIsModal(false);
    deletemutation.mutate({ id });
  };

  const submitPrivacyHandler = (data) => {
    console.log("updatePrivacy ", data);
    return updatePrivacy.mutate(data);
  };
  //Update mutation data
  const updatemutation = useMutation(
    (formdata) => {
      return WishlistServices.UserWishlistUpdate(formdata);
    },
    {
      onSuccess: (data) => {
        console.log("Data Privacy", data?.data);
        if (data?.data?.status) {
          toast.success(data?.data?.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Flip,
          });
          refetchData.invalidateQueries("wishlist");
          refetchData.refetchQueries("wishlist");
          setIsModal(false);
          return true;
          // window.alert("Updated successfully");
        } else {
          toast.error(data?.data?.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Flip,
          });
          return false;
        }
      },
      onError: (err) => {
        toast.error(err?.response?.message || err?.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Flip,
        });
        return false;
      },
    }
  );
  //Delete wishlist items
  const deletemutation = useMutation(
    (formdata) => {
      return WishlistServices.DeleteWishlistItem(formdata);
    },
    {
      onSuccess: (data) => {
        console.log("Data On Wishlist", data?.data);
        if (data?.data?.status) {
          toast.success(data?.data?.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Flip,
          });
          refetchData.invalidateQueries("wishlist");
          refetchData.refetchQueries("wishlist");
          return true;
          // window.alert("Updated successfully");
        } else {
          toast.error(data?.data?.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Flip,
          });
          return false;
        }
      },
      onError: (err) => {
        toast.error(err?.response?.message || err?.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Flip,
        });
        return false;
      },
    }
  );
  //User Privacy
  const updatePrivacy = useMutation(
    (formdata) => {
      return WishlistServices.UserWishlistUpdatePrivacy(formdata);
    },
    {
      onSuccess: (data) => {
        console.log("Data On Privacy", data?.data);
        if (data?.data?.status) {
          toast.success(data?.data?.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Flip,
          });
          setIsModalPrivacy(false);
          StorageHelper.setUserData(data?.data?.data);
          setUserData(data?.data?.data);
          return true;
          // window.alert("Updated successfully");
        } else {
          toast.error(data?.data?.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Flip,
          });
          return false;
        }
      },
      onError: (err) => {
        toast.error(err?.response?.message || err?.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Flip,
        });
        return false;
      },
    }
  );

  const style = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 3,
  };
  const handleError = (event) => {
    event.target.src = '/assets/images/Image_not_available.png';
  };
  return (
    <>
      <ToastContainer />
      <main className="my-profile-registry-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 mb-3">
              <div className="registry-sidebar">
                <div className="registry-user-container">
                  <div className="user-img">
                    <img
                      className="img-fluid"
                      src={
                        (!!userData.profile_img &&
                          config.apiUrl + "/" + userData.profile_img) ||
                        "/assets/images/auth-img1.jpg"
                      }
                      alt
                    />
                  </div>
                  <div className="user-name">
                    <h4>Hi, {userData?.first_name}</h4>
                    {/* <p>{calculateDaysUntilNextBirthday(userData?.dob)} days to go! 🎉</p> */}
                  </div>
                </div>
                <div className="switch-registry-wrap">
                  {/* <h4>Switch Wishlist</h4> */}
                  <div className="dropdown mb-4">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {userData?.first_name}'s Wishlist
                    </button>
                    {/* <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className href="#" onClick={()=>window.alert("Feature will add soon")}>
                          <i className="fa-solid fa-plus" /> Create new wishlist
                        </a>
                      </li>
                    </ul> */}
                  </div>
                  <h4>YOUR Wishlist LINK</h4>
                  <div className="your-wishlist-link-wrap">
                    <div id="wishlist-link" style={style}>
                      {!isLoading &&
                        `${window.location.href
                          .split("/")
                          .slice(0, 3)
                          .join("/")}/wishlist/search/${data?.data?.sharelink}`}
                    </div>
                    <button
                      className="link-copy-btn"
                      id="button1"
                      onClick={() => {
                        const text =
                          !isLoading &&
                          `${window.location.href
                            .split("/")
                            .slice(0, 3)
                            .join("/")}/wishlist/search/${
                            data?.data?.sharelink
                          }`;
                        CopyText(text);
                        toast.success("copied", { delay: 10 });
                        return;
                      }}
                    >
                      <i className="fa-solid fa-copy" />
                    </button>
                  </div>
                </div>
                <hr />
                <div className="sidemenu">
                  <ul>
                    <li className="">
                      <a href="/user/wishlist" style={Object.keys(toggleComponent).length === 0 ? { color: '#6E3264' } : {}}>
                        <i className="fa-solid fa-house" /> View Wishlist
                      </a>
                    </li>
                    {/* <li>
                      <a href="my-profile-view-wishlist.html">
                        <i className="fa-solid fa-list-ul" /> View Wishlist
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="#focusme"
                        style={toggleComponent?.gifttracker ? { color: '#6E3264' } : {}}
                        onClick={() =>
                          handleToggleComponent({ gifttracker: true })
                        }
                      >
                        <i className="fa-solid fa-gift" /> Gift Tracker
                      </a>
                    </li>
                  </ul>
                </div>
                <hr />
                <div className="sidemenu">
                  <ul>
                    <li className="active">Gifts</li>
                    {/* <li>
                      <a href="#">All Gifts</a>
                    </li> */}
                    <li>
                      <a
                      style={toggleComponent?.available ? { color: '#6E3264' } : {}}
                        href="#focusme"
                        onClick={() =>
                          handleToggleComponent({ available: true })
                        }
                      >
                        Available Gifts
                      </a>
                    </li>
                    <li>
                      <a
                       style={toggleComponent?.purchased ? { color: '#6E3264' } : {}}
                        href="#focusme"
                        onClick={() =>
                          handleToggleComponent({ purchased: true })
                        }
                      >
                        Purchased Gifts
                      </a>
                    </li>
                  </ul>
                </div>
                <hr />
                <PriceFilter
                  handleChangeFilter={handleChangeFilter}
                  handleToggleComponent={handleToggleComponent}
                  filter={filter}
                />

                <hr />
                <div className="gift-added">
                  <h4>Gifts Added</h4>
                  <div className="add-number">
                    <h5>
                      {!isLoading &&
                        data?.data?.registries &&
                        data?.data?.registries.length}
                    </h5>
                  </div>
                </div>
                <hr />
                <div className="gift-added">
                  <h4>Gifts Purchased</h4>
                  <div className="add-number">
                    <h5>{giftCount || 0}</h5>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="my-registry-right-wrap">
                <div className="comon-title mb-4">
                  <h4>Finish Your Wishlist Setup</h4>
                  {!isLoading && !!userData && isModalPrivacy ? (
                    <UserWishlistPrivacy
                      submitPrivacyHandler={submitPrivacyHandler}
                      isModalPrivacy={isModalPrivacy}
                      data={userData}
                      setIsModalPrivacy={setIsModalPrivacy}
                      shareLink={`${window.location.href
                        .split("/")
                        .slice(0, 3)
                        .join("/")}/wishlist/search/${data?.data?.sharelink}`}
                    />
                  ) : (
                    <p>
                      Your Wishlist is{" "}
                      <span
                        className="text-primary"
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsModalPrivacy(!isModalPrivacy)}
                      >
                        {userData?.is_private ? "private" : "public"}
                      </span>
                    </p>
                  )}
                </div>
                <div className="row mb-4">
                  {/* <div className="col-12 col-md-4 mb-3">
                    <div className="setup-goals-list">
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#ship_your_giftsModal"
                      >
                        <div className="icon">
                          <img
                            className="img-fluid"
                            src="/assets/images/shipping_address.png"
                            alt
                          />
                        </div>
                        <div className="setup-goals-text">
                          Where do we ship your gifts?
                        </div>
                        <div className="right-arrow">
                          <i className="fa-solid fa-chevron-right" />
                        </div>
                      </button>
                    </div>
                  </div> */}
                  {/* <div className="col-12 col-md-4 mb-3">
                    <div className="setup-goals-list">
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#add_photo_greetingModal"
                      >
                        <div className="icon">
                          <img
                            className="img-fluid"
                            src="/assets/images/personalize_registry.png"
                            alt
                          />
                        </div>
                        <div className="setup-goals-text">
                          Add a photo and a greeting.
                        </div>
                        <div className="right-arrow">
                          <i className="fa-solid fa-chevron-right" />
                        </div>
                      </button>
                    </div>
                  </div> */}
                </div>
                <div className="add-img mb-4">
                  <img
                    className="img-fluid"
                    src="/assets/images/add-img.png"
                    alt
                  />
                </div>
                {toggleComponent?.available ? (
                  <UserAvailableProduct />
                ) : toggleComponent?.purchased ? (
                  <UserPurchasedProduct />
                ) : toggleComponent?.gifttracker ? (
                  <UserGiftTracker />
                ) : (
                  <div className="row">
                    {isLoading ? (
                      <div className="container d-flex justify-content-center align-items-center">
                        <img
                          src="/assets/images/nodatafound.jpg"
                          height={300}
                          width={300}
                        />
                      </div>
                    ) : data?.data?.registries.length == 0 ? (
                      <div className="container d-flex justify-content-center align-items-center">
                        <img
                          src="/assets/images/nodatafound.jpg"
                          height={300}
                          width={300}
                        />
                      </div>
                    ) : isModal ? (
                      <UserWishlistDetails
                        isModal={isModal}
                        submitHandler={submitHandler}
                        setIsModal={setIsModal}
                        user_id={user_id}
                        DeleteDetails={DeleteDetails}
                        data={editData}
                      />
                    ) : (
                      data?.data?.registries.map((each, ind) => {
                        return (
                          <>
                            <div
                              className="col-12 col-md-6 col-lg-4 mb-4"
                              key={ind}
                            >
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
                                    onError={handleError}
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
                                  <div className="prod-card-btn">
                                    <button
                                      type="button"
                                      className="btn btn-edit btn-sm"
                                      onClick={() => EditDetails(each)}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm"
                                      onClick={() => DeleteDetails(each?.id)}
                                    >
                                      Delete
                                    </button>
                                  </div>
                              </div>
                            </div>
                          </>
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UserWishlist;
