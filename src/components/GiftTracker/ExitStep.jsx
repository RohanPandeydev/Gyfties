import React from 'react'
import { Col, Row } from 'reactstrap'

const ExitStep = ({prevStep,nextStep}) => {
  return (
    <>
    <h5>How "I've Purchased This" works:</h5>
   <p>1. Purchase item from any store 🛍️
  </p>
  <p>2.  Return to Gyfties with your order number and select "I've Purchased This"</p>
   <a href='/' className="btn purple-btn px-5"  >
        Back To Home
      </a>
      {/* <button className="btn btn1 m-2"onClick={()=>nextStep()} >
        Next
      </button> */}
  </>

  )
}

export default ExitStep