import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { ContactUs } from "../../helper/ValidationHelper";
import { toast } from "react-toastify";
import AuthServices from "../../services/AuthServices";
import { useMutation } from "@tanstack/react-query";
import Loader from "../../helper/Loader/Loader";
import CmsServices from "../../services/CmsServices";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
    const navigate=useNavigate()
  const initialValues = {
    user_name: "",
    email: "",
    phone_number: "",
    message: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ContactUs,
    onSubmit: (values, action) => {
      handleSubmit(values);
    },
  });

  //   const validationSchema = ;

  const handleSubmit = (values) => {
    console.log(values);
    // Here you can handle the form submission, e.g., send the data to a server
    dataMutate.mutate(values)
    return
  };

  const dataMutate = useMutation(
    (formdata) => CmsServices.ContactUs(formdata),
    {
      onSuccess: (data) => {
        // console.log("data===>", data?.data);
        if (data?.data?.status) {
          toast.success(data?.data?.message, {
            position: "top-center", delay: 10
          });
        
        } else {
          toast.error(data?.data?.message, { position: "top-center", delay: 10 });
          formik.resetForm()
        }
        setTimeout(()=>{
          navigate("/");
        },1000)
        
      },
      onError: (err) => {
        console.log(err);
        toast.error(`🦄 ${err?.response?.data?.message || err?.message}`, {
          position: "top-center",
          delay: 10
        });
      },
    }
  );

  return (
    <main className="my-profile-registry-wrapper">
      <div className="container">
      {
      (dataMutate.isLoading)  ? <Loader/>:     
      <div className="row">
      <div className="col-12 col-md-6 offset-md-3">
        <div className="login-wrap">
          <h3>Contact Us</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
              <label> Name</label>
              <input
                type="text"
                name="user_name"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.user_name}
                id
                //   placeholder="Enter Name"
              />
              {formik.touched.user_name && (
                <p className="text" style={{ color: "#FF7BAC" }}>
                  {formik.errors.user_name}
                </p>
              )}
            </div>

            <div className="form-group mb-3">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone_number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone_number}
                className="form-control"
                id
                //  placeholder="Enter Name"
              />
              {formik.touched.phone_number && (
                <p className="text" style={{ color: "#FF7BAC" }}>
                  {formik.errors.phone_number}
                </p>
              )}
            </div>
            <div className="form-group mb-3">
              <label>Email Address</label>
              <input
                type="text"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="form-control"
                id
                placeholder
              />
              {formik.touched.email && (
                <p className="text" style={{ color: "#FF7BAC" }}>
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div className="form-group mb-3">
              <label>Message</label>
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
                placeholder
              ></textarea>
              <span>{formik?.values.message.length}/ 200</span>
              {formik.touched.message && (
                <p className="text" style={{ color: "#FF7BAC" }}>
                  {formik.errors.message}
                </p>
              )}
            </div>
            <div className="form-group login-submit-btn">
              <input
                className="btn purple-btn"
                type="submit"
                name
                defaultValue="Submit"
                value={"Submit"}
                disabled={dataMutate.isLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    }
   
      </div>
    </main>
  );
};

export default ContactForm;
