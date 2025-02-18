import axios from "axios";
import config from "../../config";
import HttpHelper from "../helper/HttpHelper";

class WishlistServices {
    CreateWishlist(formdata) {
        return axios.post(
            `${config.apiUrl}/api/wishlist/create`, formdata,
            HttpHelper.getAuthHeader()
        );
    }
    UserWishlist(data) {
        return axios.get(
            `${config.apiUrl}/api/wishlist/userwishlist/${data} `,
            HttpHelper.getAuthHeader()
        );
    }
    UserWishlistUpdatePrivacy(data) {
        return axios.put(
            `${config.apiUrl}/api/wishlist/userwishlist/updateuserwishlistprivacy/${data?.id}`, data,
            HttpHelper.getAuthHeader()
        );
    }
    UserWishlistUpdate(data) {
        return axios.put(
            `${config.apiUrl}/api/wishlist/userwishlist/update/${data.get('id')}`, data,
            HttpHelper.getAuthHeaderMultiPart()
        );
    }

    DeleteWishlistItem(data) {
        return axios.delete(
            `${config.apiUrl}/api/wishlist/userwishlist/delete/${data?.id}`,
            HttpHelper.getAuthHeader()
        );
    }
    UserWishlistInvite(data) {
        return axios.post(
            `${config.apiUrl}/api/wishlist/sendinvite`,data,
            HttpHelper.getAuthHeader()
        );
    }
    UserGiftTracker(data) {
        return axios.post(
            `${config.apiUrl}/api/giftpurchase/create`,data,
            HttpHelper.getAuthHeader()
        );
    }
    UserGiftAll(data) {
        return axios.get(
            `${config.apiUrl}/api/giftpurchase/get/purchasedgifts/${data?.id}`,
            HttpHelper.getAuthHeader()
        );
    }
    UserGiftUpdateById(data) {
        return axios.put(
            `${config.apiUrl}/api/giftpurchase/update/${data?.id}`,data,
            HttpHelper.getAuthHeader()
        );
    }
    UserGiftDeleteById(data) {
        return axios.delete(
            `${config.apiUrl}/api/giftpurchase/get/deletegifts/${data?.id}`,data,
            HttpHelper.getAuthHeader()
        );
    }
    UserAvailableGift(data) {
        return axios.get(
            `${config.apiUrl}/api/giftpurchase/get/availableproductsbyuser/${data?.id}`,
            HttpHelper.getAuthHeader()
        );
    }
    UserPurchasedGift(data) {
        return axios.get(
            `${config.apiUrl}/api/giftpurchase/get/purchasedproductsbyuser/${data?.id}`,
            HttpHelper.getAuthHeader()
        );
    }
}

export default WishlistServices = new WishlistServices();
