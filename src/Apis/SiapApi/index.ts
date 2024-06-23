import axios from "axios";
import { toast } from "react-toastify";

export const SiapApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

SiapApi.interceptors.request.use((config) => {
  let token = "";
  if (typeof window !== "undefined") {
    const localToken = localStorage.getItem("@token");

    if (localToken) {
      token = localToken.replaceAll('"', "");
    }

    if (token && config.headers !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

SiapApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 403) {
      toast.error("Token expirado");

      setTimeout(() => {
        localStorage.clear();
        window.location.href = "/login";
      }, 2000);
    }

    return Promise.reject(error);
  }
);
