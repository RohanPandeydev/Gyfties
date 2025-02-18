import React from "react";

const UserShippingAddress = () => {
  return (
    <>
      <main className="my-profile-registry-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 mb-3">
              <div className="registry-sidebar">
                <div className="sidemenu">
                  <ul>
                    <li>
                      <a href="/user/profile">Account Info</a>
                    </li>
                    <li>
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
                    
                    {/* <li className="active">
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
                  <h4>Shipping Address</h4>
                  <hr />
                </div>
                <div className="setting-form-wrap">
                  <form>
                    <div className="row">
                      <div className="col-12 col-md-12 mb-3">
                        <div className="form-group">
                          <label>Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder
                            defaultValue="Somenath roy"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-8 mb-3">
                        <div className="form-group">
                          <label>Street Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mb-3">
                        <div className="form-group">
                          <label>Apt/Suite</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mb-3">
                        <div className="form-group">
                          <label>Postal Code</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mb-3">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mb-3">
                        <div className="form-group">
                          <label>Region</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <div className="form-group">
                          <label>Country</label>
                          <select className="form-select">
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Åland Islands">Åland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">
                              American Samoa
                            </option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder
                            defaultValue
                          />
                        </div>
                      </div>
                      <div className="col-12 mb-3">
                        <div className="comon-checkbox-group">
                          <input
                            type="checkbox"
                            id="hide_your_shipping_address"
                          />
                          <label htmlFor="hide_your_shipping_address">
                            Hide your shipping address. Visitors will be asked
                            to reach out to you.
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            className="btn purple-btn px-5"
                            defaultValue="Save"
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
      </main>
    </>
  );
};

export default UserShippingAddress;
