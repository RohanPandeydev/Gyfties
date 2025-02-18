import axios from "axios";
import config from "../../config";

class AuthServices {
  Login(formData) {
    return axios.post(`${config.apiUrl}/api/auth/login`, formData);
  }
  // /auth/sendotp
  Otp(formData) {
    return axios.post(`${config.apiUrl}/api/auth/sendotp`, formData);
  }
  verifyOtp(formData) {
    return axios.post(`${config.apiUrl}/api/auth/verifyotp`, formData);
  }
  resetPassword(formData) {
    return axios.post(`${config.apiUrl}/api/auth/resetpassword`, formData);
  }

  Register(formData) {
    return axios.post(`${config.apiUrl}/api/auth/register`, formData);
  }
 
}

export default AuthServices = new AuthServices();
