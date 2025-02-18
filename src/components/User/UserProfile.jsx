import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import StorageHelper from "../../helper/StorageHelper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import UserServices from "../../services/UserServices";
import { useFormik } from "formik";
import { Flip, ToastContainer, toast } from "react-toastify";
import { UserContext } from "../Context/UserContext";
import Swal from 'sweetalert2';
import config from "../../../config";
import { UserProfileValidation } from "../../helper/ValidationHelper";
import Loader from "../../helper/Loader/Loader"
const UserProfile = () => {
  const user = StorageHelper.getUserData();
  const { setUserData, userData } = useContext(UserContext);
  const [isLoader,setIsLoader]=useState(false)

  const [img, setImg] = useState(null)
  const refetchData = useQueryClient();
  const formik = useFormik({
    initialValues: { email: "", first_name: "", last_name: "", profile_img: "" },
    validationSchema: UserProfileValidation,
    onSubmit: (values, action) => {
      submitHandler(values);
      action.resetForm()
      return;
    },
  });


  const submitHandler = (formValues) => {
    console.log("Formvalues", formValues)
    const formdata = new FormData()
    formdata.append('email', formValues?.email)
    formdata.append('first_name', formValues?.first_name)
    formdata.append('last_name', formValues?.last_name)
    formdata.append('profile_img', formValues?.profile_img)
    formdata.append('id', user?.id)
    return updateUser.mutate(formdata);
  };
  const updateUser = useMutation(
    (formData) => UserServices.UserUpdate(formData),
    {
      onSuccess: (data) => {
        console.log("Data On Update Profile", data?.data);
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
          refetchData.invalidateQueries("user-profile");
          refetchData.refetchQueries("user-profile");

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
          refetchData.invalidateQueries("user-profile");
          refetchData.refetchQueries("user-profile");
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
  const UserAccountTemporaryDelete = useMutation(
    (formData) => UserServices.UserAccountStatusChange({ id: user?.id }),
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
          setTimeout(() => {
            StorageHelper.removeStorageData()
            window.location.replace('/login')
          }, 2000)


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
  const UserAccountPermanentDelete = useMutation(
    (formData) => UserServices.UserAccountPermanentDelete({ id: user?.id }),
    {
      onSuccess: (data) => {
        console.log("UserAccountPermanentDelete", data?.data);
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
          setTimeout(() => {
            StorageHelper.removeStorageData()
            window.location.replace('/login')
          }, 2000)

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
  const UserProfileImageRemove = useMutation(
    (formData) => UserServices.UserProfileImageRemove({ id: user?.id }),
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
          refetchData.invalidateQueries("user-profile");
          refetchData.refetchQueries("user-profile");
          setImg(null)
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
  const { isLoading } = useQuery(
    ["user-profile", user?.id],
    () => UserServices.GetOneUser(user?.id),
    {
      enabled: !!user?.id,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setIsLoader(true)
        formik.setFieldValue("email", data?.data?.user?.email);
        formik.setFieldValue("first_name", data?.data?.user?.first_name);
        formik.setFieldValue("last_name", data?.data?.user?.last_name);
        StorageHelper.setUserData(data?.data?.user);
        setUserData(data?.data?.user);
        setIsLoader(false)

        return data?.data?.user;
      },
      onError: (error) => {
        console.log("ERROR", error);
        setIsLoader(false)

      },
    }
  );
  // console.log(formik.values)
  const deactivateAccount = () => {
    console.log("user", user?.id)
    Swal.fire({
      title: 'Delete Confirmation',
      text: 'Are you sure you want to delete account?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Permanent',
      cancelButtonText: 'Temporary',
      confirmButtonColor: '#d33', // You can customize the button color
      cancelButtonColor: '#3085d6', // You can customize the button color
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Permanent" button
        UserAccountPermanentDelete.mutate()
        // toast.warn("Feature will add soon")
        // handlePermanentDelete();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // User clicked "Temporary" button or closed the modal
        UserAccountTemporaryDelete.mutate()

        // toast.warn("Feature will add soon")
        // handleTemporaryDelete();
      }
    });
  }
  const handleImage = (e) => {
    if (e?.target?.files.lenght == 0) { return; }
    setImg(URL.createObjectURL(e?.target?.files[0]))
    formik.setFieldValue('profile_img', e?.target?.files[0])
  }
  const getRemoveImage = () => {
    return UserProfileImageRemove.mutate()
  }
  return (
    <>
  <ToastContainer />
      <main className="my-profile-registry-wrapper">
        <div className="container">
          {isLoading || updateUser?.isLoading || !!!formik?.values?.email ? (
            <Loader />
          ) : (
            <div className="row">
              <div className="col-12 col-md-3 mb-3">
                <div className="registry-sidebar">
                  <div className="sidemenu">
                    <ul>
                      <li className="active">
                        <a href="/user/profile">Account Info</a>
                      </li>
                      <li>
                        <a href="/user/profile/wishlistinfo">Wishlist Info</a>
                      </li>
                      {/* <li>
                        <a href="/user/registry">wishlist Info</a>
                      </li> */}
                      <li>
                        <a href="/user/profile/wishlistcollaborate">
                          Wishlist Collaborators
                        </a>
                      </li>
                      {/* <li>
                        <a href="/user/profile/shippingaddress">
                          Shipping Address
                        </a>
                      </li> */}
                      <li>
                        <a href="/bookmark/add">Add to Browser</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-9">
                <div className="my-registry-right-wrap">
                  <div className="comon-title mb-4">
                    <h4>Account Info</h4>
                    <hr />
                  </div>
                  <div className="setting-form-wrap">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="row">
                        <div className="col-12 col-md-3 mb-3">
                          <div className="form-group">
                            <label>Profile Image</label>
                            <div className="picUpload">
                              <label htmlFor="picFile">
                                <input
                                  type="file"
                                  name="profile_img"
                                  onChange={handleImage}
                                  className="form-control"
                                  id="picFile"
                                  accept=".jpg,.jpeg,.png"                                />
                                <span>
                                  <img src={img || userData && !!userData?.profile_img && config.apiUrl + "/" + userData.profile_img || "/assets/images/auth-img1.jpg"} alt="" />
                                </span>
                              </label>
                              <div className="picRemove">
                                {
                                  userData?.profile_img && <button type="button" className="delete-btn" onClick={getRemoveImage}>
                                    <i class="fa-solid fa-xmark"></i>
                                    {/* Remove Profile image */}
                                  </button>
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-9 mb-3">
                          <div className="row">
                            <div className="col-12 col-md-6 mb-3">
                              <div className="form-group">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  name="first_name"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.first_name}
                                  className="form-control"
                                  placeholder
                                // defaultValue="Somenath"
                                />
                                {
                                  formik.touched.first_name && <p className="text-danger">{formik.errors.first_name}</p>
                                }
                              </div>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                              <div className="form-group">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  name="last_name"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.last_name}
                                  className="form-control"
                                  placeholder
                                // defaultValue="roy"
                                />
                                {
                                  formik.touched.last_name && <p className="text-danger">{formik.errors.last_name}</p>
                                }
                              </div>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                              <div className="form-group">
                                <label>Email Address</label>
                                <input
                                  type="text"
                                  name="email"
                                  // onChange={formik.handleChange}
                                  // onBlur={formik.handleBlur}
                                  value={formik.values.email}
                                  className="form-control"
                                  disabled
                                  placeholder
                                // defaultValue="somenath.roy@sbinfowaves.com"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="col-12 mt-4">
                          <div className="comon-title mb-4">
                            <h4>Change Password</h4>
                            <hr />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                          <div className="form-group">
                            <label>New Password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder
                              defaultValue
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                          <div className="form-group">
                            <label>Verify New Password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder
                              defaultValue
                            />
                          </div>
                        </div>
                        <div className="col-12 mt-4">
                          <div className="comon-title mb-4">
                            <h4>Deactivate Account</h4>
                            <hr />
                          </div>
                        </div>
                        <div className="col-12 mb-3">
                          <div className="comon-checkbox-group">
                            <input type="checkbox" id="deactivate_account" />
                            <label htmlFor="deactivate_account">
                              Deactivate Your Account
                            </label>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                          <div className="form-group">
                            <label>Current Password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder
                              defaultValue={123456789}
                            />
                            <small>
                              For your security, you must verify your password
                              to save changes.
                            </small>
                          </div>
                        </div> */}
                        <div className="col-12">
                          <div className="row">
                            <div className="col-6">
                              <div className="form-group">
                                <input
                                  disabled={updateUser?.isLoading}
                                  type="submit"
                                  className="btn purple-btn px-5"
                                  defaultValue="Save"
                                  value="Submit"
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-group">
                                <input
                                  type="button"
                                  className="btn purple-btn px-5"
                                  defaultValue="Deactivate"
                                  onClick={deactivateAccount}
                                />
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default UserProfile;
