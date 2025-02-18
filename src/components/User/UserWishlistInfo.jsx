import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import {
  UserProfileValidation,
  WshlistValidation,
} from "../../helper/ValidationHelper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import StorageHelper from "../../helper/StorageHelper";
import UserServices from "../../services/UserServices";
import { UserContext } from "../Context/UserContext";
import { Flip, toast } from "react-toastify";
import Loader from "../../helper/Loader/Loader";
import ParentComponent from "../Utilities/DobSelect";
import moment from "moment/moment";

const UserWishlistInfo = () => {
  const user = StorageHelper.getUserData();
  const { setUserData, userData } = useContext(UserContext);
  const refetchData = useQueryClient();
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [termsCheck,setTermCheck]=useState(false)

  const handleTermChecked=(e)=>{
    console.log("E.target",e?.target?.checked)
    setTermCheck(e?.target?.checked)
  }

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setDay(""); // Reset day when month changes
  };

  const handleDayChange = (e) => setDay(e.target.value);
  const handleYearChange = (e) => {
    setYear(e.target.value);
    setDay(""); // Reset day when year changes
  };

  const getFormattedDate = (year, month, day) => {
    if (year && month && day) {
      return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
        2,
        "0"
      )}`;
    }
    return "";
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      profile_img: "",
      wishlist_title: "",
      wishlist_greetings: "",
      url: "",
      dob:""
    },
    validationSchema: WshlistValidation,
    onSubmit: (values, action) => {
      submitHandler(values);
      // action.resetForm()
      return;
    },
  });
  const { isLoading } = useQuery(
    ["user-profile-wishlist", user?.id],
    () => UserServices.GetOneUser(user?.id),
    {
      enabled: !!user?.id,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log("Data", data?.data?.user);
        const dob = data?.data?.user?.dob;
        const dateMoment = moment.utc(dob);
        const year = dateMoment.year();
        const month = dateMoment.month() + 1; // Months are zero-based in Moment.js
        const day = dateMoment.date();
        setMonth(month);
        setDay(day);
        setYear(year);
        formik.setFieldValue("email", data?.data?.user?.email);
        formik.setFieldValue("first_name", data?.data?.user?.first_name);
        formik.setFieldValue("last_name", data?.data?.user?.last_name);
        formik.setFieldValue(
          "wishlist_title",
          data?.data?.user?.wishlist_title
        );
        formik.setFieldValue(
          "wishlist_greetings",
          data?.data?.user?.wishlist_greetings
        );
        formik.setFieldValue(
          "url",
          `${window.location.href
            .split("/")
            .slice(0, 3)
            .join("/")}/wishlist/search/${data?.data?.user?.sharelink}`
        );
        StorageHelper.setUserData(data?.data?.user);
        setUserData(data?.data?.user);

        return data?.data?.user;
      },
      onError: (error) => {
        console.log("ERROR", error);
      },
    }
  );
  const [doberr,setDoberr]=useState("")

  const submitHandler = (formValues) => {
    setDoberr("")
    const formateDob = getFormattedDate(year, month, day);
    const currentDate = moment.utc();
    const dobDate = moment.utc(formateDob, 'YYYY-MM-DD');



    if(!year || !month || !day){
      setDoberr("Date of birth required")
      return
    }


    if(dobDate.isAfter(currentDate)){
      setDoberr("Birth date can't be in future")
      return
    }
    if(!termsCheck){
      toast.error("Please check the checkbox")
      return
    }
    // console.log("Formvalues", formValues, formateDob);
    const formdata = new FormData();
    formdata.append("email", formValues?.email);
    formdata.append("first_name", formValues?.first_name);
    formdata.append("last_name", formValues?.last_name);
    formdata.append("wishlist_greetings", formValues?.wishlist_greetings);
    formdata.append("wishlist_title", formValues?.wishlist_title);
    formdata.append("profile_img", formValues?.profile_img);
    formdata.append("dob", formateDob);
    formdata.append("id", user?.id);
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
          refetchData.invalidateQueries("user-profile-wishlist");
          refetchData.refetchQueries("user-profile-wishlist");

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
          refetchData.invalidateQueries("user-profile-wishlist");
          refetchData.refetchQueries("user-profile-wishlist");
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
        {updateUser?.isLoading || isLoading ? (
          <Loader />
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3 mb-3">
                <div className="registry-sidebar">
                  <div className="sidemenu">
                    <ul>
                      <li>
                        <a href="/user/profile">Account Info</a>
                      </li>
                      <li className="active">
                        <a href="/user/profile/wishlistinfo">Wishlist Info</a>
                      </li>
                      <li>
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
                    <h4>Wishlist Info</h4>
                    <hr />
                  </div>
                  <div className="setting-form-wrap">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                          <div className="form-group">
                            <label>First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder
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
                            <label>Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder
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
                            <label>Email Address</label>
                            <input
                              type="text"
                              name="email"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}
                              className="form-control"
                              disabled
                              placeholder
                              // defaultValue="somenath.roy@sbinfowaves.com"
                            />
                          </div>
                        </div>
                        {/* <div className="col-12 col-md-6 mb-3">
                        <div className="form-group">
                          <label>Partner's First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder
                            defaultValue="som"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <div className="form-group">
                          <label>Partner's Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder
                            defaultValue="roy"
                          />
                        </div>
                      </div> */}
                        {/* <div className="col-12 mb-3">
                        <div className="comon-checkbox-group">
                          <input type="checkbox" id="invite_partner_wishlist" />
                          <label htmlFor="invite_partner_wishlist">
                            Invite my partner to edit our Wishlist
                          </label>
                        </div>
                      </div> */}
                        <div className="col-12 col-md-8">
                          <div className="form-group">
                            <label>
                              Anniversary of your grand entrance onto this
                              planet
                            </label>
                            {/* <div className="row">
      <div className="col-12 col-md-4 mb-3">
        <select className="form-select">
          <option value="">Month</option>
          {months.map(month => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>
      <div className="col-12 col-md-4 mb-3">
        <select className="form-select">
          <option value="">Day</option>
          {days.map(day => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <div className="col-12 col-md-4 mb-3">
        <select className="form-select">
          <option value="">Year</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div> */}
                            <ParentComponent
                              month={month}
                              day={day}
                              year={year}
                              handleDayChange={handleDayChange}
                              handleYearChange={handleYearChange}
                              handleMonthChange={handleMonthChange}
                            />
                            {
                              <p className="text-danger">{doberr}</p>
                            }
                          </div>
                        </div>
                        <div className="col-12 col-md-12 mb-3">
                          <div className="form-group">
                            <label>Wishlist Title</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder
                              name="wishlist_title"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.wishlist_title}
                            />
                          </div>
                          {formik.touched.wishlist_title && (
                            <p className="text-danger">
                              {formik.errors.wishlist_title}
                            </p>
                          )}
                        </div>
                        <div className="col-12 col-md-12 mb-3">
                          <div className="form-group">
                            <label>Wishlist Url</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder
                              name="sharelink"
                              disabled
                              value={formik.values.url}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-12 mb-3">
                          <div className="form-group">
                            <label>Wishlist Greeting</label>
                            <textarea
                              className="form-control"
                              rows={5}
                              defaultValue={""}
                              name="wishlist_greetings"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.wishlist_greetings}
                            />
                          </div>
                          {formik.touched.wishlist_greetings && (
                            <p className="text-danger">
                              {formik.errors.wishlist_greetings}
                            </p>
                          )}
                        </div>
                        <div className="col-12 mt-4">
                          <div className="comon-title mb-4">
                            <h4>Wishlist Preferences</h4>
                            <hr />
                          </div>
                        </div>
                        <div className="col-12 mb-3">
                          {/* <div className="comon-checkbox-group">
                          <input type="checkbox" id="possible_automatically" />
                          <label htmlFor="possible_automatically">
                            When possible, automatically show multiple stores
                            that offer an item.
                          </label>
                        </div> */}
                        </div>
                        <div className="col-12 mb-3">
                          <div className="comon-checkbox-group">
                            <input type="checkbox" id="keep_my_wishlist" onClick={handleTermChecked} />
                            <label htmlFor="keep_my_wishlist">
                              Keep my wishlist up-to-date with the most recent
                              prices of items
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              className="btn purple-btn px-5"
                              defaultValue="Save"
                              value={"Save"}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default UserWishlistInfo;
