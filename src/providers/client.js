import axios from "axios";
import { getFromStorage } from "../services/auth";

const apiURL = process.env.REACT_APP_API_URL;

const instance = axios.create({ baseURL: apiURL });

instance.interceptors.request.use((config) => {
  const user = getFromStorage("user");

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: user?.accessToken ? `Bearer ${user?.accessToken}` : "",
    },
  };
});

export default instance;
