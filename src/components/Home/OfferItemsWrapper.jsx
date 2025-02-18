import React from 'react'

const OfferItemsWrapper = () => {
  return (
    <section className="offer-items-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-4">
              <div className="offer-items-img">
                <img
                  className="img-fluid"
                  src="/assets/images/offer-items-img1.png"
                  alt
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="offer-items-right-content">
                <div className="comon-title">
                  <h3>
                    <strong>Up to 40% off</strong> <br />
                    on all items.
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et
                  dolore magna aliquyam erat, sed diam voluptua.{" "}
                </p>
                <a className="btn btn-danger" href="#" onClick={()=>alert("Feature will add soon")}>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default OfferItemsWrapper