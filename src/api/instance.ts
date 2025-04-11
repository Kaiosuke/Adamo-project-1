import axios from "axios";

const controller = new AbortController();
const instance = axios.create({
  baseURL: "https://hotel-backend-production-a519.up.railway.app/",
  headers: { "Content-Type": "application/json" },
});

const instanceLocal = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { "Content-Type": "application/json" },
  signal: controller.signal,
});

// controller.abort();

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
