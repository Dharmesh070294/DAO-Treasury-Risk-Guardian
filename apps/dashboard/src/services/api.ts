import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

export function setAuthToken(token: string | null) {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    window.localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    window.localStorage.removeItem("token");
  }
}

if (typeof window !== "undefined") {
  const savedToken = window.localStorage.getItem("token");
  if (savedToken) {
    setAuthToken(savedToken);
  }
}