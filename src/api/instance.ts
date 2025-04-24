import axios from "axios";
import Cookies from "js-cookie";

const controller = new AbortController();

// const url = import.meta.env.VITE_APP_URL_LOCAL;
const urlServer = import.meta.env.VITE_APP_URL_SERVER;

const instance = axios.create({
  baseURL: "https://hotel-backend-production-a519.up.railway.app/",
  headers: { "Content-Type": "application/json" },
});

const instanceLocal = axios.create({
  baseURL: urlServer,
  headers: { "Content-Type": "application/json" },
  signal: controller.signal,
});

// controller.abort();

instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      Cookies.set("accessToken", accessToken);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instanceLocal.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      error.response.data.message !== "Invalid Password" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const res = await instanceLocal.post("", {}, { withCredentials: true });
        const newAccessToken = res.data.newAccessToken;

        Cookies.set("accessToken", newAccessToken, {
          expires: 1,
          secure: true,
          sameSite: "Strict",
        });

        originalRequest.headers.Authorization = `Bearer ${res.data.newAccessToken}`;

        return instanceLocal(originalRequest);
      } catch (err) {
        console.log("Refresh token failed:", err);
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export { instance, instanceLocal };
