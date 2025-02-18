import { useFormik } from "formik";
import React, { useContext } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import { WishlistCollab } from "../../helper/ValidationHelper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import UserServices from "../../services/UserServices";
import WishlistServices from "../../services/WishlistServices";
import { UserContext } from "../Context/UserContext";
import StorageHelper from "../../helper/StorageHelper";
import Loader from "../../helper/Loader/Loader";

const UserWishlistCollab = () => {
  const id=StorageHelper.getUserData()?.id

  const refetchData=useQueryClient()
  
  const formik = useFormik({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      url: "",
      id:id
    },
    validationSchema: WishlistCollab,
    onSubmit: (values,action) => {
      console.log("Value",values)
      handleSubmit(values);
      // action.resetForm()
      return;
    },
  }); 
  const handleSubmit=(values)=>{
    values.id=id
    console.log("ff",values)
    // toast.success("Invited Successfully")
    UserInvite.mutate(values)
    return
  }

  const UserInvite = useMutation(
    (formData) => WishlistServices.UserWishlistInvite(formData),
    {
      onSuccess: (data) => {
        console.log("UserProfileImageRemove", data?.data);
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
          formik.resetForm()
          // refetchData.invalidateQueries("user-profile");
          // refetchData.refetchQueries("user-profile");
          // setImg(null)
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

   return (
    <>
    
      <main className="my-profile-registry-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 mb-3">
              <div className="registry-sidebar">
                <div className="sidemenu">
                  <ul>
                    <li>
                      <a href="/user/profile">Account Info</a>
                    </li>
                    <li>
                      <a href="/user/profile/wishlistinfo">Wishlist Info</a>
                    </li>
                    <li className="active">
                      <a href="/user/profile/wishlistcollaborate">
                        Wishlist Collaborators
                      </a>
                    </li>
                    <li>
                        <a href="/bookmark/add">Add to Browser</a>
                      </li>
                    {/* <li>
                      <a href="/user/profile/shippingaddress">
                        Shipping Address
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="my-registry-right-wrap">
                <div className="comon-title mb-4">
                  <h4>Wishlist Collaborators</h4>
                  <hr />
                  <p>
                    Collaborators can add, edit and delete items from your
                    wishlist.{" "}
                  </p>
                </div>
                {
                  UserInvite?.isLoading ?<Loader/>:<div className="setting-form-wrap">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                      <div className="col-12 mb-4">
                        <div className="comon-title">
                          <h4>Invite Collaborator</h4>
                          <hr />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <div className="form-group">
                          <label>Collaborator's First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            // placeholder="Enter First Name"
                            name="first_name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.first_name}
                          />
                        </div>
                        {formik.touched.first_name && (
                            <p className="text-danger">
                              {formik.errors.first_name}
                            </p>
                          )}
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <div className="form-group">
                          <label>Collaborator's Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            // placeholder="Enter Last Name"
                            defaultValue="roy"
                            name="last_name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.last_name}
                          />
                        </div>
                        {formik.touched.last_name && (
                            <p className="text-danger">
                              {formik.errors.last_name}
                            </p>
                          )}
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <div className="form-group">
                          <label>Collaborator's Email Address</label>
                          <input
                            type="text"
                            className="form-control"
                            // placeholder="Enter Email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}                          />
                        </div>
                      </div>
                      {formik.touched.email && (
                            <p className="text-danger">
                              {formik.errors.email}
                            </p>
                          )}
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="submit"

                            className="btn purple-btn px-5"
                            defaultValue="Invite"
                            value={"Invite"}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                }
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UserWishlistCollab;
