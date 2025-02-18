import React from 'react'

const AnythingStoreWrapper = ({ userData, token }) => {
  return (
    <section className="anything-store-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 mb-4">
                <div className="anything-store-content">
                  <div className="comon-title">
                    <h3>
                      <strong>Anything</strong> <br />
                      From Any Store
                    </h3>
                  </div>
                  <p>
                    Your wishlist, your way. Add anything from any store on your wishlist and be ready to get gifts you love.
                  </p>
                  {
                    (token && userData) ? <a className="btn btn-danger" href="/">
                      Create a  Wishlist                  </a> :
                      <a className="btn btn-danger" href="/login">
                        Create a  Wishlist{" "}
                      </a>}
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <div className="anything-store-img">
                  <img
                    className="img-fluid"
                    src="/assets/images/anything-store-img1.png"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnythingStoreWrapper