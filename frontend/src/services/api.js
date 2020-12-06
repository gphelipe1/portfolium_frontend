import axios from "axios";

const api = axios.create({
  baseURL: "https://portifolium.free.beeceptor.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
