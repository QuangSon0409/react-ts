import axios from "axios";
import { IProduct } from "../interface/product";
import instance from "./instance";
export const getProduct = () => {
  return instance.get("/products");
};
export const addProduct = (product: IProduct) => {
  return instance.post("/products", product, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjExN2QyODM0NTlhYzgwNzI5MzhmNiIsImlhdCI6MTY4MDEwODUwOCwiZXhwIjoxNjgwMTk0OTA4fQ.dMPjOyxBFg1mpR20foi774JnWNDpWQhF_MNCC5Whj70`,
    },
  });
};
export const deleteProduct = (id: string | number) => {
  return instance.delete(`/products/${id}`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjExN2QyODM0NTlhYzgwNzI5MzhmNiIsImlhdCI6MTY4MDEwODUwOCwiZXhwIjoxNjgwMTk0OTA4fQ.dMPjOyxBFg1mpR20foi774JnWNDpWQhF_MNCC5Whj70`,
    },
  });
};
