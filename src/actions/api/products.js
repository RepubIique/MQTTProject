import { fetcher } from "./index";

// Testing
export const getAllProducts = () => {
  return fetcher()
    .get(`/api/listproducts`)
    .then(response => {
      return response.data;
    })
    .catch(err => console.log("Error", err));
};

export const getOrdersByUserId = data => {
  return fetcher()
    .post(`/api/getorders`, data)
    .then(response => {
      return response.data;
    })
    .catch(err => console.log("Error", err));
};
