import React from "react";
import WishlistServices from "../../services/WishlistServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Flip, toast } from "react-toastify";
import config from "../../../config";
import moment from "moment/moment";

const UpdateForm = ({ wishlistDetails, setStep, fetchId, getclose }) => {
  const queryClient = useQueryClient();

  console.warn("wishlistDetails", wishlistDetails);

  const dataMutate = useMutation(
    (formData) => WishlistServices.UserGiftDeleteById({ id: fetchId }),
    {
      onSuccess: (data) => {
        console.log(
          "Gift Tracker===============================================",
          data?.data
        );

        getclose();

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
          // setTimeout(() => window.location.replace(loc?.state?.path ||"/"), 2000);
        } else {
          toast.error(`🦄 ${data?.data?.message}`, {
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
        }
      },
      onError: (err) => {
        console.log(err);
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
      <div className="heading">
        <h3>Ta-da! 🎉 You're done!</h3>
        <p>
          If you marked your gift a surprise, this information will be hidden on
          Dev's Gift Tracker. Otherwise, here's what they'll see.
        </p>
      </div>
      <div className="date-gift-count-wrap mb-4">
        <div className="date-message-wrap">
          <p>{moment(wishlistDetails?.createdAt).format("ll")}</p>
          <h5>
            {wishlistDetails?.ispurchased?.giftpurchase?.message || "message"}
          </h5>
          <p>{wishlistDetails?.ispurchased?.user?.email || "N/A"}</p>
        </div>
        <div className="gift-count">
        {wishlistDetails?.qty || 1}<br />
          Gift
        </div>
      </div>

      {/* <div>
        1 Gift
    </div> */}
      <div className="edit-gift-message-wrap">
        <h4>Gift Message</h4>
        <p>
          {wishlistDetails?.ispurchased?.giftpurchase?.message ||
            "Add a gift message"}
        </p>
        <h5>-{wishlistDetails?.ispurchased?.giftpurchase?.user_name ||'N/A'}</h5>

        <button onClick={() => setStep(4)} className="btn edit-btn">
          EDIT
        </button>
      </div>
      <div className="edit-gift-prd-wrap">
        <div className="row">
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <div className="edit-prd-img">
              <img
                className="img-fluid"
                src={
                  wishlistDetails?.productImageUrl.includes(
                    "amazon" || "Amazon"
                  )
                    ? wishlistDetails?.productImageUrl
                    : wishlistDetails?.productImageUrl.includes(
                        "ebay" || "Ebay"
                      )
                    ? wishlistDetails?.productImageUrl
                    : wishlistDetails?.productImageUrl.includes(
                        "walmart" || "Walmart"
                      )
                    ? wishlistDetails?.productImageUrl
                    : config.apiUrl + "/" + wishlistDetails?.productImageUrl
                }
                alt
              />
            </div>
          </div>
          <div className="col-12 col-md-9">
            <div className="edit-prd-details">
              <h4>{wishlistDetails?.productTitle}</h4>
              <h5>Purchase Details</h5>
              <p>Qty: {wishlistDetails?.qty || 1}</p>
              {/* <p>Store: SB</p>
              <p>Order #: dfsd</p> */}
              <ul className="edit-remove-btn-wrap">
                <li>
                  <button
                    className="btn purple-outline-btn"
                    onClick={() => setStep(3)}
                  >
                    Edit Gift Details
                  </button>
                </li>
                <li>
                  <button
                    className="btn remove-btn"
                    onClick={() => dataMutate?.mutate()}
                  >
                    Remove
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-none">
        <div className="col-12 col-md-6 offset-md-3">
          {/* <div className="login-wrap"> */}
          <h4>Gift Message</h4>
          <p>Add a gift message</p>
          <button onClick={() => setStep(4)} className="btn purple-btn px-5">
            EDIT
          </button>

          {/* </div> */}
        </div>
      </div>
      <div className="row d-none">
        <div className="col-12 col-md-6 offset-md-3">
          {/* <div className="login-wrap"> */}
          <h4>Gift Message</h4>
          <p>Add a gift message</p>
          <button className="btn purple-btn px-5" onClick={() => setStep(3)}>
            Edit Gift Details
          </button>
          <button
            className="btn purple-btn px-5"
            onClick={() => dataMutate?.mutate()}
          >
            Remove
          </button>

          {/* </div> */}
        </div>
      </div>
      <div className="form-group button-wrap">
        <button className="btn purple-btn px-5" onClick={getclose}>
          I'm Finished
        </button>
      </div>
    </>
  );
};

export default UpdateForm;
