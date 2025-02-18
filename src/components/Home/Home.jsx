import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Bannerwrapper from "./Bannerwrapper";
import DesignerKnittedWrapper from "./DesignerKnittedWrapper";
import AnythingStoreWrapper from "./AnythingStoreWrapper";
import OfferItemsWrapper from "./OfferItemsWrapper";
import PersonalMeaningfulWrapper from "./PersonalMeaningfulWrapper";
import CongratulationsWrapper from "./CongratulationsWrapper";
import CustomerTestimonialsWrapper from "./CustomerTestimonialsWrapper";
import WishlistWrapper from "./WishlistWrapper";

const Home = () => {
  const { userData, token } = useContext(UserContext)
  return (
    <>
      <div>
        {/* Banner Wrapper */}
        <Bannerwrapper userData={userData} token={token}  />
        {/* DesignerKnittedWrapper */}
        {/* <DesignerKnittedWrapper userData={userData} token={token}  /> */}
        {/* AnythingStoreWrapper */}
        <AnythingStoreWrapper userData={userData} token={token}  />
        {/* AnythingStoreWrapper */}
        {/* <AnythingStoreWrapper userData={userData} token={token}  /> */}
        {/* OfferItemsWrapper */}
        {/* <OfferItemsWrapper /> */}
        {/* PersonalMeaningfulWrapper */}
        <PersonalMeaningfulWrapper />
        {/* CongratulationsWrapper */}
        <CongratulationsWrapper />
        {/* CustomerTestimonialsWrapper */}
        {/* <CustomerTestimonialsWrapper /> */}
        {/* WishlistWrapper */}
        <WishlistWrapper  userData={userData} token={token} />
      </div>
    </>
  );
};

export default Home;
