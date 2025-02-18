import { useFormik } from "formik";
import React from "react";
import { ThirdStepForm } from "../../helper/ValidationHelper";
import { useState } from "react";
import { Flip, toast } from "react-toastify";
import WishlistServices from "../../services/WishlistServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import StorageHelper from "../../helper/StorageHelper";
import Loader from "../../helper/Loader/Loader";

const ThirdStep = ({
  prevStep,
  nextStep,
  wishlistDetails,
  showBackBtn,
  formData,
  setFormData,
  setFetchId,
  fetchId
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const user_id = StorageHelper.getUserData()?.id;

  const initialValues = {
    store_name: "",
    order_number: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    // validationSchema: ThirdStepForm,
    onSubmit: (values, action) => {
      handleSubmit(values);
    },
  });

  const { isLoading } = useQuery(
    ["user-gift-all-third-step", fetchId],
    () => WishlistServices.UserGiftAll({ id: fetchId }),
    {
      enabled: !!fetchId,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log("data======>", data?.data);
        if (data?.data?.status) {
          formik.setFieldValue(
            "order_number",
            `${data?.data?.giftPurchased?.order_number}`
          );
          formik.setFieldValue("store_name",data?.data?.giftPurchased?.store_name)
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

  const handleSubmit = (data) => {
    if (!isChecked && formik.values.order_number == "") {
      formik.setFieldError(
        "order_number",
        `Enter an order number or choose "I don't have an order number"`
      );
      return;
    }

    let obj={}

    if(!!fetchId){
      obj={id:fetchId,store_name:data?.store_name,order_number:data?.order_number}
      updateMutate?.mutate(obj)
      return


    }

     obj = {
      user_id,
      wishlist_id: wishlistDetails?.id,
      user_name: formData?.user_name,
      email: formData?.email,
      store_name: data?.store_name,
      order_number: data?.order_number,
    };

    dataMutate.mutate(obj);

    // console.log("Data", data,formData,wishlistDetails);

    // nextStep();
  };

  const dataMutate = useMutation(
    (formData) => WishlistServices.UserGiftTracker(formData),
    {
      onSuccess: (data) => {
        console.log("Gift Tracker", data?.data);
        nextStep();
        if (data?.data?.status) {
          setFetchId(data?.data?.giftPurchase?.id);

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

  const updateMutate = useMutation(
    (formData) => WishlistServices.UserGiftUpdateById({id:fetchId,...formData}),
    {
      onSuccess: (data) => {
        // console.log("Gift Tracker===============================================", data?.data);
        // getclose();
        setFetchId(data?.data?.giftPurchaseToUpdate?.id);
        nextStep();

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

  //   console.log("wishlistDetails",wishlistDetails)
  return (
    <>
      {/* <div> */}
      <div className="heading">
        <h3>Help{" "}
            {wishlistDetails?.user?.first_name +
              " " +
              wishlistDetails?.user?.last_name +
              " "}{" "}
            {} in case of a return 📦</h3>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          {/* <div className="login-wrap"> */}
          
          {dataMutate?.isLoading ? (
            <Loader />
          ) : (
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group mb-3">
                <label> Store Name</label>
                <input
                  type="text"
                  name="store_name"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.store_name}
                  id
                  //   placeholder="Enter Name"
                />
                {formik.touched.store_name && (
                  <p className="text" style={{ color: "#FF7BAC" }}>
                    {formik.errors.store_name}
                  </p>
                )}
              </div>

              <div className="form-group mb-3">
                <label>Order Number</label>
                <input
                  type="text"
                  name="order_number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.order_number}
                  className="form-control"
                  id
                  placeholder
                />
                <span>
                  Not sure where to find it? Check your email from the store.
                </span>
                {formik.touched.order_number && (
                  <p className="text" style={{ color: "#FF7BAC" }}>
                    {formik.errors.order_number}
                  </p>
                )}
              </div>
              <div class="checkbox comon-checkbox-group">
                  <input
                    id="have_order_number"
                    label="I don't have an order number"
                    name="orderNumberNotAvailable"
                    type="checkbox"
                    value={isChecked}
                    onClick={() => setIsChecked(!isChecked)}
                  />
                <label htmlFor="have_order_number" title="">I don't have an order number </label>
              </div>

              <div className="form-group button-wrap">
                
                {showBackBtn ? (
                  <button type="submit" className="btn purple-btn px-5">
                    Save
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={dataMutate?.isLoading}
                    className="btn purple-btn px-5"
                  >
                    Next
                  </button>
                )}
              </div>
            </form>
          )}

          {/* </div> */}
        </div>
      </div>
      <div className="back-btn-wrap">
        {!showBackBtn && (
            <button
              className="btn"
              onClick={() => prevStep()}
            >
              <i class="fa-solid fa-chevron-left"></i>
            </button>
          )}
      </div>
      {/* </div> */}
    </>
  );
};

export default ThirdStep;
