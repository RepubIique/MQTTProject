import Axios from "axios";

export const PORT = process.env.PORT || 8080;
export const GBP_API_ROOT = `https://104.248.152.188`;
export const GBP_API_KEY = "";

export const fetcher = () => {
  return Axios.create({
    baseURL: GBP_API_ROOT,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
