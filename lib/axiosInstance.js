import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NEWS_API ,
});

export default axiosInstance;
