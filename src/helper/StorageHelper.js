class StorageHelper {
  // token
  setToken(data) {
    localStorage.setItem("gyfties_user_token", data);
  }

  getToken() {
    return localStorage.getItem("gyfties_user_token");
  }
  getUserData() {
    return JSON.parse(localStorage.getItem("gyfties_user_details"));
  }
  setUserData(data) {
    return localStorage.setItem("gyfties_user_details", JSON.stringify(data));
  }

  removeStorageData() {
    localStorage.removeItem("gyfties_user_details");
    return localStorage.removeItem("gyfties_user_token");
  }
}

export default StorageHelper = new StorageHelper();
