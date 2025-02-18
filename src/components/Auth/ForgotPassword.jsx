import { useFormik } from 'formik';
import React, { useState } from 'react'
import { EmailValidation, LoginValidation } from '../../helper/ValidationHelper';
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query";
import AuthServices from "../../services/AuthServices";
import { toast } from 'react-toastify';
import Loader from '../../helper/Loader/Loader';

const ForgotPassword = () => {
  const [loader, setLoader] = useState(true);
    const nav=useNavigate()
    const formik = useFormik({
        initialValues: { credential: "" },
        validationSchema: EmailValidation,
        onSubmit: (values, action) => {
          submitHandler(values);
          return;
        },
      });

      const submitHandler = (formValues) => {
        console.log("Values", formValues);
        mutation.mutate(formValues)

      };


      const mutation = useMutation(
        (formdata) => AuthServices.Otp(formdata),
    
        {
          onSuccess: (data) => {
            setLoader(false);
            
    
            console.log("Data==>", data?.data);
            // StorageData.setToken(data?.data?.authToken);
            // localStorage.setItem(
            //   "sbsales_crm_admin_details",
            //   JSON.stringify(data?.data?.data?.user)
            // );
            toast.success(data?.data?.message, {
              position: "top-center",
            });
            // //console.log("==>",formik.values)
            nav("/forgotpassword/"+btoa(formik.values?.credential))
            formik.resetForm()
            setLoader(true);
            return;
          },
          onError: (err) => {
            setLoader(true);
            // //console.log(err.response?.data?.error);
            toast.error(err?.response?.data?.message || err?.message, {
              delay: 10,
            });
            return;
          },
        }
      );
  return (
    <>
       
       <section className="login-wrapper">
       {(mutation.isLoading || !loader) ? <Loader />:   <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <div className="login-wrap">
                <h3>Forgot Password </h3>
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group mb-3">
                    <label> Email address *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="credential"
                      placeholder="example@gmail.com"
                      value={formik.values.credential}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.credential && (
                      <p className="text" style={{ color: "#FF7BAC" }}>
                        {formik.errors.credential}
                      </p>
                    )}
                  </div>
                  
                  <div className="form-group login-submit-btn">
                    <input
                      className="btn purple-btn"
                      type="submit"
                      disabled={mutation.isLoading || !loader}
                      value={"Send OTP"}
                      defaultValue="Send OTP"
                    />
                  </div>
                
                </form>
              </div>
            </div>
          </div>
        </div>
       }
     
      </section>
    
    </>
  )
}

export default ForgotPassword