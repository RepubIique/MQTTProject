import Axios from "axios";

export const PORT = process.env.PORT || 8080;
export const GBP_API_ROOT = `http://localhost:${PORT}`;
export const GBP_API_KEY = "";

export const fetcher = () => {
  return Axios.create({
    baseURL: GBP_API_ROOT,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
};
