import { useFormik } from "formik";
import React from "react";
import WishlistServices from "../../services/WishlistServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Flip, toast } from "react-toastify";
import { FourthStepForm, ThirdStepForm } from "../../helper/ValidationHelper";
import Loader from "../../helper/Loader/Loader";

const FourthStep = ({ prevStep, nextStep, getclose, fetchId }) => {
  const queryClient = useQueryClient();

  const { isLoading } = useQuery(
    ["user-gift-all", fetchId],
    () => WishlistServices.UserGiftAll({ id: fetchId }),
    {
      enabled: !!fetchId,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log("data======>================", data?.data?.giftPurchased);
        if (data?.data?.status) {
          formik.setFieldValue(
            "message_from",
            data?.data?.giftPurchased?.message_from ||
              `${data?.data?.giftPurchased?.user_name}`
          );
          formik.setFieldValue("message", data?.data?.giftPurchased?.message);
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

  const initialValues = {
    message: "",
    message_from: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FourthStepForm,
    onSubmit: (values, action) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (data) => {
    console.log("Data", data);
    // nextStep();
    dataMutate?.mutate(data);
  };

  const dataMutate = useMutation(
    (formData) =>
      WishlistServices.UserGiftUpdateById({ id: fetchId, ...formData }),
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
        <h3>Add your gift message! ✏️</h3>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          {/* <div className="login-wrap"> */}
          {isLoading ? (
            <Loader />
          ) : (
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group mb-3">
                <label> Gift Message</label>
                <textarea
                  type="text"
                  name="message"
                  rows={5}
                  cols={10}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="form-control"
                  id
                  placeholder="Add an optional message to include with these gifts."
                ></textarea>
                {formik.touched.message && (
                  <p className="text" style={{ color: "#FF7BAC" }}>
                    {formik.errors.message}
                  </p>
                )}
              </div>

              <div className="form-group mb-3">
                <label>From</label>
                <input
                  type="text"
                  name="message_from"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message_from}
                  className="form-control"
                  placeholder="Include the name(s) you'd like to appear next your gift message."
                  id
                />
                {formik.touched.message_from && (
                  <p className="text" style={{ color: "#FF7BAC" }}>
                    {formik.errors.message_from}
                  </p>
                )}
              </div>

              <div className="form-group button-wrap">
                {/* <button className="btn btn1 m-2" onClick={() => prevStep()}>
                Back
              </button> */}
                {formik?.values?.message?.length > 0 ? (
                  <button type="submit" className="btn purple-btn px-5">
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn purple-btn px-5"
                    onClick={getclose}
                  >
                    Skip
                  </button>
                )}
              </div>
            </form>
          )}

          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default FourthStep;
