import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { EmailValidation, ResetFormValidation } from '../../helper/ValidationHelper';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import AuthServices from '../../services/AuthServices';

const ResetPassword = () => {
  const [loader, setLoader] = useState(true);

    const nav=useNavigate()
    const {eid,otp}=useParams()
    const [emailValue, setEmailValue] = useState("")
    const [otpValue, setOtpValue] = useState("")


      const formik = useFormik({
        initialValues: { password: "", confirmPassword: "" },
        validationSchema: ResetFormValidation,
        onSubmit: (values, action) => {
            SubmitHandler(values);
        },
    });
    const SubmitHandler = (data) => {
        // console.log("===>", data)
        // window.location.assign("/login")
        resetPassword.mutate({
          otp:otpValue,
          newPassword:data?.password
        })
        
    }

    const resetPassword = useMutation(
      (formdata) => AuthServices.resetPassword(formdata),

      {
          onSuccess: (data) => {
              setLoader(false);

              // console.log("Data==>", data?.data);
              if (!data?.data?.status) {
                  toast.error(data?.data?.message, { delay: 10 })
                  setLoader(true);
                  return
              }
              // StorageData.setToken(data?.data?.authToken);
              // localStorage.setItem(
              //   "sbsales_crm_admin_details",
              //   JSON.stringify(data?.data?.data?.user)
              // );
              toast.success(data?.data?.message, {
                  position: "top-center",
              });
              // nav('/resetpassword/' + btoa(emailValue) + "/" + btoa(otp))
              setTimeout(()=>{
                  window.location.replace('/login')
              },100)
              setLoader(true);
              return;
          },
          onError: (err) => {
              setLoader(true);

              // console.log(err.response?.data?.error);
              toast.error(err?.response?.data?.message || err?.message, {
                  delay: 10,
              });
              return;
          },
      }
  );

    useEffect(() => {
        try {
            const decodedUserId = atob(eid);
            // console.log("Decoded user ID:", decodedUserId);
            setEmailValue(() => decodedUserId)
        } catch (error) {
            console.error("Error decoding user ID:", error.message);
            toast.error("Invalid Email", { delay: 10 })
            setTimeout(() => {
                nav("/forgotpassword")
            }, 1000)

            // Handle the error gracefully, e.g., display an error message to the user
        }
    }, [eid]);
    useEffect(() => {
        try {
            const decodedUserId = atob(otp);
            // console.log("Decoded user ID:", decodedUserId);
            setOtpValue(() => decodedUserId)
        } catch (error) {
            console.error("Error decoding user ID:", error.message);
            toast.error("Invalid Otp", { delay: 10 })
            setTimeout(() => {
                nav("/forgotpassword")
            }, 1000)

            // Handle the error gracefully, e.g., display an error message to the user
        }
    }, [otp]);
  return (
    <> <section className="login-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <div className="login-wrap">
            <h3>Create New Password</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group mb-3">
                <label> Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="*******"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && (
                  <p className="text" style={{ color: "#FF7BAC" }}>
                    {formik.errors.password}
                  </p>
                )}
              </div>
              <div className="form-group mb-3">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                    placeholder="*******"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.confirmPassword && (
                  <p className="text" style={{ color: "#FF7BAC" }}>
                    {formik.errors.confirmPassword}
                  </p>
                )}
              </div>
              
              <div className="form-group login-submit-btn">
                <input
                  className="btn purple-btn"
                  type="submit"
                  value={"Submit"}
                  defaultValue="Submit"
                />
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  </section></>
  )
}

export default ResetPassword