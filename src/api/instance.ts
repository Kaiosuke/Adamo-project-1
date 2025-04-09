import axios from "axios";

const instance = axios.create({
  baseURL: "https://hotel-backend-production-a519.up.railway.app/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

const instanceLocal = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { instance, instanceLocal };
