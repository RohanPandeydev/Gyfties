import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useContext } from "react";
import AuthServices from "../../services/AuthServices";
import StorageHelper from "../../helper/StorageHelper";
import { Flip, ToastContainer, toast } from "react-toastify";
import { LoginValidation } from "../../helper/ValidationHelper";
import Swal from "sweetalert2";
import UserServices from "../../services/UserServices";
import { useLocation } from "react-router-dom";

const Login = () => {
  // const {setToken,setUserData,}=useContext(UserContext)
  const loc=useLocation()

  console.log("loc",loc)

  const formik = useFormik({
    initialValues: { credential: "", password: "" },
    validationSchema: LoginValidation,
    onSubmit: (values, action) => {
      submitHandler(values);
      return;
    },
  });

  const submitHandler = (formValues) => {
    console.log("Values", formValues);
    return dataMutate.mutate(formValues);
  };

  const dataMutate = useMutation((formData) => AuthServices.Login(formData), {
    onSuccess: (data) => {
      console.log("Login Data", data?.data);

      if (data?.data?.status) {
        if (data?.data?.user?.is_deleted) {
          Swal.fire({
            title: "Account Activation Confirmation",
            text: "Are you sure you want to activate your account? your account deactivated on " + new Date(data?.data?.user?.updatedAt).toLocaleDateString(),
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Activate Account",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#d33", // Customize the button color if needed
            cancelButtonColor: "#3085d6", // Customize the button color if needed
          }).then((result) => {
            if (result.isConfirmed) {
              StorageHelper.setUserData(data?.data?.user);
              StorageHelper.setToken(data?.data?.token);
              UserAccountStatusChange.mutate({ id: data?.data?.user?.id })
              setTimeout(() => window.location.replace("/"), 2000);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              StorageHelper.removeStorageData();
              setTimeout(() => window.location.replace("/login"), 100);
            }
          });
          return;
        }
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
        StorageHelper.setUserData(data?.data?.user);
        StorageHelper.setToken(data?.data?.token);
        window.location.replace(loc?.state?.path ||"/bookmark/add");
        setTimeout(() => window.location.replace(loc?.state?.path ||"/"), 2000);
        return
      } else {
        console.log(data?.data?.message,"==")
        toast.error("verify your account with valid credentials");
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
  });


  const UserAccountStatusChange = useMutation(
    (formData) => UserServices.UserAccountStatusChange(formData),
    {
      onSuccess: (data) => {
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
          return true;
          // window.alert("Updated successfully");
        } else {
          toast.error(data?.data?.message, {
            position: "top-center",
          
          });
          return false;
        }
      },
      onError: (err) => {
        toast.error(err?.response?.message || err?.message, {
          position: "top-center",
         
        });
        return false;
      },
    }
  );
  return (
    <>
        
      <section className="login-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <div className="login-wrap">
                <h3>Log In </h3>
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
                  <div className="form-group mb-3">
                    <label>Password *</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="**********"
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
                  <div className="form-group login-submit-btn">
                    <input
                      className="btn purple-btn"
                      type="submit"
                      value="submit"
                      defaultValue="Log In"
                    />
                  </div>
                  <div className="form-group lost_password">
                    <p>
                      Forgot your password? <a href="/forgotpassword">Request a new one</a>
                    </p>
                    <p>
                      Don't have a Gyfties account?{" "}
                      <a href="/register">Create one now</a>
                    </p>
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

export default Login;
