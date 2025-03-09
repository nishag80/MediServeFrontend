import axios from "axios";
import { store } from "../redux/store/store";
import { logoutUser } from "../redux/store/actions";
import { API_BASE_URL } from "../constants";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor to add Authorization header
api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token; // Replace with how you get the token from your state
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor to handle errors (e.g., 401 Unauthorized)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token might be expired, log out user
      store.dispatch(logoutUser());
    }
    return Promise.reject(error);
  },
);

export default api;
