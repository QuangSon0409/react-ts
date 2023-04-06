import axios from "axios";
// import { IProduct } from "../interface/product";
import instance from "./instance";
export const getProduct = () => {
  return instance.get("/products");
};
export const addProduct = (product: any) => {
  return instance.post("/products", product);
};

export const getById = (id: string | number) => {
  return instance.get(`/products/${id}`);
};
export const deleteProduct = (id: string | number) => {
  return instance.delete(`/products/${id}`);
};
