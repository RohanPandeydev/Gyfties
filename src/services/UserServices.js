import axios from "axios";
import config from "../../config";
import HttpHelper from "../helper/HttpHelper";

class UserServices {
  UserUpdate(formData) {
    return axios.put(
      `${config.apiUrl}/api/user/${formData?.get('id')}`,
      formData, HttpHelper.getAuthHeader()
    );
  }
  UserAccountStatusChange(formData) {
    return axios.put(
      `${config.apiUrl}/api/user/softdelete/${formData?.id}`,
      {}
    );
  }
  GetOneUser(id) {
    return axios.get(`${config.apiUrl}/api/user/${id}`);
  }
  userSearchs(data) {
    const sendText=data?.searchvalue?.includes('/wishlist/search')?data?.searchvalue.split('/wishlist/search/')[1] :data?.searchvalue;

    return axios.get(`${config.apiUrl}/api/wishlist/getwishlistbyusername?searchtxt=${sendText}`);
  }
  UserAccountPermanentDelete(data) {
    return axios.delete(`${config.apiUrl}/api/user/${data?.id}`, HttpHelper.getAuthHeader());
  }
  UserProfileImageRemove(data) {
    return axios.put(`${config.apiUrl}/api/user/profileimage/remove/${data?.id}`,{}, HttpHelper.getAuthHeader());
  }
 
}

export default UserServices = new UserServices();
