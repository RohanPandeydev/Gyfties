import axios from "axios";
import config from "../../config";
import HttpHelper from "../helper/HttpHelper";

class HelpServices {
    GetFaq(url) {
        return axios.get(
            `${config.apiUrl}/api/admin/faq/getall`
        );
    }
}

export default HelpServices = new HelpServices();
