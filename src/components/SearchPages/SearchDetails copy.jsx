import React, { useEffect } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import Loader from "../../components/Utilities/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import config from "../../../config";
import WishlistServices from "../../services/WishlistServices";

const SearchDetails = () => {
    const { user_id } = useParams();

    const { data, isLoading } = useQuery(
        ["searchresult", user_id],
        () => WishlistServices.UserWishlist(user_id),
        {
            refetchOnWindowFocus: false,
            onSuccess: (data) => { },
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

    useEffect(() => {
        console.log("data?.data?.registries[0]", data?.data?.registries[0]);

        if (
            data?.data?.registries.length > 0 &&
            data?.data?.registries[0].user.is_private
        ) {
            toast.error(`🦄 User wishlist is private`, {
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
            // nav(-1)
            return;
        }
    }, [isLoading]);
    return (
        <div className="container">
              
            {isLoading ? (
                <Loader />
            ) : data?.data?.registries.length == 0 ? (
                <div className="container d-flex justify-content-center align-items-center">
                    <img src="/assets/images/nodatafound.jpg" height={300} width={300} />
                </div>
            ) : data?.data?.registries[0].user.is_private ? (
                <div className="container d-flex justify-content-center align-items-center">
                    <img src="/assets/images/nodatafound.jpg" height={300} width={300} />
                </div>
            ) : (
                <div
                    className="mt-4 container d-flex justify-content-center align-items-center "
                    style={{ flexDirection: "column" }}
                >
                    <div className="container text-center ">
                        <h4 style={{ color: "#6E3264" }}>
                            {data?.data?.registries[0]?.user?.first_name + " " + data?.data?.registries[0]?.user?.last_name}{" "}
                            Wishlist
                        </h4>
                    </div>
                    <div className="container text-center">
                        <div className="row">
                            {data?.data?.registries.map((each) => {
                                return (<>
                                    <div className="col" >
                                        <div className="row">
                                            <div className="col col-3">
                                                <img
                                                    className="img-fluid"
                                                    src={
                                                        each?.productImageUrl.includes(
                                                            "amazon" || "Amazon"
                                                        )
                                                            ? each?.productImageUrl
                                                            : config.apiUrl +
                                                            "/" +
                                                            each?.productImageUrl
                                                    }
                                                    alt
                                                />
                                            </div>
                                            <div className="col col-9">
                                                <div className="row">

                                                    <a href={each?.url} target="_blank">
                                                        {each?.productTitle}
                                                    </a>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 mt-1">

                                                        <p className="text-start">Needs: {each?.qty}</p>
                                                    </div>
                                                    <div className="col-6 mt-1">

                                                        <p className="text-start">Price: ${each?.priceValue}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-3 text-start">
                                                        {!each?.url.includes(
                                                            "amazon" || "Amazon"
                                                        ) ? (

                                                            <img
                                                                src="/assets/images/target_logo.webp"
                                                                alt
                                                            />

                                                        ) : (

                                                            <img
                                                                src="/assets/images/amazon_logo.png"
                                                                alt
                                                            />

                                                        )}
                                                    </div>
                                                    <div className="col-9 text-center">

                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue
                                                            id="flexCheckDefault"
                                                            name="is_purchased"

                                                        />
                                                        <label className="form-check-label mx" htmlFor="flexCheckDefault">
                                                            &nbsp; I've Purchased This?
                                                        </label>

                                                    </div>


                                                </div>
                                                <div className="row">
                                                    <p className="text">{each?.note}</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchDetails;
