import axios from "axios";
import config from "../../config";
import HttpHelper from "../helper/HttpHelper";

class CmsServices {
    GetTermsConditions(url) {
        return axios.get(
            `${config.apiUrl}/api/admin/termsandcondition/get`
        );
    }
    GetOurStory(url) {
        return axios.get(
            `${config.apiUrl}/api/admin/ourstory/get`
        );
    }
    GetExperiance(url) {
        return axios.get(
            `${config.apiUrl}/api/admin/experience/get`
        );
    }
    GetPress(url) {
        return axios.get(
            `${config.apiUrl}/api/admin/press/get`
        );
    }
    GetPrivacyPolicy(url) {
        return axios.get(
            `${config.apiUrl}/api/admin/privacypolicy/get`
        );
    }
    ContactUs(data) {
        return axios.post(
            `${config.apiUrl}/api/admin/contactus/create`,data
        );
    }
    GetSocialMedia(data) {
        return axios.get(
            `${config.apiUrl}/api/admin/socialmedia/get`,data
        );
    }
}

export default CmsServices = new CmsServices();
