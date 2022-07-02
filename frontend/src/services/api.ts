import axios from "axios";

export const api = axios.create({
  baseURL: "https://cornershopper-searcher-api.vercel.app/api",
  headers: {
    "content-type": "application/json; charset=utf-8",
  },
});
