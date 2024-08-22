import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

//A querystring parsing and stringifying library

//Base URL from .env

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Your API base URL
  //   timeout: 10000, // Request timeout in milliseconds
});
axiosInstance.interceptors.request.use(
  (config: any) => {
    // Add Authorization header or modify config if needed
    const token = localStorage.getItem("access_token");
    console.log("TOKEN", token);

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    console.log("Request:", config);
    return config;
  },
  (error: AxiosError) => {
    // Handle request error
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Process response data if needed
    console.log("Response:", response);
    return response;
  },
  (error: AxiosError) => {
    // Handle response error
    console.error("Response Error:", error);
    if (error.response) {
      // Handle different response statuses here
      switch (error.response.status) {
        case 401:
          // Handle Unauthorized error
          break;
        case 404:
          // Handle Not Found error
          break;
        // Add more cases as needed
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
