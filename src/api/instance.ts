import axios from "axios";
import { isAuthenticate } from "../utils/localStroage";
const token = localStorage.getItem("accessToken");
const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export default instance;
