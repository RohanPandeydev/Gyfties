import React from 'react'
import { NavLink } from 'react-router-dom'

const Bannerwrapper = ({userData,token}) => {
  return (
    <section className="banner-wrapper">
    <img className="img-fluid" src="/assets/images/banner-img1.jpg" alt />
    <div className="banner-content-wrap">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="banner-content">
              <h3>
              <strong>Empower your gifting : Your Wishlist, Your Way!</strong>
              </h3>
           {   (token && userData)?
              <ul className="banner-btn">
                
                <li>
                

                  <NavLink className="btn btn-banner" to="/bookmark/add" target="_blank">
                    Start Your wishlist
                  </NavLink>
                  
                </li>
                <li>
                  <NavLink className="btn btn-outline-banner" to="/wishlist/search/">
                    Find a Wishlist
                  </NavLink>
                </li>
              </ul>
:
<ul className="banner-btn">
                
                <li>
                  <NavLink className="btn btn-banner" to="/login" target="_blank">
                    Start Your wishlist
                  </NavLink>
                  
                </li>
                <li>
                  <NavLink className="btn btn-outline-banner" to="/login">
                    Find a Wishlist
                  </NavLink>
                </li>
              </ul>

}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Bannerwrapper