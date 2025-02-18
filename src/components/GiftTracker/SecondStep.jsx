import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { ContactUs, SecondStepForm } from "../../helper/ValidationHelper";
import { Button, Tooltip } from 'reactstrap';

const SecondStep = ({ prevStep, nextStep,showBackBtn,formData,setFormData }) => {
  const initialValues = {
    user_name: "",
    email: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SecondStepForm,
    onSubmit: (values, action) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (data) => {
    console.log("Data", data);
    setFormData({...formData,...data})
    nextStep();
  };
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  useEffect(()=>{
    console.log("formData",formData)
    if(Object.keys(formData).length>0){

      formik.setFieldValue("user_name",formData?.user_name)
      formik.setFieldValue("email",formData?.email)
      return
    }
  },[formData])
  
  return (
    <>
      {/* <div> */}
      <div className="heading">
        <h3>Sweet! 🎉 Who is this from?</h3>
      </div>
      <div className="row">
        <div className="col-12 col-md-12">
          {/* <div className="login-wrap"> */}
          
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

            <div className="checkbox comon-checkbox-group">
                <input
                  label="Keep this gift a surprise."
                  name="isSurprise"
                  type="checkbox"
                  defaultValue
                  id="gift_surprise"
                />
              <label htmlFor="gift_surprise" title> Keep this gift a surprise. 

                <Button className="tooltip-btn" id={'Tooltip-'}>
                  <i class="fa-solid fa-info"></i>
                </Button>
                <Tooltip
                  placement={"top"}
                  isOpen={tooltipOpen}
                  target={'Tooltip-'}
                  toggle={toggle}
                >
                  If you check this box, we'll mark your gift as purchased and hide your info. Dev can choose to reveal the surprise at any time.
                </Tooltip>
                 
              </label>
             
            </div>

            <div className="form-group button-wrap">
                            
              <button type="submit" className="btn purple-btn px-5">
                Next
              </button>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
      <div className="back-btn-wrap">
          {
            <button className="btn" onClick={() => prevStep()}>
              <i class="fa-solid fa-chevron-left"></i>
            </button>
          }
      </div>
      {/* </div> */}
    </>
  );
};

export default SecondStep;
