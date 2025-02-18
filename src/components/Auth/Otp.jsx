import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OTPInput from "react-otp-input";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import AuthServices from "../../services/AuthServices";
import Loader from "../../helper/Loader/Loader";

const Otp = () => {
  const nav = useNavigate();
  const { email } = useParams();
  const [loader, setLoader] = useState(true);

  const [otp, setOtp] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("My Otp", otp, otp.length)
    if (otp.length < 4) {
      toast.error("OTP is required");
      return;
    }
    sendOtp.mutate({credential:emailValue,otp:otp})

  
  };

  const mutation = useMutation(
    (formdata) => AuthServices.Otp(formdata),

    {
      onSuccess: (data) => {
        setLoader(false);
        setOtp("")
            // StorageData.setToken(data?.data?.authToken);
        // localStorage.setItem(
        //   "sbsales_crm_admin_details",
        //   JSON.stringify(data?.data?.data?.user)
        // );
        toast.success(data?.data?.message, {
          position: "top-center",
        });
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


const sendOtp = useMutation(
    (formdata) => AuthServices.verifyOtp(formdata),

    {
        onSuccess: (data) => {
            setLoader(false);

            // console.log("Data==>", data?.data);
            if(!data?.data?.status){
                toast.error(data?.data?.message,{delay:10})
                setLoader(true)
                setOtp("")
                return
            }
            nav("/forgotpassword/" + btoa(emailValue) + "/" + btoa(otp));
            // StorageData.setToken(data?.data?.authToken);
            // localStorage.setItem(
            //   "sbsales_crm_admin_details",
            //   JSON.stringify(data?.data?.data?.user)
            // );
            toast.success(data?.data?.message, {
                position: "top-center",
            });
            // nav('/resetpassword/' + btoa(emailValue) + "/" + btoa(otp))
            setLoader(true);
            return;
        },
        onError: (err) => {
            setLoader(true);
            setOtp("")
            settoggleResetPassword(false)

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
      const decodedUserId = atob(email);
      // console.log("Decoded user ID:", decodedUserId);
      setEmailValue(() => decodedUserId);
    } catch (error) {
      console.error("Error decoding user ID:", error.message);
      toast.error("Invalid Email", { delay: 10 });
      setTimeout(() => {
        nav("/forgotpassword");
      }, 1000);

      // Handle the error gracefully, e.g., display an error message to the user
    }
  }, [email]);
  return (
    <>
      <section className="login-wrapper">
      {(sendOtp.isLoading ||mutation.isLoading || !loader) ? <Loader />:   <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <div className="login-wrap">
                <h3>Forgot Password </h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <p className="text-center">
                      OTP will send to <span>{emailValue}</span> <p className="text-primary" onClick={()=>mutation.mutate({credential:emailValue})}>Resend OTP</p>
                    </p>
                    <OTPInput
                      isInputNum={true}
                      containerStyle={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center"
                      }}
                      inputStyle={{
                        // border: "1px solid transparent",
                        borderRadius: "8px",
                        width: "54px",
                        height: "54px",
                        fontSize: "12px",
                        color: "#000",
                        fontWeight: "400",
                        caretColor: "blue",
                      }}
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => (
                        <input
                          {...props} // Add conditional className
                        />
                      )}
                    />
                  </div>

                  <div className="form-group login-submit-btn">
                    <input
                      className="btn purple-btn"
                      type="submit"
                      value={"Sumbit"}
                      defaultValue="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>}
     
      </section>
    </>
  );
};

export default Otp;
