import axios from "axios";

const instance = axios.create({
  baseURL: "https://tracksmart-backend-1.onrender.com", // ✅ your deployed backend
});

export default instance;
