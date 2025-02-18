import { useFormik } from "formik";
import React from "react";
import AuthServices from "../../services/AuthServices";
import { useMutation } from "@tanstack/react-query";
import { Flip, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RegisterValidation } from "../../helper/ValidationHelper";
import Loader from "../../helper/Loader/Loader";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [loader,setLoader]=useState(false)
  const formik = useFormik({
    initialValues: {
      credential: "",
      password: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      dob: "",
    },
    validationSchema: RegisterValidation,
    onSubmit: (values, action) => {
      submitHandler(values);
      return;
    },
  });
  const submitHandler = (formValues) => {
    setLoader(true)
    console.log("Values", formValues);
    return dataMutate.mutate(formValues);
  };
  const dataMutate = useMutation(
    (formdata) => AuthServices.Register(formdata),
    {
      onSuccess: (data) => {
        setLoader(false)
        // console.log("data===>", data?.data);
        if (data?.data?.status) {
          toast.success(data?.data?.message, {
            position: "top-center", delay: 10
          });
        
        } else {
          toast.error(data?.data?.message, { position: "top-center", delay: 10 });
        }
        setTimeout(()=>{
          navigate("/login");
        },1000)
        
      },
      onError: (err) => {
        setLoader(false)
        console.log(err);
        toast.error(`🦄 ${err?.response?.data?.message || err?.message}`, {
          position: "top-center",
          delay: 10
        });
      },
    }
  );
  return (
    <>
    
    {
      (dataMutate.isLoading|| loader)  && <Loader/>
    }
   
      <section className="login-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <div className="login-wrap">
                <h3>
                  We're excited too! <br />
                  Let's create your wishlist together.
                </h3>
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group mb-3">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      className="form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.first_name}
                      id
                      placeholder
                    />
                    {
                      formik.touched.first_name && <p className="text" style={{ color: '#FF7BAC' }}>{formik.errors.first_name}</p>
                    }
                  </div>
                  <div className="form-group mb-3">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      className="form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.last_name}
                      id
                      placeholder
                    />
                    {
                      formik.touched.last_name && <p className="text" style={{ color: '#FF7BAC' }}>{formik.errors.last_name}</p>
                    }
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
                      placeholder
                    />
                    {
                      formik.touched.phone_number && <p className="text" style={{ color: '#FF7BAC' }}>{formik.errors.phone_number}</p>
                    }
                  </div>
                  <div className="form-group mb-3">
                    <label>Email Address</label>
                    <input
                      type="text"
                      name="credential"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.credential}
                      className="form-control"
                      id
                      placeholder
                    />
                    {
                      formik.touched.credential && <p className="text" style={{ color: '#FF7BAC' }}>{formik.errors.credential}</p>
                    }
                  </div>
                  <div className="form-group mb-3">
                    <label>Birthday</label>
                    <input
                      type="date"
                      name="dob"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.dob}
                      // max={new Date().toLocaleString()}
                      className="form-control"
                      id
                      placeholder
                    />
                    {
                      formik.touched.dob && <p className="text" style={{ color: '#FF7BAC' }}>{formik.errors.dob}</p>
                    }
                  </div>
                  <div className="form-group mb-3">
                    <label>Password *</label>
                    <input
                      type="password"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      className="form-control"
                      id
                      placeholder="**********"
                    />
                    {
                      formik.touched.password && <p className="text" style={{ color: '#FF7BAC' }}>{formik.errors.password}</p>
                    }
                  </div>
                  <div className="form-group mb-3">
                    {/* <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember_me"
                      />
                      <label className="form-check-label" htmlFor="remember_me">
                        Remember me
                      </label>
                    </div> */}
                  </div>
                  <div className="form-group login-submit-btn">
                    <input
                      className="btn purple-btn"
                      type="submit"
                      value={"Sign Up"}
                      defaultValue="Sign Up"
                      disabled={loader}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
