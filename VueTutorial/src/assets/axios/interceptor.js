// interceptor.js
import axios from "axios";
// Create an custom instance of axios
const customAxios = axios.create();

customAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent.
    return config;
  },
  function (error) {
    // Do something with request error.
    console.error(error);
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  function (response) {
    //* Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data.
    return response
  },
  function (error) {
    //* Any status code that falls outside the range of 2xx cause this function to trigger
    // Do something with response error.
    return Promise.reject(error);
  }
);

export default customAxios;
