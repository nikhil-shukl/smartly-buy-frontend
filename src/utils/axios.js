import axios from "axios";

// Fallback if VITE_API_URL is not set
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const instance = axios.create({
  baseURL,
  withCredentials: true,
});

export default instance;

