import axios from "axios";

class PostServiceApi {
  static async getAllPost(){
    const response = await axios.get("https://restcountries.com/v2/all");
    return response.data;
  }
}

export default PostServiceApi;