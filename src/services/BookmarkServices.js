import axios from "axios";
import config from "../../config";
import HttpHelper from "../helper/HttpHelper";

class BookmarkServices {
    GetBookmarkDetails(url) {
        return axios.get(
            `${config.apiUrl}/api/wishlist/read?u=${url}`,
            HttpHelper.getAuthHeader()
        );
    }
}

export default BookmarkServices = new BookmarkServices();
