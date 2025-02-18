import { createContext, useEffect, useState } from "react";
import React from "react";
import StorageHelper from "../../helper/StorageHelper";

const UserContext = createContext();

const UserData = ({ children }) => {
  const myuserToken =StorageHelper.getToken();

  const [token, setToken] = useState(myuserToken?myuserToken:"");
  const myuserData =StorageHelper.getUserData();
  // console.log("viooo",myuserData)
  const [userData, setUserData] = useState(myuserData ? myuserData : {});
  const [link,setWishlistlink]=useState("")
  const [giftCount,setGiftCount]=useState(0)
  return (
    <UserContext.Provider
      value={{
        setToken,
        token,
        userData,
        setUserData,
        link,
        setWishlistlink,
        giftCount,setGiftCount
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserData;
export { UserContext };
