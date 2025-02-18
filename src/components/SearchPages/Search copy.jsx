import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation, useParams } from "react-router-dom";
import { Flip, toast } from "react-toastify";
import UserServices from "../../services/UserServices";
  import Loader from "../../helper/Loader/Loader";
const Search = () => {
  const { searchvalue } = useParams();
  const { data, isLoading } = useQuery(
    ["usersearch", searchvalue],
    () => UserServices.userSearchs({ searchvalue:searchvalue?searchvalue:"" }),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        // console.log("Search Data", data?.data);
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

  return (
    <div className="container mt-5">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data?.data?.data?.length == 0 ? (
            <div className="container d-flex justify-content-center align-items-center">
              <img
                src="/assets/images/nodatafound.jpg"
                height={300}
                width={300}
              />
            </div>
          ) : (
            <table className="table table-resp">
              <thead>
                <tr style={{ background: "#6E3264", color: "#fff" }}>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <Loader />
                ) : data?.data?.data?.length == 0 ? (
                  <p className="text-danger">No Data Found</p>
                ) : (
                  data?.data?.data?.map((each, ind) => {
                    return (
                      <tr key={ind}>
                        <th scope="row">{ind + 1}</th>
                        <td>{each?.first_name}</td>
                        <td>{each?.last_name}</td>
                        <td>
                          <Link
                            to={"/wishlist/search/details/" + each?.id}
                          >
                            {" "}
                            Details{" "}
                          </Link>{" "}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
