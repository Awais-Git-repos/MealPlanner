import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com/recipes",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
