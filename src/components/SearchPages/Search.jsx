import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Flip, toast } from "react-toastify";
import UserServices from "../../services/UserServices";
  import Loader from "../../helper/Loader/Loader";
const Search = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const random = Math.floor(Math.random() * 52) + 1
  const [srch, setSrch] = useState("")
  const { srcsharelink } = useParams()
  const nav = useNavigate()
  const { data, isLoading } = useQuery(
    ["usersearch", srch],
    () => UserServices.userSearchs({ searchvalue: srch }),
    {

      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log("Search Data", data?.data);
        if (data?.data?.data[0]?.is_private || srch.startsWith('LI') && srch.endsWith("NK")) {
          return nav("/wishlist/search/details/" + btoa(data?.data?.data[0]?.id) + characters.charAt(random))
        }
      },
      onError: (err) => {
        toast.error(`🦄 ${err?.response?.data?.message || err?.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
      },
    }
  );

  const handleSearch = (e) => {
    e.preventDefault()
    setSrch(e?.target?.srch?.value)
  }
  useEffect(() => {
    console.log("search", !!srcsharelink)
    if (!!srcsharelink) {
      setSrch(srcsharelink)
    }


  }
    , [srcsharelink])


  return (
    <section className="find-registry-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 mb-4">
            <div className="comon-title mb-3 text-center">
              <h3>Find Wishlist</h3>
            </div>
            <div className="search-registry-wrap">
              <form onSubmit={handleSearch}>
                <input className="form-control" type="search" placeholder="Search by name" name="srch" />
                <button className="search-btn" type="button"><i className="las la-search" /></button>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-8 offset-md-2">
            <div className="find-table-headers">
              <div className="find-table-header hidden-xs" />
              <h5 className="text-uppercase text-bold tiny d-none d-md-block">#</h5>
              <h5 className="text-uppercase text-bold tiny d-none d-md-block">First Name</h5>
              <h5 className="text-uppercase text-bold tiny d-none d-md-block">Last Name</h5>
            </div>
            {
              isLoading ? <Loader /> : data?.data?.data?.length == 0 ?
                <div className="container d-flex justify-content-center align-items-center">
                  <img
                    src="/assets/images/nodatafound.jpg"
                    height={300}
                    width={300}
                  />
                </div> : data?.data?.data?.map((each, ind) => {
                  if (each?.is_private && !srch.startsWith('LI') && !srch.endsWith("NK")) {
                    return
                  }
                  return <Link className="results-container"
                    to={"/wishlist/search/details/" + btoa(each?.id) + characters.charAt(random)}
                  >
                    <div class="grid-item find-avatar text-center">
                      <span class="find-no-photo text-center">{ind + 1}</span>
                    </div>
                    <div class="grid-item name"></div>
                    <div class="grid-item city">
                      {each?.first_name}
                    </div>
                    <div class="grid-item city">
                      {each?.last_name}
                    </div>


                  </Link>

                })

            }

          </div>
        </div>
      </div>
    </section>

  );
};

export default Search;
