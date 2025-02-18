import React from 'react'

const PersonalMeaningfulWrapper = () => {
  return (
    <section className="personal-meaningful-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1">
          <div className="personal-meaningful-inner">
            <img
              className="img-fluid"
              src="/assets/images/personal-meaningful-img1.png"
              alt
            />
            <div className="personal-meaningful-content">
              <div className="icon">
                <img
                  className="img-fluid"
                  src="/assets/images/meaningful-icon.png"
                  alt
                />
              </div>
              <div className="comon-title">
                <h3>
                  <strong>Gyfties: Empower Wishes</strong> <br />
                </h3>
                <p>Unwrap Your Dreams: Share, Shop, and Spoil Yourself with Your Personal Wishlist </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PersonalMeaningfulWrapper