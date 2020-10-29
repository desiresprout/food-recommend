import axios from "axios";

const host = "http://localhost:5000";

const axiosClient = axios.create({
  baseURL: host,
  withCredentials: true,
});

axiosClient.defaults.timeout = 5000;

export default axiosClient;
