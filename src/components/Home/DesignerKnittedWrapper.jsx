import React from 'react'

const DesignerKnittedWrapper = ({userData,token}) => {
  return (
    <section className="designer-knitted-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-4">
              <div className="designer-knitted-img">
                <img
                  className="img-fluid"
                  src="/assets/images/designer-knitted-img1.png"
                  alt
                />
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="designer-knitted-right-content">
                <div className="comon-title mb-4">
                  <h3>
                    <strong>Designer</strong> <br />
                    Knitted Clothing
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et
                  dolore magna aliquyam erat, sed diam voluptua.
                </p>
                {
                  (token && userData)? <a className="btn btn-danger" href="/">
                  Get Started
                </a>: <a className="btn btn-danger" href="/register">
                  Get Started
                </a>
                }
               
                <h6>
                  Some <a href="#">Restrictions Apply.</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DesignerKnittedWrapper