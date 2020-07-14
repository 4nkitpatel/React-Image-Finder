import axios from "axios";

// this create a axios client with all the functionality we did this becx of it help us in later apps we can use function instead totally fine np
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "API_KEY_FROM_UNSPLASH",
  },
});
