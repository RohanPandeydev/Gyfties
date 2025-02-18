import React from 'react'
import { Col, Row } from 'reactstrap'
import config from '../../../config'

const FirstStep = ({wishlistDetails,handleToggle,setStep}) => {
  return (
    <>
    <div className="heading">
        <h3>Did you already purchase this?</h3>
    </div>
    <Row  className="align-items-center mb-4">
        <Col className="col-md-3">
          <img
                  className="img-fluid"
                  src={
                    wishlistDetails?.productImageUrl.includes(
                      "amazon" || "Amazon"
                    )
                      ? wishlistDetails?.productImageUrl :
                      wishlistDetails?.productImageUrl.includes(
                        "ebay" || "Ebay"
                      ) ? wishlistDetails?.productImageUrl :
                        wishlistDetails?.productImageUrl.includes(
                          "walmart" || "Walmart"
                        ) ? wishlistDetails?.productImageUrl
                          : config.apiUrl +
                          "/" +
                          wishlistDetails?.productImageUrl
                  }
                  alt
                />
      </Col>
      <Col className="col-md-9">
        <p>{
            wishlistDetails?.productTitle
        }</p>
      </Col>
    
    </Row>
    <div className="button-wrap">
        <Row>
          <Col className="col-6">
            <button className="btn purple-outline-btn px-5" onClick={()=>handleToggle(false)} > Not Yet </button>
          </Col>
          <Col className="col-6">
            <button className="btn purple-btn px-5"onClick={()=>handleToggle(true)} > Yes </button>
          </Col>
        </Row>
    </div>
      
  </>
  )
}

export default FirstStep