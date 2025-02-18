import React from 'react'

const WishlistWrapper = ({ userData, token }) => {
  return (
    <section className="wishlist-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 p-0">
            <div className="wishlist-left">
              <img
                className="img-fluid"
                src="/assets/images/wishlist-left-img1.jpg"
                alt
              />
              <div className="create-wishlist-content">
                <div className="comon-title">
                  <h3>
                    <strong>Create</strong> <br /> A Wishlist
                  </h3>
                </div>
                <p>Just a couple steps to start adding gifts.</p>
                {
                  (userData && token) ? <a className="btn purple-btn" href="/">
                    Get Started
                  </a> : <a className="btn purple-btn" href="/register">
                    Get Started
                  </a>
                }

              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-0">
            <div className="wishlist-right">
              <img
                className="img-fluid"
                src="/assets/images/wishlist-right-img1.jpg"
                alt
              />
              <div className="create-wishlist-content">
                <div className="comon-title">
                  <h3>
                    <strong>Find</strong> <br /> Your Wishlist
                  </h3>
                </div>
                <p>Give the perfect gift to your favourite people.</p>
                {
                  (userData && token) ? <a className="btn purple-btn" href="/wishlist/search/">
                    Find A Wishlist
                  </a> : <a className="btn purple-btn" href="/login">
                    Find A Wishlist
                  </a>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WishlistWrapper