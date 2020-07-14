import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "API_KEY_FROM_UNSPLASH",
  },
});
