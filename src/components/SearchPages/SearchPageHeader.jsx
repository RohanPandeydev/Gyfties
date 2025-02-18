import React, { useContext } from 'react'
import StorageHelper from '../../helper/StorageHelper'
import { UserContext } from '../Context/UserContext'

const SearchPageHeader = ({data}) => {
  const {userData}=useContext(UserContext)
  console.log("Data",data,"data")
  return (
    <section className="find-registry-top">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="find-name">
            <h3>{data && data?.first_name} Wishlist</h3>
            <p>{data && data?.wishlist_title || ""}</p>

            {/* <p>Arrival Date January 3, 2024</p> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SearchPageHeader