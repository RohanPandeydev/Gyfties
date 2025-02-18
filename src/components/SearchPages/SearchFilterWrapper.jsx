import React from 'react'

const SearchFilterWrapper = () => {
  return (
    <div className="filter-wrapper">
    <ul>
      <li>
        <div className="dropdown">
          <button className="btn purple-btn dropdown-toggle" type="button" id="gifts_dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Available Gifts
          </button>
          <ul className="dropdown-menu p-3 shadow" aria-labelledby="gifts_dropdown">
            <li>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="GiftsRadio" id="allGifts1" />
                <label className="form-check-label" htmlFor="allGifts1">
                  All Gifts
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="GiftsRadio" id="AvailableGifts1" defaultChecked />
                <label className="form-check-label" htmlFor="AvailableGifts1">
                  Available Gifts
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="GiftsRadio" id="PurchasedGifts1" />
                <label className="form-check-label" htmlFor="PurchasedGifts1">
                  Reserved &amp; Purchased Gifts
                </label>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <button className="btn btn-danger">Under $50</button>
      </li>
      <li>
        <button className="btn btn-danger">$50 to $100</button>
      </li>
      <li>
        <button className="btn btn-danger">$100+</button>
      </li>
      <li>
        <div className="dropdown">
          <button className="btn purple-btn dropdown-toggle" type="button" id="Stores_dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Stores
          </button>
          <ul className="dropdown-menu p-3 shadow" aria-labelledby="Stores_dropdown">
            <li>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="AllStores" />
                <label className="form-check-label" htmlFor="AllStores">
                  All Stores
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="Babylist" defaultChecked />
                <label className="form-check-label" htmlFor="Babylist">
                  Babylist
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="Target" />
                <label className="form-check-label" htmlFor="Target">
                  Target
                </label>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  )
}

export default SearchFilterWrapper