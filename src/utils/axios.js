import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
console.log("📡 Axios Base URL:", baseURL); // ✅ Debug

const instance = axios.create({
  baseURL,
  withCredentials: false, // ❗ Use true only if backend uses cookies
});

export default instance;
