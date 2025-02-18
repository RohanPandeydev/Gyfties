import React from "react";

const PriceFilter = ({handleChangeFilter,filter,handleToggleComponent}) => {
  return (
    <div className="price-filter">
      <h4>Price</h4>
      <ul>
        <li>
          <div className="comon-checkbox-group">
            <input type="checkbox"  id="under_50"  checked={filter=="50"?true:false} onClick={(e)=>handleChangeFilter(e,"50")} />
            <label htmlFor="under_50">Under $50</label>
          </div>
        </li>
        <li>
          <div className="comon-checkbox-group">
            <input type="checkbox" id="p_50_to_100"  checked={filter=="50-to-100"?true:false} onClick={(e)=>handleChangeFilter(e,"50-to-100")} />
            <label htmlFor="p_50_to_100">$50 to $100</label>
          </div>
        </li>
        <li>
          <div className="comon-checkbox-group">
            <input type="checkbox" id="p_100" checked={filter=="100"?true:false}   onClick={(e)=>handleChangeFilter(e,"100")}/>
            <label htmlFor="p_100">$100+</label>
          </div>
        </li>
      </ul>
      {/* <button className="btn btn-danger">Must Have</button> */}
    </div>
  );
};

export default PriceFilter;
