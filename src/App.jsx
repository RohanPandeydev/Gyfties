import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Utilities/Layout";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import UserProfile from "./components/User/UserProfile";
import UserWishlistInfo from "./components/User/UserWishlistInfo";
import UserWishlistCollab from "./components/User/UserWishlistCollab";
import UserShippingAddress from "./components/User/UserShippingAddress";
import { RequireAuth } from "./components/Utilities/RouteGaurd";
import PageNotFound from "./components/ErrorPage/PageNotFound";
import Bookmark from "./components/Bookmark/Bookmark";
import DragBookmark from "./components/Bookmark/DragBookmark";
import UserWishlist from "./components/User/UserWishlist";
import Search from "./components/SearchPages/Search";
import SearchDetails from "./components/SearchPages/SearchDetails";
import HelpMain from "./components/Help/HelpMain";
import Loader from "./helper/Loader/Loader";
import OurStory from "./components/Cms/OurStory";
import Experiances from "./components/Cms/Experiances";
import TermsConditions from "./components/Cms/TermsConditions";
import Press from "./components/Cms/Press";
import PrivacyPolicy from "./components/Cms/PrivacyPolicy";
import MultiStepForm from "./components/GiftTracker/MultiStepForm";
import ContactForm from "./components/Cms/ContactUs";
import StorageHelper from "./helper/StorageHelper";
import { useContext } from "react";
import { UserContext } from "./components/Context/UserContext";
import UserServices from "./services/UserServices";
import { useQuery } from "@tanstack/react-query";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import Otp from "./components/Auth/Otp";

function App() {
  const user = StorageHelper.getUserData();
  const location = useLocation();

  const { setUserData, userData,giftCount,setGiftCount } = useContext(UserContext);
  const { isLoading } = useQuery(
    ["user-profile-refetch", user?.id,location.pathname],
    () => UserServices.GetOneUser(user && user?.id|| ""),
    {
      enabled: user && !!user?.id || false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
      
        StorageHelper.setUserData(data?.data?.user);
        setUserData(data?.data?.user);
        setGiftCount(data?.data?.giftCount || 0)


        return data?.data?.user;
      },
      onError: (error) => {
        console.log("ERROR", error);
      },
    }
  );
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/login"
        exact
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/forgotpassword"
        exact
        element={
          <Layout>
            <ForgotPassword />
          </Layout>
        }
      />
      <Route
        path="/forgotpassword/:email"
        exact
        element={
          <Layout>
            <Otp />
          </Layout>
        }
      />
      <Route
        path="/forgotpassword/:eid/:otp"
        exact
        element={
          <Layout>
            <ResetPassword />
          </Layout>
        }
      />
      <Route
        path="/register"
        exact
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route
        path="/user/profile"
        exact
        element={
          <Layout>
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          </Layout>
        }
      />
      {/* <Route
        path="/user/registry"
        exact
        element={
          <Layout>
            <UserRegistry />
          </Layout>
        }
      /> */}
      <Route
        path="/user/profile/wishlistinfo"
        exact
        element={
          <Layout>
            <RequireAuth>
              <UserWishlistInfo />
            </RequireAuth>
          </Layout>
        }
      />
      <Route
        path="/help"
        exact
        element={
          <Layout>
            <HelpMain />
          </Layout>
        }
      />
      <Route
        path="/user/profile/wishlistcollaborate"
        exact
        element={
          <Layout>
            <RequireAuth>
              <UserWishlistCollab />
            </RequireAuth>
          </Layout>
        }
      />
      <Route
        path="/user/profile/shippingaddress"
        exact
        element={
          <Layout>
            <RequireAuth>
              <UserShippingAddress />
            </RequireAuth>
          </Layout>
        }
      />
      <Route
        path="/bookmark"
        exact
        element={
          <RequireAuth>
            <Bookmark />
          </RequireAuth>
        }
      />
      <Route
        path="/user/wishlist"
        exact
        element={
          <Layout>
            <RequireAuth>
              <UserWishlist />
            </RequireAuth>
          </Layout>
        }
      />
      <Route
        path="/bookmark/add"
        exact
        element={
          <Layout>
               <RequireAuth>
            <DragBookmark />
            </RequireAuth>
          </Layout>
        }
      />
      <Route
        path="/wishlist/search"
        exact
        element={
          <Layout>
            <RequireAuth>
              <Search />
            </RequireAuth>
          </Layout>
        }
      />
      <Route
        path="/wishlist/search/:srcsharelink"
        exact
        element={
          <Layout>
            <RequireAuth>
              <Search />
            </RequireAuth>
          </Layout>
        }
      />
      <Route
        path="/ourstory"
        exact
        element={
          <Layout>
            {/* <RequireAuth> */}
              <OurStory />
            {/* </RequireAuth> */}
          </Layout>
        }
      />
      <Route
        path="/experiances"
        exact
        element={
          <Layout>
            {/* <RequireAuth> */}
              <Experiances />
            {/* </RequireAuth> */}
          </Layout>
        }
      />
      <Route
        path="/termsconditions"
        exact
        element={
          <Layout>
            {/* <RequireAuth> */}
              <TermsConditions />
            {/* </RequireAuth> */}
          </Layout>
        }
      />
      <Route
        path="/press"
        exact
        element={
          <Layout>
            {/* <RequireAuth> */}
              <Press />
            {/* </RequireAuth> */}
          </Layout>
        }
      />
      <Route
        path="/modal"
        exact
        element={
          <Layout>
            {/* <RequireAuth> */}
              <MultiStepForm />
            {/* </RequireAuth> */}
          </Layout>
        }
      />
      <Route
        path="/privacypolicy"
        exact
        element={
          <Layout>
            {/* <RequireAuth> */}
              <PrivacyPolicy />
            {/* </RequireAuth> */}
          </Layout>
        }
      />
      <Route
        path="/contactus"
        exact
        element={
          <Layout>
            {/* <RequireAuth> */}
              <ContactForm />
            {/* </RequireAuth> */}
          </Layout>
        }
      />
      <Route
        path="/wishlist/search/details/:user_id"
        exact
        element={
          <Layout>
            <SearchDetails />
          </Layout>
        }
      />
      <Route
        path="/loader"
        exact
        element={
            <Loader />
        }
      />
      <Route
        path="/*"
        exact
        element={
          // <Layout>
            <PageNotFound />
          // </Layout>
        }
      />
    </Routes>
  );
}

export default App;
